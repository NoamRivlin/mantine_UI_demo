import { Product } from "../types/product";
import { AppShell, useMantineColorScheme, Flex, Text, Container } from "@mantine/core";
import { useState } from "react";
import AppHeader from "../components/header/Header";
import SearchBar from "../components/searchbar/SearchBar";
import ProductGrid from "../components/productGrid/ProductGrid";
import { ProductDisplayProvider } from "../context/ProductContext";

interface HomePageProps {
  products: Product[];
  isLoading: boolean;
}

function HomePage({ products, isLoading }: HomePageProps) {
  const { colorScheme } = useMantineColorScheme();
  const [searchTerm, setSearchTerm] = useState("");

  // useMemo wont be efficient as it will be recalculated every time searchTerm changes
  // and debouncing as well as we already get all products and just filter them
  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <AppShell
      // padding="md"
      padding={{ base: 10, sm: 15, lg: "xl" }}
      styles={(theme) => ({
        main: {
          backgroundColor: colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
      header={{ height: 60 }}
    >
      <AppShell.Header>
        <AppHeader />
      </AppShell.Header>

      <AppShell.Main >
        <Container size="xl">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {/* <ProductGrid products={filteredProducts} isLoading={isLoading} /> */}
          <ProductDisplayProvider products={filteredProducts}>
          <ProductGrid isLoading={isLoading} />
        </ProductDisplayProvider>

        </Container>
      </AppShell.Main>

      <AppShell.Footer style={{ marginTop: "12rem" }}>
        <Flex justify="space-between" align="center" style={{ padding: "1rem 2rem" }}>
          <Text>Footer</Text>
        </Flex>
      </AppShell.Footer>
    </AppShell>
  );
}

export default HomePage;
