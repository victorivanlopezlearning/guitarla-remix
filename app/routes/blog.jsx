import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import Post from "~/components/post";
import styles from '~/styles/blog.css';

export function meta() {
  return [
    { title: 'GuitarLA - Blog: consejos, tutoriales y las últimas noticias' },
    { name: 'description', content: 'Sumérgete en el apasionante mundo de las guitarras con el blog de GuitarLA. Encuentra consejos útiles, tutoriales detallados y las últimas noticias relacionadas con el mundo de la música y las guitarras.'}
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
  const posts = await getPosts();
  return posts.data;
}

function Blog() {

  const posts = useLoaderData();

  return (
    <main className='blog container'>
      <h1 className='heading'>Nuestro Blog</h1>

      
      {posts?.length && (
        <div className="blog__content">
          {posts?.map( post => (
            <Post
              key={ post?.id }
              post={ post?.attributes }
            />
          ))}
        </div>
      )}
      
    </main>
  )
}

export default Blog;