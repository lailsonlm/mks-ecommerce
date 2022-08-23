import { ProductCheckoutContainer } from "./styles";

export function ProductCheckout() {
  return (
    <ProductCheckoutContainer>
      <picture>
        <img src="/apple-watch.png" alt="" />
      </picture>
      <p>Apple Watch Series 4 GPS</p>

      <div>
        <div>
          <p>Qtd:</p>
          <div>
            <button>
              -
            </button>
            <span>9</span>
            <button>
              +
            </button>
          </div>
        </div>
        <strong>R$399</strong>
      </div>

      
      <button>x</button>
    </ProductCheckoutContainer>
  )
}