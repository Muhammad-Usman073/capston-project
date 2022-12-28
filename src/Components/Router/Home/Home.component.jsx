import "../../../Components/CategoryItem/category-item/categories.styles.scss";
import Directory from "../../Directory/Directory.component";
const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/1078973/pexels-photo-1078973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/07/12/19/23/clothing-842338_960_720.jpg",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg",
    },
    {
      id: 4,
      title: "Women",
      imageUrl:
        "https://images.pexels.com/photos/4034524/pexels-photo-4034524.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "men",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/11/21/00/09/man-539993_960_720.jpg",
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
