import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import Guitar from "~/components/guitar";
import styles from '~/styles/store.css';

export function meta() {
  return [
    { title: 'GuitarLA - Explora nuestra tienda en línea: Guitarras de calidad' },
    { name: 'description', content: 'Descubre la mejor selección de marcas reconocidas y sumérgete en un mundo de posibilidades musicales. Nuestro objetivo es proporcionarte una experiencia de compra excepcional, con opciones para todos los niveles de habilidad y estilos musicales.'}
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

export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}

function Store() {

  const guitars = useLoaderData();

  return (
    <main className="store container">
      <h1 className="heading">Nuestra Colección</h1>

      {guitars?.length && (
        <div className="store__content">
          {guitars?.map( guitar => (
            <Guitar
              key={ guitar?.id }
              guitar={ guitar?.attributes }
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Store;