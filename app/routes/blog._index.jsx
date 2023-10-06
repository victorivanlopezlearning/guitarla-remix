import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import ListPosts from "~/components/list-posts";

export function meta() {
  return [
    { title: 'GuitarLA - Blog: consejos, tutoriales y las últimas noticias' },
    { name: 'description', content: 'Sumérgete en el apasionante mundo de las guitarras con el blog de GuitarLA. Encuentra consejos útiles, tutoriales detallados y las últimas noticias relacionadas con el mundo de la música y las guitarras.' }
  ];
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

function Blog() {

  const posts = useLoaderData();

  return (
    <>
      <h1 className='heading'>Nuestro Blog</h1>

      {
        (posts)
          ? <ListPosts posts={posts} />
          : <h4 className="text-center">No hay entradas aún.</h4>
      }
    </>
  )
}

export default Blog;