import { useState, useEffect } from "react";
import { Product } from "../types/product";
import { productService, STORAGE_KEY } from "../services/apiService";

interface UseProducts {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useProducts = (): UseProducts => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const products = await productService.getAllProducts();
      setProducts(products);
      setError(null);
    } catch (error) {
      setError("Failed to fetch products");
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
