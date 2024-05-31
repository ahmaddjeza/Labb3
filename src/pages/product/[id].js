import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductPage = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <main>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  const paths = products.map(product => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return { props: { product } };
}

export default ProductPage;
