import { Group, Pagination, Select, Text } from "@mantine/core";
import { useProductDisplay } from "../../context/ProductContext";
import { useIsMobile } from "../../utils/breakpointsUtil";

interface ProductPaginationProps {
  displayTextOnly?: boolean;
}

function ProductPagination({ displayTextOnly }: ProductPaginationProps) {
  const { currentPage, setCurrentPage, itemsPerPage, setItemsPerPage, totalPages, paginationRange } =
    useProductDisplay();

  const isMobile = useIsMobile();

  const itemsPerPageOptions = [
    { value: "6", label: "6 per page" },
    { value: "9", label: "9 per page" },
    { value: "12", label: "12 per page" },
  ];

  if (displayTextOnly) {
    return (
      <Text size="sm" c="dimmed" ta="center" mb={isMobile ? "md" : 'sm'}>
        Showing {paginationRange.startIndex + 1}-{Math.min(paginationRange.endIndex, paginationRange.total)} of{" "}
        {paginationRange.total} products
      </Text>
    );
  }

  return (
    <Group
      justify={isMobile ? "center" : "space-between"}
      p="xs"
      w="95%"
      m="0 auto"
      align="center"
      style={{ marginTop: "1rem" }}
    >
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
        withEdges={isMobile ? false : true}
        siblings={isMobile ? 0 : 1}
        mt={isMobile ? "md" : 0}
      />
    </Group>
  );
}

export default ProductPagination;
