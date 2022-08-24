import { useSelector } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { Checkout } from "../components/Checkout";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import { HomeContainer } from "../styles/homeStyles";

export default function Home() {
  const { checkoutIsOpen } = useAppSelector(state => state)

  return (
    <>
      <HomeContainer>
        <Header />
        <ProductList />
        {checkoutIsOpen.isOpen && <Checkout />}
      </HomeContainer>
      <Footer />
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const result = await store.dispatch(getAllProducts.initiate(''));
//   await Promise.all(getRunningOperationPromises());

//   // const { data, error, isLoading } = result
//   return {
//     props: {},
//   }
// }