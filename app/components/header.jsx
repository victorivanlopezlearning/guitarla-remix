import { Link } from '@remix-run/react';
import Navigation from './navigation';
import logo from '../../public/img/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__content container">
        <Link to='/' >
          <img className='header__logo' src={ logo } alt="Logo GuitarLA" />
        </Link>
        
      <Navigation />
      </div>
    </header>
  )
}

export default Header;