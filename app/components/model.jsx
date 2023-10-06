import { Link } from "@remix-run/react";


function Model() {
  return (
    <div className='model'>
      <h1 className="model__name">Modelo Beck</h1>
      <p className="model__description">Descubre la guitarra Modelo Beck, una obra maestra que fusiona la artesanía experta con un sonido inigualable. Este instrumento de belleza atemporal está diseñado para satisfacer a músicos exigentes que buscan lo mejor en tono, comodidad y estilo.</p>
      <p className="model__price">$399 MXN</p>
      <Link
        className="model__link"
        to='/store/guitars/beck'
      >
        Ver Producto
      </Link>
    </div>
  )
}

export default Model;