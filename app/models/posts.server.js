
export async function getPosts() {
  const url = `${process.env.API_URL}/posts/?populate=image`;
  const response = await fetch(url);
  return await response.json();
}