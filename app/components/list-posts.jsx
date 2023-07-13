import Post from './post';

function ListPosts({ posts }) {
  return (
    <>
      {posts?.length && (
        <div className="blog__content">
          {posts?.map(post => (
            <Post
              key={post?.id}
              post={post?.attributes}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default ListPosts;