import { ProductContainer } from "./styles";

interface ProductProps {
  name: string;
  description: string;
  price: string;
  photo: string;
}

export function Product({ name, description, price, photo }: ProductProps) {
  return (
    <ProductContainer>
      <div>
        <picture>
          <img src={photo} alt="" />
        </picture>
        <div>
          <h2>{name}</h2>
          <span>R${price}</span>
        </div>
        <p>{description}</p>
      </div>

      <button>
        <picture>
          <img src="/shopping-bag.svg" alt="" />
        </picture>
        <span>COMPRAR</span>
      </button>
    </ProductContainer>
  )
}