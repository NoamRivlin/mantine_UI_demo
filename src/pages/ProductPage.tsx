import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../types/product";
import { Container, Group, Button, Center, Loader, Text, Flex } from "@mantine/core";
import ProductCardFull from "../components/productCardFull/ProductCardFull";
import Layout from "../layout/Layout";
import { BsArrowBarLeft } from "react-icons/bs";
import { useEffect } from "react";
import { STORAGE_KEY } from "../services/apiService";
import { useMediaQuery } from "@mantine/hooks";

interface ProductPageProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

function ProductPage({ products, isLoading, error }: ProductPageProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("( max-width: 600px )");

  useEffect(() => {
    if (!isLoading && products.length > 0) {
      const cachedData = localStorage.getItem(STORAGE_KEY);
      if (cachedData) {
        const chachedProducts = JSON.parse(cachedData);
        const product = chachedProducts.find((product: Product) => product.id === parseInt(id!));
        if (!product) {
          navigate("/404");
        }
      }
    }
  }, [isLoading, products, id, navigate]);

  if (isLoading) {
    return (
      <Layout>
        <Container size="md" py="xl">
          <Center h={400}>
            <Loader size="xl" />
          </Center>
        </Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Container size="md" py="xl">
          <Center h={400}>
            <Flex
              direction={isMobile ? "column" : "row"}
              gap={isMobile ? "md" : 0}
              align="center"
              justify="center"
              style={{ padding: "0.5rem 0" }}
            >
              <Text c="red">Error loading product. Please try again later.</Text>
              <Button onClick={() => navigate("/")} ml="md">
                Return to Home
              </Button>
            </Flex>
          </Center>
        </Container>
      </Layout>
    );
  }

  const product = products.find((p) => p.id === parseInt(id!));

  if (!product) {
    // Double-check localStorage before navigating to 404
    const cachedData = localStorage.getItem("productsData");
    if (cachedData) {
      const cachedProducts = JSON.parse(cachedData);
      const cachedProduct = cachedProducts.find((p: Product) => p.id === parseInt(id!));
      if (cachedProduct) {
        return <ProductCardFull product={cachedProduct} />;
      }
    }
    navigate("/404");
    return null;
  }

  return (
    <Layout>
      <Container size="md" py="xl">
        <Group mb="xl">
          <Button variant="subtle" leftSection={<BsArrowBarLeft size={20} />} onClick={() => navigate("/")}>
            Back to Catalog
          </Button>
        </Group>
        <ProductCardFull product={product} />
      </Container>
    </Layout>
  );
}

export default ProductPage;
