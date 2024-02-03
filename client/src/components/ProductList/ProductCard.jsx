

const ProductCard = (props) => {
  return (
    <div className="product-card" >
      <input
        type="checkbox"
        value={props.sku}
        
        name="product_item"
        className="delete-checkbox"
      />
      <p>{props.sku}</p>
      <p>{props.name}</p>
      <p>{props.price}$</p>
      <p>{props.attributeName}: {props.attributeValue}</p>
    </div>
  )
}

export default ProductCard
