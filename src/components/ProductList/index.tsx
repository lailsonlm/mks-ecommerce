import { useGetAllProductsQuery } from "../../lib/rtkQuery";
import { Product } from "../Product";
import { QueryError } from "../QueryError";
import { Skeleton } from "../Skeleton";
import { ProductListContainer } from "./styles";

export function ProductList() {
  const { data, error, isLoading } = useGetAllProductsQuery('')
  const products = data?.products

  if(error) {
    return <QueryError />
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
            product={product}
          />
        )
      })}
    </ProductListContainer>
  )
}
