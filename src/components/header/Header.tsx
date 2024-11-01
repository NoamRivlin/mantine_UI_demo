import { Center, Container, Text } from "@mantine/core";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <>
      <Container size="xl" h="100%" style={{ justifyContent: "center", alignContent: "center" }}>
        <Center>
          <Text component={Link} to="/" size="xl" style={{ fontWeight: 700 }}>
            Products Catalog
          </Text>
        </Center>
      </Container>
    </>
  );
}

export default AppHeader;
