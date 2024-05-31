import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const Home = ({ products }) => (
  <div>
    <Head>
      <title>My Webshop</title>
    </Head>
    <Header />
    <main>
      <h1>Welcome to My Webshop</h1>
      <ProductList products={products} />
    </main>
    <Footer />
  </div>
);

export async function getStaticProps() {
  // Fetch data from an external API
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  // Map the data to include image URLs
  const formattedProducts = products.map(product => ({
    id: product.id,
    name: product.title,
    price: product.price,
    image: product.image,
  }));

  return {
    props: {
      products: formattedProducts,
    },
  };
}

export default Home;
