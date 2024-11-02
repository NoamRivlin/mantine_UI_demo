import { AppShell, Flex, Text, useMantineColorScheme } from "@mantine/core";
import AppHeader from "../components/header/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { colorScheme } = useMantineColorScheme();

  return (
    <AppShell
      padding={{ base: 10, sm: 15, lg: "xl" }}
      styles={(theme) => ({
        main: {
          backgroundColor: colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
      header={{ height: 60 }}
    >
      <AppShell.Header>
        <AppHeader />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer>
        <Flex justify="center" align="center" style={{ padding: "0.5rem 0" }}>
          <Text>Made by Noam 👽</Text>
        </Flex>
      </AppShell.Footer>
    </AppShell>
  );
}


export default Layout;