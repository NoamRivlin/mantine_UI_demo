import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, MantineColorsTuple, MantineProvider } from "@mantine/core";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { productService } from "./services/apiService";
import { Product } from "./types/product";
import { useProducts } from "./hooks/useProducts";

const myColor: MantineColorsTuple = [
  "#e7feef",
  "#d4f9e0",
  "#a9f1c1",
  "#7beaa0",
  "#55e384",
  "#3ddf71",
  "#2edd68",
  "#1fc456",
  "#12ae4b",
  "#00973d",
];

const theme = createTheme({
  colors: {
    myColor,
  },
});

function App() {
  const [count, setCount] = useState(0);
  const { products, isLoading, error, refetch } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {/* <MantineProvider defaultColorScheme="dark"> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}

      <BrowserRouter>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <Routes>
            <Route path="/" element={<HomePage products={products} />} />
            <Route path="/product/:id" element={<ProductPage products={products} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MantineProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
