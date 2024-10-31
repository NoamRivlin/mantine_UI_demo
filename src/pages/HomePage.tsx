import { Product } from "../types/product";

interface HomePageProps {
  products: Product[];
}

function HomePage({ products }: HomePageProps) {
  return <div>HomePage</div>;
}

export default HomePage;
