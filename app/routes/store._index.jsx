import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import ListGuitars from '~/components/list-guitars';

export function meta() {
  return [
    { title: 'GuitarLA - Explora nuestra tienda en línea: Guitarras de calidad' },
    { name: 'description', content: 'Descubre la mejor selección de marcas reconocidas y sumérgete en un mundo de posibilidades musicales. Nuestro objetivo es proporcionarte una experiencia de compra excepcional, con opciones para todos los niveles de habilidad y estilos musicales.' }
  ];
}


export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}

function Store() {

  const guitars = useLoaderData();

  return (
    <>
      <h1 className="heading">Nuestra Colección</h1>
      {
        (guitars)
          ? <ListGuitars guitars={guitars} />
          : <h4 className="text-center">No hay productos aún.</h4>
      }
    </>
  )
}

export default Store;