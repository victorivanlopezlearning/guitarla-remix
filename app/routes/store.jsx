import { Outlet} from "@remix-run/react";
import styles from '~/styles/store.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};


function Store() {
  return (
    <main className="store container">
      <Outlet />
    </main>
  )
}

export default Store;