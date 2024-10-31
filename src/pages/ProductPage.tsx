import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../types/product";

interface ProductPageProps {
  products: Product[];
}

function ProductPage({ products }: ProductPageProps) {
  const {id} = useParams();
  const navigate = useNavigate();

  const product = products.find((product) => product.id === parseInt(id!));
  if(!product){
    navigate("/404")
  }
  
  
    return <div>ProductPage</div>;
}

export default ProductPage;
