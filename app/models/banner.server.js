
export async function getBanner() {
  const url = `${process.env.API_URL}/banner?populate=image`;
  const response = await fetch(url);
  return await response.json();
}