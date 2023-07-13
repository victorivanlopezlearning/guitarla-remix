import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import { getBanner } from "~/models/banner.server";
import ListGuitars from '~/components/list-guitars';
import ListPosts from "../components/list-posts";
import Banner from "../components/banner";
import stylesStore from '~/styles/store.css';
import stylesBlog from '~/styles/blog.css';
import stylesBanner from '~/styles/banner.css';

export function meta() {
  return [
    { title: 'GuitarLA - Tu destino en línea para guitarras y accesorios de calidad.' },
    { name: 'description', content: 'Bienvenido a GuitarLA, tu tienda en línea de confianza para todas tus necesidades relacionadas con las guitarras. Ofrecemos una amplia selección de guitarras de alta calidad, accesorios esenciales y equipos musicales de marcas reconocidas.' }
  ];
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesStore,
    },
    {
      rel: 'stylesheet',
      href: stylesBlog,
    },
    {
      rel: 'stylesheet',
      href: stylesBanner,
    },
  ];
};

export async function loader() {
  const [guitars, posts, banner] = await Promise.all([
    getGuitars(),
    getPosts(),
    getBanner(),
  ])

  const data = {
    guitars: guitars.data,
    posts: posts.data,
    banner: banner.data,
  }
  return data;
}

function Index() {

  const { guitars, posts, banner } = useLoaderData();

  return (
    <>
      <main className="container">
        <h1 className="heading">Nuestra Colección</h1>

        <ListGuitars
          guitars={guitars}
        />
      </main>

      <Banner 
        banner={banner?.attributes}
      />

      <section className="container">
        <h2 className="heading">Nuestro Blog</h2>

        <ListPosts
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index;