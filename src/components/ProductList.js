import ProductItem from './ProductItem';
import styles from './ProductList.module.css';

const ProductList = ({ products }) => (
  <div className={styles.grid}>
    {products.map(product => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
