import { Center, Group, Loader, Pagination, Select, SimpleGrid, Text } from "@mantine/core";
import { Product } from "../../types/product";
import ProductCardMinimal from "../productCardMinimal/ProductCardMinimal";
import { useState } from "react";
import { useProductDisplay } from "../../context/ProductContext";
import ProductPagination from "../productPagination/productPagination";

interface ProductGridProps {
  //   products: Product[];
  isLoading: boolean;
}

// function ProductGrid({ products, isLoading }: ProductGridProps) {
function ProductGrid({ isLoading }: ProductGridProps) {
  //   const [currPage, setCurrPage] = useState(1);
  //   const [itemsPerPage, setItemsPerPage] = useState("6");

  //   const itemsPerPageOptions = [
  //     { value: "6", label: "6 per page" },
  //     { value: "9", label: "9 per page" },
  //     { value: "12", label: "12 per page" },
  //   ];

  //   // Calculate pagination
  //   const itemsCount = parseInt(itemsPerPage);
  //   const totalPages = Math.ceil(products.length / itemsCount);
  //   const startIndex = (currPage - 1) * itemsCount;
  //   const endIndex = startIndex + itemsCount;
  //   const currentProducts = products.slice(startIndex, endIndex);
  const { currentProducts } = useProductDisplay();

  if (isLoading)
    return (
      <Center style={{ height: "50vh" }}>
        <Loader size={"xl"} />
      </Center>
    );

  return (
    <>
      {/* <Group justify="space-between" p="sm" align="center">
        <Group>
          <Text size="sm">Items per page:</Text>
          <Select
            value={itemsPerPage}
            onChange={(value) => {
              setItemsPerPage(value || "6");
              setCurrPage(1); // Reset to first page when changing items per page
            }}
            data={itemsPerPageOptions}
            style={{ width: 120 }}
          />
        </Group>

        <Pagination
          total={totalPages}
          value={currPage}
          onChange={setCurrPage}
          size="sm"
          radius="md"
          withEdges
          style={{ marginTop: "1rem" }}
        />
      </Group> */}
      <ProductPagination />

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="sm">
        {currentProducts.map((product) => (
          <ProductCardMinimal key={product.id} product={product} />
        ))}
      </SimpleGrid>
      <ProductPagination isJustText />

      {/* <Text size="sm" c="dimmed" ta="center" mt="sm">
        Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of {products.length} products
      </Text> */}
    </>
  );
}

export default ProductGrid;
