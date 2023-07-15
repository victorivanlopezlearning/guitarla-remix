import { NavLink } from "@remix-run/react";
import ImageCart from '../../public/img/shop-cart.png';

function Navigation({ section = 'header' }) {
  return (
    <nav className={`${section}-navigation`}>
      <NavLink
        className={`${section}-navigation__link`}
        to='/'
        end
      >
        Inicio
      </NavLink>
      <NavLink
        className={`${section}-navigation__link`}
        to='/about'
      >
        Nosotros
      </NavLink>
      <NavLink
        className={`${section}-navigation__link`}
        to='/store'
      >
        Tienda
      </NavLink>
      <NavLink
        className={`${section}-navigation__link`}
        to='/blog'
      >
        Blog
      </NavLink>
      <NavLink
        className={`${section}-navigation__link`}
        to='/cart'
      >
        <img className={`${section}-navegation__icon`} src={ImageCart} alt="Icon cart" />
      </NavLink>
    </nav>
  )
}

export default Navigation;