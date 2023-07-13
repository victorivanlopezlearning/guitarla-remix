
function Banner({ banner }) {
  
  const { title, content, image } = banner;
  const imageURL = image.data.attributes.url;

  return (
    <section className="banner">
      <style jsx="true">{`
        .banner {
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .65)), url(${imageURL});
        }
      `}</style>
      <div className="banner__grid container">
        <div className="banner__content">
          <h2 className="banner__title heading">{title}</h2>
          <p className="banner__text">{content}</p>
        </div>
      </div>
    </section>
  )
}

export default Banner;