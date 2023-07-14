import { Link } from "@remix-run/react";

function Guitar({ guitar }) {
  
  const { name, price, description, image, url } = guitar;
  const imageURL = image.data.attributes.formats.small.url;

  return (
    <div className="guitar">
      <img src={imageURL} alt={`Imagen guitarra ${name}`} />

      <div className="guitar__content">
        <h2 className="guitar__name">{name}</h2>
        <p className="guitar__description">{description}</p>
        <p className="guitar__price">${price} MXN</p>

        <Link
          className="guitar__link"
          to={`/store/guitars/${url}`}
        >
          Ver Producto
        </Link>
      </div>
    </div>
  )
}

export default Guitar;