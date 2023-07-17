import { useOutletContext, Link } from '@remix-run/react';
import styles from '~/styles/cart.css';
import CartItem from '../components/cart-item';

export function meta() {
  return [
    { title: 'GuitarLA - Completa tu experiencia de compra de guitarras.' },
    { name: 'description', content: 'Nuestro proceso de compra seguro y fácil de usar te permite revisar y ajustar tu selección antes de finalizar tu pedido. Asegúrate de tener todo lo necesario para llevar tu música al siguiente nivel mientras completas tu compra en el carrito de compras de GuitarLA.' }
  ];
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

function Cart() {

  const { cart, updateQuantity } = useOutletContext();

  return (
    <main className="cart container">
      <h1 className="heading">Carrito de Compras</h1>

      <div className="cart__content">
        <div className='cart__items'>
          <h2>Artículos</h2>
          {cart.length === 0 ? (
            <>
              <p className='cart__empty'>Carrito Vacio. <Link className='cart__empty-link' to={'/store'}>Ver Tienda</Link></p>
            </>
            
          ) : (
            cart.map( item => (
              <CartItem 
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
              />
            ))
          )}
        </div>

        <aside className="cart__resume">
          <h2>Total del carrito</h2>
          <p>Total: $</p>
        </aside>
      </div>
    </main>
  )
}

export default Cart;