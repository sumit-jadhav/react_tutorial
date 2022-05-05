import React from "react"
import PropType from "prop-types"
import defaultImage from "../../../assets/default-image.jpeg"

const Product = ({ image, name, price }) => {
  const url = image && image.url
  console.log(image, name, price)
  return (
    <article className="product">
      <img src={url || defaultImage} alt={name || "default name"} />
      <h4>{name}</h4>
      <h6>{price}</h6>
    </article>
  )
}
Product.PropType = {
  image: PropType.object.isRequired,
  name: PropType.object.isRequired,
  price: PropType.object.isRequired,
}

Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: defaultImage,
}

export default Product
