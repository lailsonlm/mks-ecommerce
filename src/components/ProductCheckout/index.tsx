import { removeProduct, updateProductAmount } from "../../app/cartSlice";
import { useAppDispatch } from "../../app/hooks";
import { formatPrice } from "../../util/format";
import { ProductCheckoutContainer } from "./styles";

interface ProductCheckoutProps {
  product: {
    id: number;
    amount: number;
    name: string;
    photo: string;
    price: string;
  }
}

interface ProductUpdate {
  id: number;
  amount: number;
  name: string;
  photo: string;
  price: string;
}

export function ProductCheckout({ product }: ProductCheckoutProps) {
  const dispatch = useAppDispatch();

  function handleRemoveProduct() {
    dispatch(removeProduct(product))
  }

  
function handleProductIncrement(product: ProductUpdate) {
  console.log(product.amount + 1)
  dispatch(updateProductAmount({ amount: product.amount + 1, id: product.id }))
}

function handleProductDecrement(product: ProductUpdate) {
  dispatch(updateProductAmount({ amount: product.amount - 1, id: product.id }))
}
  
  return (
    <ProductCheckoutContainer>
      <picture>
        <img src={product.photo} alt="" />
      </picture>
      <p>{product.name}</p>

      <div>
        <div>
          <p>Qtd:</p>
          <div>
            <button
              onClick={() => handleProductDecrement(product)}
            >
              -
            </button>
            <span>{product.amount}</span>
            <button
              onClick={() => handleProductIncrement(product)}
            >
              +
            </button>
          </div>
        </div>
        <strong>{formatPrice(Number(product.price))}</strong>
      </div>

      
      <button
        onClick={handleRemoveProduct}
      >
        x
      </button>
    </ProductCheckoutContainer>
  )
}