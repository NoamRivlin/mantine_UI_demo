import { Card, Image, Text, Group, Badge, Stack, Box } from "@mantine/core";
import { Product } from "../../types/product";
import { useMediaQuery } from "@mantine/hooks";

interface ProductCardFullProps {
  product: Product;
}

const ProductCardFull = ({ product }: ProductCardFullProps) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const Description = ({ text }: { text: string }) => (
    <Box maw="80%" mx="auto" mt="md">
      <Text size="md" ta="center" lh={1.6}>
        {text}
        {/* {text}
        {text} */}
      </Text>
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
    <Card shadow="sm" p="md" radius="md" h={isMobile ? 580 : 500} withBorder>
      <Card.Section withBorder>
        <Image
          src={product.image.url}
          alt={product.title}
          height={300}
          fit="contain"
          style={{ backgroundColor: "transparent", padding: "1rem" }}
        />
      </Card.Section>

      <HeaderContent title={product.title} price={product.price} />
      <Description text={product.desc} />
    </Card>
  );
};

export default ProductCardFull;
