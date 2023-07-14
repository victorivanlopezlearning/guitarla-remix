import { Link, useLocation } from '@remix-run/react';
import Navigation from './navigation';
import logo from '../../public/img/logo.svg';
import Model from './model';
import imageModel from '../../public/img/model_guitar.png';

function Header() {
  let location = useLocation();

  return (
    <header className="header">
      <div className="header__content container">
        <div className='header__bar'>
        <Link to='/' >
          <img className='header__logo' src={logo} alt="Logo GuitarLA" />
        </Link>

        <Navigation />
        </div>

        {location.pathname === '/' && (
          <Model />
        )}
      </div>
      {location.pathname === '/' && (
          <img className='header__model' src={imageModel} alt="Imagen Modelo Guitarra" />
        )}
    </header>
  )
}

export default Header;