import { ProductCheckout } from "../ProductCheckout";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Carrinho de compras</h2>

        <div>
          <ProductCheckout />
          <ProductCheckout />
          <ProductCheckout />
        </div>

        <div>
          <p>Total</p>
          <span>R$798</span>
        </div>

        <button>
          X
        </button>
      </div>
      
      <button>
        Finalizar Compra
      </button>
    </CheckoutContainer>
  )
}