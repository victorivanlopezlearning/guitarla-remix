import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import Post from "../components/post";

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