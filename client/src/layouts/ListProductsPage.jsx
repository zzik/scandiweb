
import { Header, ProductList } from '../components'

const ListProductsPage = (props) => {
  return (
    <>
    <Header text="Product List" leftButton={props.leftButton} rightButton={props.rightButton} />
    <ProductList />
    </>
  )
}

export default ListProductsPage