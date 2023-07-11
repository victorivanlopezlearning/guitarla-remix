import imageAbout from '../../public/img/about.jpg';
import styles from '~/styles/about.css';

export function meta() {
  return [
    { title: 'GuitarLA - Conoce la historia de GuitarLA' },
    { name: 'description', content: 'En GuitarLA, nos apasiona todo lo relacionado con las guitarras. Somos una tienda en línea especializada en la venta de guitarras de alta calidad, accesorios y equipos musicales.'}
  ];
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preload',
      href: imageAbout,
      as: 'image',
    },
  ];
};

function About() {
  return (
    <main className="about container">
      <h1 className="heading">Nosotros</h1>

      <div className="about__content">
        <img className='about__image' src={ imageAbout } alt="Imagen Nosotros" />

        <div className='about__description'>
          <p>Donec consectetur enim quis sagittis volutpat. Duis ut nisl nec justo iaculis aliquam a at felis. Nullam lectus velit, sagittis vel pellentesque non, molestie in augue. In bibendum dui sed ante scelerisque faucibus. Nulla velit purus, rutrum vel felis nec, aliquam venenatis odio. Duis ut dignissim diam. Donec vel nunc velit.</p>
          <p>Donec consectetur enim quis sagittis volutpat. Duis ut nisl nec justo iaculis aliquam a at felis. Nullam lectus velit, sagittis vel pellentesque non, molestie in augue. In bibendum dui sed ante scelerisque faucibus. Nulla velit purus, rutrum vel felis nec, aliquam venenatis odio. Duis ut dignissim diam. Donec vel nunc velit.</p>
        </div>
      </div>
    </main>
  )
}

export default About;