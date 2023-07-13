import { 
  Meta, 
  Links,
  Link,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
} from '@remix-run/react';
import styles from '~/styles/index.css';
import Header from '~/components/header';
import Footer from '~/components/footer';

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
}

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
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang="en">
    <head>
      <Meta />
      <Links />
    </head>
    <body>
      <Header />
      { children }
      <Footer />
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
            to={'/store'}
          >
            Regresar a la tienda
          </Link>
        </div>
      </Document>
    );
  }
}