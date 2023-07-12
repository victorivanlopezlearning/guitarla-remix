import { getGuitars } from "~/models/guitars.server";

export async function loader() {
  const guitars = await getGuitars();
  return guitars;
}

function Store() {
  return (
    <h1>Store</h1>
  )
}

export default Store;