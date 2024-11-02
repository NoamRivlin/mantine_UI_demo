import { AspectRatio, Card, Center, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { Product } from "../../types/product";

interface ProductCardMinimalProps {
  product: Product;
}

const ProductCardMinimal = ({ product }: ProductCardMinimalProps) => {
  return (
    <Card
      component={Link}
      to={`/product/${product.id}`}
      shadow="sm"
      p="md"
      m="sm"
      radius="md"
      style={{
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <AspectRatio>
        <Image src={product.image.url} alt={product.title} height={200} fit="contain" />
      </AspectRatio>
      <Center>
        <Text style={{ fontWeight: 500, fontSize: 18 }} size="lg" mt="md">
          {product.title}
        </Text>
      </Center>
    </Card>
  );
};

export default ProductCardMinimal;
