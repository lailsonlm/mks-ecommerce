import { toast } from "react-toastify";
import { addProduct } from "../../app/cartSlice";
import { useAppDispatch } from "../../app/hooks";
import { formatPrice } from "../../util/format";
import { ProductContainer } from "./styles";

interface ProductProps {
  product: {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: string;
    photo: string;
  }
}

export function Product({ product }: ProductProps) {
  const dispatch = useAppDispatch();

  const notifySucess = () => toast.success('Produto adicionado ao carrinho', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    progressStyle: {
      background:"#0F52BA"
    },
    style: {
      background: "#FFFFFF",
      color: "#0F52BA"
    }
  });

  function handleAddProduct() {
    dispatch(addProduct(product))

    notifySucess()
  }

  return (
    <ProductContainer>
      <div>
        <picture>
          <img src={product.photo} alt="" />
        </picture>
        <div>
          <h2>{product.name}</h2>
          <span>{formatPrice(Number(product.price))}</span>
        </div>
        <p>{product.description}</p>
      </div>

      <button
        onClick={handleAddProduct}
      >
        <picture>
          <img src="/shopping-bag.svg" alt="" />
        </picture>
        <span>COMPRAR</span>
      </button>
    </ProductContainer>
  )
}