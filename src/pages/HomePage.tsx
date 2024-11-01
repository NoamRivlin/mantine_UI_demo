import { useNavigate } from "react-router-dom";
import { Product } from "../types/product";
import {
  Button,
  getThemeColor,
  AppShell,
  useMantineColorScheme,
  Flex,
  Text,
  SimpleGrid,
  Container,
  Center,
  Loader,
  TextInput,
} from "@mantine/core";
import ProductCardMinimal from "../components/productCardMinimal/ProductCardMinimal";
import { useState } from "react";
import AppHeader from "../components/header/Header";
import { BsSearchHeart } from "react-icons/bs";
import { useMediaQuery } from "@mantine/hooks";
import SearchBar from "../components/searchbar/SearchBar";
import ProductGrid from "../components/productGrid/ProductGrid";

interface HomePageProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

function HomePage({ products, isLoading, error }: HomePageProps) {
  // const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const [searchTerm, setSearchTerm] = useState("");
  const isLargeScreen = useMediaQuery("( min-width: 1200px )");

  // useMemo wont be efficient as it will be recalculated every time searchTerm changes
  // and debouncing as well as we already get all products and just filter them
  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <AppShell
      padding="md"
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

      <AppShell.Main>
        <Container size="xl">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          <ProductGrid products={filteredProducts} isLoading={isLoading} />
        </Container>

        {/* <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl" style={{ paddingBlockEnd: "4rem" }}>
          {filteredProducts.map((product) => (
            <ProductCardMinimal key={product.id} product={product} />
          ))}
        </SimpleGrid> */}
      </AppShell.Main>

      <AppShell.Footer>
        <Flex justify="space-between" align="center" style={{ padding: "1rem 2rem" }}>
          <Text>Footer</Text>
        </Flex>
      </AppShell.Footer>
    </AppShell>
  );
}

export default HomePage;
