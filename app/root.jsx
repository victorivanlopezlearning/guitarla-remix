import { useState } from "react";
import {
  Meta,
  Links,
  Link,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  ScrollRestoration,
} from '@remix-run/react';
import styles from '~/styles/index.css';
import Header from '~/components/header';
import Footer from '~/components/footer';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymus',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export default function App() {

  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    if (cart.some(itemState => itemState.id === item.id)) {
      const cartUpdated = cart.map(itemState => {
        if (itemState.id === item.id) {
          itemState.quantity = item.quantity;
        }
        return itemState;
      })
      setCart(cartUpdated);
    } else {
      setCart([...cart, item]);
    }
  }

  const updateQuantity = (itemToUpdate) => {
    const cartUpdated = cart.map(itemState => {
      if (itemState.id === itemToUpdate.id) {
        itemState.quantity = itemToUpdate.quantity;
      }
      return itemState;
    })
    setCart(cartUpdated);
  }

  return (
    <Document>
      <Outlet
        context={{
          addCart,
          cart,
          updateQuantity,
        }}
      />
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

// Error Boundary
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <div className='error container'>
          <h1 className='error__status'>{error.status}</h1>
          <p className='error__description'>{error.data}</p>
          <Link
            className='error__link'
            to={-1}
          >
            Regresar
          </Link>
        </div>
      </Document>
    );
  }
}