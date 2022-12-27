import CategoryItem from "../CategoryItem/category-item/Category-item.component.jsx";
import '../Directory/directory.styles.scss';
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
