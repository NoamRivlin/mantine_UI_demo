import { useNavigate } from "react-router-dom";
import { Container, Title, Text, Button, Group, Stack } from "@mantine/core";
import { BsEmojiFrown, BsArrowBarLeft } from "react-icons/bs";
import Layout from "../layout/Layout";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Container size="md" py="xl">
        <Stack align="center" style={{ minHeight: "60vh" }} justify="center">
          <BsEmojiFrown size={64} className="text-gray-400" />

          <Stack align="center">
            <Title order={1} size="h1">
              404 - Page Not Found
            </Title>
            <Text size="lg" c="dimmed" ta="center">
              Oops! The page you're looking for doesn't exist or has been moved.
            </Text>
          </Stack>

          <Group>
            <Button variant="filled" size="md" leftSection={<BsArrowBarLeft size={20} />} onClick={() => navigate("/")}>
              Back to Home
            </Button>
            <Button variant="light" size="md" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </Group>
        </Stack>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
