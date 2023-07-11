import { NavLink } from "@remix-run/react";

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
    </nav>
  )
}

export default Navigation;