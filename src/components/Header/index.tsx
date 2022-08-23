import { ButtonCart, HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <picture>
        <img src="/logo.svg" alt="Logo da MKS Sistemas" />
      </picture>
      <ButtonCart>
        <picture>
          <img src="/cart.svg" alt="Carrinho de compras" />
        </picture>
        <span>0</span>
      </ButtonCart>
    </HeaderContainer>
  )
}
