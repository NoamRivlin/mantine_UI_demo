import { Product } from "../types/product";

const API_URL: string = import.meta.env.VITE_KONIMBO_URL;
const STORAGE_KEY: string = "productsData";

export const productService = {
  getAllProducts: async (): Promise<Product[]> => {
    const cachedData = localStorage.getItem(STORAGE_KEY);
    if (cachedData) {
      const products = JSON.parse(cachedData);
      console.log("cachedData", products);

      return products;
    }
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const products: Product[] = await response.json();
      console.log("products", products);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));

      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
};
