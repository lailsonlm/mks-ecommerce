import { useGetAllProductsQuery } from "../../lib/rtkQuery";
import { Product } from "../Product";
import { Skeleton } from "../Skeleton";
import { ProductListContainer } from "./styles";

export function ProductList() {
  const { data, error, isLoading } = useGetAllProductsQuery('')
  const products = data?.products

  if(error) {
    return <p>Erro ao retornar os dados, tente novamente...</p>
  }

  if(isLoading) {
    return (
      <ProductListContainer>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </ProductListContainer>
    )
  }

  return (
    <ProductListContainer>
      {products?.map(product => {
        return (
          <Product 
            key={product.id}
            name={product.name}
            description={product.description}
            photo={product.photo}
            price={product.price}
          />
        )
      })}
    </ProductListContainer>
  )
}