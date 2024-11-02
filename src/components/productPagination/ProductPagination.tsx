import { Group, Pagination, Select, Text } from "@mantine/core";
import { useProductDisplay } from "../../context/ProductContext";

interface ProductPaginationProps {
  isJustText?: boolean;
}

function ProductPagination({ isJustText }: ProductPaginationProps) {
  const { currentPage, setCurrentPage, itemsPerPage, setItemsPerPage, totalPages, paginationRange } =
    useProductDisplay();

  const itemsPerPageOptions = [
    { value: "6", label: "6 per page" },
    { value: "9", label: "9 per page" },
    { value: "12", label: "12 per page" },
  ];

  if (isJustText) {
    return (
      <Text size="sm" c="dimmed" ta="center" mt="sm">
        Showing {paginationRange.startIndex + 1}-{Math.min(paginationRange.endIndex, paginationRange.total)} of{" "}
        {paginationRange.total} products
      </Text>
    );
  }

  return (
    <Group justify="space-between" p="sm" align="center">
      <Group>
        <Text size="sm">Items per page:</Text>
        <Select
          value={itemsPerPage}
          onChange={(value) => {
            setItemsPerPage(value || "6");
            setCurrentPage(1); // Reset to first page when changing items per page
          }}
          data={itemsPerPageOptions}
          style={{ width: 120 }}
        />
      </Group>

      <Pagination
        total={totalPages}
        value={currentPage}
        onChange={setCurrentPage}
        size="sm"
        radius="md"
        withEdges
        style={{ marginTop: "1rem" }}
      />
    </Group>
  );
}

export default ProductPagination;
