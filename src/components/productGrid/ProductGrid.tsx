import { Center, Loader, SimpleGrid } from "@mantine/core";
import { Product } from "../../types/product";
import ProductCardMinimal from "../productCardMinimal/ProductCardMinimal";

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
}

function ProductGrid({ products, isLoading }: ProductGridProps) {
  if (isLoading)
    return (
      <Center>
        <Loader size={"lg"} />
      </Center>
    );

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl" style={{ paddingBlockEnd: "4rem" }}>
      {products.map((product) => (
        <ProductCardMinimal key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}

export default ProductGrid;
