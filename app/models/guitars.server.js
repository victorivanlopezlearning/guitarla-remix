
export async function getGuitars() {
  const url = `${process.env.API_URL}/guitars/?populate=image`;
  const response = await fetch(url);
  return await response.json();
}

export async function getGuitar( guitar ) {
  const url = `${process.env.API_URL}/guitars/?filters[url]=${guitar}&populate=image`;
  const response = await fetch(url);
  return await response.json();
}