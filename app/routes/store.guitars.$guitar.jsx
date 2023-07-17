import { useState } from "react";
import { useLoaderData, useOutletContext, Link } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";
import ErrorMessage from "../components/error-message";

export async function loader({ params }) {
  const guitar = await getGuitar(params.guitar);

  if (guitar.data.length === 0) {
    throw new Response('Guitarra no econtrada.', {
      status: 404,
    })
  }

  return guitar.data;
}

export function meta({ data }) {
  const { name } = data[0].attributes;

  return [
    { title: `GuitarLA - ${name}: La guitarra definitiva del rock alternativo` },
    { name: 'description', content: `Descubre ${name}, una guitarra única diseñada para capturar el espíritu y la energía del grunge y el rock alternativo. Con un estilo inconfundible y un sonido potente.` }
  ];
}

const Guitar = () => {

  const { addCart } = useOutletContext();

  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);
  const [showCart, setShowCart ] = useState(false);

  const guitar = useLoaderData();

  const { name, description, price, image } = guitar[0].attributes;
  const imageURL = image.data.attributes.url;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity < 1) {
      setError(true);
      setShowCart(false);
      return;
    }
    setError(false);
    const guitarSelected = {
      id: guitar[0].id,
      name,
      price,
      quantity,
      imageURL,

    }
    addCart(guitarSelected);
    setShowCart(true);
  }

  return (
    <div className="guitar single">
      <img className="guitar__image" src={imageURL} alt={`Guitarra ${name}`} />

      <div className="guitar__content">
        <h1 className="guitar__name">{name}</h1>
        <p className="guitar__description">{description}</p>
        <p className="guitar__price">${price} MXN</p>

        <form
          className="guitar__form"
          onSubmit={handleSubmit}
        >
          <label className="guitar__form-label" htmlFor="qty">Cantidad:</label>
          <select
            className={`guitar__form-qty ${error && 'guitar__form-qty--error'}`}
            id="qty"
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            <option value="0">-- Elige una Cantidad --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            type="submit"
            className="guitar__form-btn"
            value="Agregar al Carrito"
          />

          {error && <ErrorMessage message={'Debes seleccionar una cantidad'} />}
        </form>
          {showCart && <p className="guitar__show-success">Agregado correctamente: <Link className="guitar__show-cart" to={'/cart'}>Ver Carrito</Link></p>}
      </div>
    </div>
  )
}

export default Guitar;