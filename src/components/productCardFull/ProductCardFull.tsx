import { Card, Image, Text, Group, Badge, Stack, Box, ScrollArea } from "@mantine/core";
import { Product } from "../../types/product";
import { useIsMobile } from "../../utils/breakpointsUtil";

interface ProductCardFullProps {
  product: Product;
}

const ProductCardFull = ({ product }: ProductCardFullProps) => {
  const isMobile = useIsMobile();

  const Description = ({ text }: { text: string }) => (
    <Box
      style={{
        flex: "1 1 auto",
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        padding: "0 1rem",
      }}
    >
      <ScrollArea.Autosize
        mah="100%" // This makes it respect the parent container's height
        offsetScrollbars
        scrollbarSize={isMobile ? 6 : 12}
        viewportProps={{
          style: {
            flex: 1,
            minHeight: 0,
          },
        }}
      >
        <Box p="xs">
          <Text size="md" ta="center" lh={isMobile ? 1.6 : 1.8}>
            {/* to demonstrate handling long text */}
            {text}
            {text}
            {text}
            {text}
            {text}
          </Text>
        </Box>
      </ScrollArea.Autosize>
    </Box>
  );

  const HeaderContent = ({ title, price }: { title: string; price: number }) => {
    if (isMobile) {
      return (
        <Group justify="space-between" mt="md" mb="xs">
          <Text size="lg" fw={500}>
            {title}
          </Text>
          <Badge color="blue" variant="light" size="lg">
            {price}
          </Badge>
        </Group>
      );
    }

    return (
      <Stack align="center" justify="center" mt="md" mb="xs" gap="xs">
        <Text size="lg" fw={500} ta="center">
          {title}
        </Text>
        <Badge color="blue" variant="light" size="lg">
          {price}
        </Badge>
      </Stack>
    );
  };

  return (
    <Card
      shadow="sm"
      p="md"
      radius="md"
      withBorder
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "70vh",
        maxHeight: "70vh",
      }}
    >
      <Card.Section withBorder>
        <Image
          src={product.image.url}
          alt={product.title}
          height={isMobile ? 220 : 320}
          p="1rem"
          w={isMobile ? "100%" : "80%"}
          m="0 auto"
          style={{ objectFit: "contain" }}
        />
      </Card.Section>

      <Box style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
        {/* <Box > */}
        <HeaderContent title={product.title} price={product.price} />
        <Description text={product.desc} />
      </Box>
    </Card>
  );
};

export default ProductCardFull;
