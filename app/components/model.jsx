import { Link } from "@remix-run/react";


function Model() {
  return (
    <div className='model'>
      <h1 className="model__name">Modelo Beck</h1>
      <p className="model__description">Nunc sollicitudin pellentesque placerat. Quisque tincidunt risus id tristique accumsan. Nunc nibh erat, suscipit vel ultricies ut, tristique quis metus. Phasellus pharetra convallis urna non tempor.</p>
      <p className="model__price">$399 MXN</p>
      <Link
        className="model__link"
        to='/guitars/beck'
      >
        Ver Producto
      </Link>
    </div>
  )
}

export default Model;