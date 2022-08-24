import { addProduct } from "../../app/cartSlice";
import { useAppDispatch } from "../../app/hooks";
import { formatPrice } from "../../util/format";
import { ProductContainer } from "./styles";

interface ProductProps {
  product: {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: string;
    photo: string;
  }
}

export function Product({ product }: ProductProps) {
  const dispatch = useAppDispatch();

  function handleAddProduct() {
    dispatch(addProduct(product))
  }

  return (
    <ProductContainer>
      <div>
        <picture>
          <img src={product.photo} alt="" />
        </picture>
        <div>
          <h2>{product.name}</h2>
          <span>{formatPrice(Number(product.price))}</span>
        </div>
        <p>{product.description}</p>
      </div>

      <button
        onClick={handleAddProduct}
      >
        <picture>
          <img src="/shopping-bag.svg" alt="" />
        </picture>
        <span>COMPRAR</span>
      </button>
    </ProductContainer>
  )
}