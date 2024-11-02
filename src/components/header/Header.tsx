import {
  Center,
  Container,
  Text,
  useMantineColorScheme,
  useComputedColorScheme,
  Group,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function AppHeader() {
  const { toggleColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();

  return (
    <Container size="xl" h="100%">
      <Center h="100%" style={{ position: "relative" }}>
        <Group gap="xs" justify="center" align="center">
          <Text component={Link} to="/" size="xl" fw={700}>
            Products Catalog
          </Text>
          <Tooltip label='Toggle color scheme' position="bottom">
            <ActionIcon variant="outline" radius="md" size="lg" onClick={() => toggleColorScheme()}>
              {computedColorScheme === "dark" ? (
                <MdLightMode style={{ width: "70%", height: "70%" }} />
              ) : (
                <MdDarkMode style={{ width: "70%", height: "70%" }} />
              )}
            </ActionIcon>
          </Tooltip>
        </Group>
      </Center>
    </Container>
  );
}

export default AppHeader;
