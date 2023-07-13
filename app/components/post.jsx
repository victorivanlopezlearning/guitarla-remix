import { Link } from "@remix-run/react";
import { formatDate } from "../utils/formatDate";

function Post({ post }) {
  const { title, content, image, url, publishedAt } = post;

  const imageURL = image.data.attributes.formats.small.url;
  const date = formatDate(publishedAt);
  
  return (
    <article className="post">
      <img src={imageURL} alt={`Imagen portada ${title}`} />

      <div className="post__content">
        <h2 className="post__title">{title}</h2>
        <p className="post__meta">{date}</p>
        <p className="post__extract">{content}</p>
        <Link
          className="post__link"
          to={`/posts/${url}`}
        >
          Leer Entrada
        </Link>
      </div>
    </article>
  )
}

export default Post;