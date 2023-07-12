
export async function getGuitars() {
  const url = `${process.env.API_URL}/guitars/?populate=image`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}