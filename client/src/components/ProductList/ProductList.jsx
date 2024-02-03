
import ProductCard from "./ProductCard"
import useProductData from "../../utils/useProductData"

const ProductList = () => {

  const productData = useProductData()
  
  return (
    <div className="product-list" >
      {productData ? productData.map((product) => (
        <ProductCard
          key={product.sku}
          sku={product.sku}
          name={product.name}
          price={product.price}
          attributeName={product.attribute_name}
          attributeValue={product.attribute_value}
        />
      )) : 'Establishing connection, please wait or refresh the page.'}
    </div>
  )
}

export default ProductList
