import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { useProducts } from "./hooks/useProducts";


function App() {
  const { products, isLoading, error } = useProducts();

  return (
    <>
      <BrowserRouter>
        <MantineProvider defaultColorScheme="dark">
          <Routes>
            <Route path="/" element={<HomePage products={products} isLoading={isLoading} error={error} />} />
            <Route
              path="/product/:id"
              element={<ProductPage products={products} isLoading={isLoading} error={error} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MantineProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
