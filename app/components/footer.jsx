import Navigation from './navigation';

function Footer() {
  return (
    <footer className="footer">
      <div className='footer__content container'>
        <Navigation 
          section='footer'
        />
        <p className='footer__copyright'>&copy; {new Date().getFullYear()}. Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer;