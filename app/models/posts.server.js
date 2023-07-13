
export async function getPosts() {
  const url = `${process.env.API_URL}/posts/?populate=image`;
  const response = await fetch(url);
  return await response.json();
}

export async function getPost( post ) {
  const url = `${process.env.API_URL}/posts/?filters[url]=${post}&populate=image`;
  const response = await fetch(url);
  return await response.json();
}