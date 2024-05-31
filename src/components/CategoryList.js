import CategoryItem from './CategoryItem';

const CategoryList = ({ categories }) => (
  <div>
    {categories.map(category => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default CategoryList;
