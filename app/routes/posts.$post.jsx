import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import styles from '~/styles/blog.css';
import { formatDate } from '~/utils';

export async function loader({ params }) {
  const post = await getPost(params.post);

  if( post.data.length === 0 ) {
    throw new Response('Post no econtrado.', {
      status: 404,
    })
  }

  return post.data;
}

export function meta({ data }) {
  const { title } = data[0].attributes;

  return [
    { title: `GuitarLA - ${title}: Guías completas para principiantes` },
    { name: 'description', content: `Nuestras guías completas están diseñadas especialmente para principiantes. Aumenta tu conocimiento y confianza en el mundo de las guitarras con ${title}`}
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

function Post() {

  const post = useLoaderData();
  const { title, content, image, publishedAt } = post[0].attributes;

  const imageURL = image.data.attributes.url;
  const date = formatDate(publishedAt);

  return (
    <main className="post single container">
      <h1 className="heading">{title}</h1>

      <article>
        <img className="post__image" src={imageURL} alt={`Imagen portada ${title}`} />

        <div className="post__content">
          <p className="post__meta">{date}</p>
          <p className="post__content-text">{content}</p>
        </div>
      </article>
    </main>
  )
}

export default Post;