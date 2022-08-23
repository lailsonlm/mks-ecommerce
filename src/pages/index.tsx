import { Checkout } from "../components/Checkout";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <>
      <HomeContainer>
      <Header />
      <ProductList />
      {/* <Checkout /> */}
      </HomeContainer>
      <Footer />
    </>
  )
}

