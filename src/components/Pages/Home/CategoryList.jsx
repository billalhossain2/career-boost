import useFetch from "../../../Hooks/useFetch";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const data = useFetch('./category-list.json');
  const {allData:categories} = data;
  return (
    <section className="max-w-[90%] mx-auto mb-40">
      <h1 className="text-center font-extrabold text-3xl mb-3">Job Category List</h1>
      <p className="text-center mb-14">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="cards-container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between gap-5">
        {
          categories.map((category, index) => <CategoryItem key={index} category={category}></CategoryItem>)
        }
      </div>
    </section>
  );
};

export default CategoryList;
