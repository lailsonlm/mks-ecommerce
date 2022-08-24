import { closeCheckout } from "../../app/checkoutSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { formatPrice } from "../../util/format";
import { ProductCheckout } from "../ProductCheckout";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  const dispatch = useAppDispatch();
  const { persistedReducer } = useAppSelector(state => state)
  const { cart } = persistedReducer
  // const { cart } = useAppSelector(state => state)
  
  function handleCloseCheckout() {
    dispatch(closeCheckout())
  }
  
  const total = formatPrice(cart.cart.reduce((sumTotal, product) => {
    return sumTotal + Number(product.price) * product.amount
  }, 0))
  
  return (
    <CheckoutContainer>
      <div>
        <h2>Carrinho de compras</h2>

        <div>
          {cart.cart.map(product => {
            return <ProductCheckout key={product.id} product={product} />
          })}
        </div>

        <div>
          <p>Total</p>
          <span>{total}</span>
        </div>

        <button
          onClick={handleCloseCheckout}
        >
          X
        </button>
      </div>
      
      <button>
        Finalizar Compra
      </button>
    </CheckoutContainer>
  )
}