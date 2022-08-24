import { openCheckout } from "../../app/checkoutSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ButtonCart, HeaderContainer } from "./styles";

export function Header() {
  const dispatch = useAppDispatch();
  const { persistedReducer } = useAppSelector(state => state)
  const { cart } = persistedReducer

  function handleOpenCheckout() {
    dispatch(openCheckout())
  }

  return (
    <HeaderContainer>
      <picture>
        <img src="/logo.svg" alt="Logo da MKS Sistemas" />
      </picture>
      <ButtonCart
        onClick={handleOpenCheckout}
      >
        <picture>
          <img src="/cart.svg" alt="Carrinho de compras" />
        </picture>
        <span>{cart?.cart.length}</span>
      </ButtonCart>
    </HeaderContainer>
  )
}
