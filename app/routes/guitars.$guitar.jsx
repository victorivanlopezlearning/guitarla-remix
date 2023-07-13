import { useLoaderData } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";
import styles from '~/styles/store.css';

export async function loader({ params }) {
  const guitar = await getGuitar(params.guitar);

  if( guitar.data.length === 0 ) {
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
    { name: 'description', content: `Descubre ${name}, una guitarra única diseñada para capturar el espíritu y la energía del grunge y el rock alternativo. Con un estilo inconfundible y un sonido potente.`}
  ];
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

const Guitar = () => {

  const guitar = useLoaderData();
  
  const { name, description, price, image } = guitar[0].attributes;
  const imageURL = image.data.attributes.url;

  return (
    <main className="guitar single container">
      <img className="guitar__image" src={imageURL} alt={`Guitarra ${name}`} />
      
      <div className="guitar__content">
        <h1 className="guitar__name">{name}</h1>
        <p className="guitar__description">{description}</p>
        <p className="guitar__price">${price} MXN</p>

      </div>
    </main>
  )
}

export default Guitar;