import { Center, Loader, SimpleGrid } from "@mantine/core";
import ProductCardMinimal from "../productCardMinimal/ProductCardMinimal";
import { useProductDisplay } from "../../context/ProductContext";
import ProductPagination from "../productPagination/ProductPagination";

interface ProductGridProps {
  isLoading: boolean;
}

function ProductGrid({ isLoading, }: ProductGridProps) {
  const { currentProducts } = useProductDisplay();

  if (isLoading)
    return (
      <Center style={{ height: "50vh" }}>
        <Loader size={"xl"} />
      </Center>
    );



  return (
    <>
      <ProductPagination />

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="sm">
        {currentProducts.map((product) => (
          <ProductCardMinimal key={product.id} product={product} />
        ))}
      </SimpleGrid>

      <ProductPagination displayTextOnly />
    </>
  );
}

export default ProductGrid;
