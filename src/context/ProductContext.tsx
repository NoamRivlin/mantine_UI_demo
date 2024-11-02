import React, { createContext, useContext, useState } from "react";
import { Product } from "../types/product";

interface ProductDisplayContextType {
  // Pagination state
  currentPage: number;
  itemsPerPage: string;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (items: string) => void;

  // Calculated values
  totalPages: number;
  currentProducts: Product[];
  paginationRange: {
    startIndex: number;
    endIndex: number;
    total: number;
  };
}

const ProductDisplayContext = createContext<ProductDisplayContextType | null>(null);

interface ProductProviderProps {
  children: React.ReactNode;
  products: Product[];
}

export function ProductDisplayProvider({ children, products }: ProductProviderProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState("6");

  // Calculate pagination
  const itemsCount = parseInt(itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsCount);
  const startIndex = (currentPage - 1) * itemsCount;
  const endIndex = startIndex + itemsCount;
  const currentProducts = products.slice(startIndex, endIndex);

  const value = {
    currentPage,
    itemsPerPage,
    setCurrentPage,
    setItemsPerPage,
    totalPages,
    currentProducts,
    paginationRange: {
      startIndex,
      endIndex,
      total: products.length,
    },
  };

  return <ProductDisplayContext.Provider value={value}>{children}</ProductDisplayContext.Provider>;
}

export function useProductDisplay() {
  const context = useContext(ProductDisplayContext);
  if (!context) {
    throw new Error("useProductDisplay must be used within a ProductDisplayProvider");
  }
  return context;
}
