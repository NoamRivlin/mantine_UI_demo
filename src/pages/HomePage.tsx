import { Product } from "../types/product";
import { Center, Container, Text } from "@mantine/core";
import { useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import ProductGrid from "../components/productGrid/ProductGrid";
import { ProductDisplayProvider } from "../context/ProductContext";
import Layout from "../layout/Layout";
import { useIsLargeScreen } from "../utils/breakpointsUtil";

interface HomePageProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

function HomePage({ products, isLoading, error }: HomePageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const isLargeScreen = useIsLargeScreen();

  // useMemo wont be efficient as it will be recalculated every time searchTerm changes
  // and debouncing as well as we already get all products and just filter them
  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

  if (error) {
    return (
      <Layout>
        <Container size="md" py="xl">
          <Center h={400}>
            <Text c="red">Error loading products. Please try refreshing.</Text>
          </Center>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container size="xl">
        <Center style={{ margin: isLargeScreen ? "1rem auto 0.5rem auto" : "2rem auto 1rem auto " }}>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </Center>

        <ProductDisplayProvider products={filteredProducts}>
          <ProductGrid isLoading={isLoading} />
        </ProductDisplayProvider>
      </Container>
    </Layout>
  );
}

export default HomePage;
