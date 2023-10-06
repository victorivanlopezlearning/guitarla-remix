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
          <p>Somos un equipo de entusiastas de la música y apasionados por las guitarras, comprometidos con brindarte una experiencia excepcional. Nuestra misión es simple pero profunda: proporcionar guitarras y equipo de la más alta calidad para inspirar y elevar tu música.</p>
          <p>En GuitarLA, la música y las guitarras son más que un negocio; son nuestra pasión y nuestro compromiso. Desde nuestros modestos comienzos, hemos crecido para convertirnos en un destino en línea confiable para amantes de la música. Nuestra dedicación a la excelencia. Desde la selección cuidadosa de guitarras de marcas reconocidas hasta el servicio al cliente de primera clase.</p>
        </div>
      </div>
    </main>
  )
}

export default About;