import { useState, useEffect } from "react";
import { Product } from "../types/product";
import { productService, STORAGE_KEY } from "../services/apiService";

interface UseProducts {
  products: Product[];
  isLoading: boolean;
  error: any | null;
  refetch: () => Promise<void>;
}

export const useProducts = (): UseProducts => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const products = await productService.getAllProducts();
      setProducts(products);
      setError(null);
    } catch (error) {
      setError("Failed to fetch products");
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const refetch = async () => {
    localStorage.removeItem(STORAGE_KEY);
    await fetchProducts();
  };

  return { products, isLoading, error, refetch };
};
