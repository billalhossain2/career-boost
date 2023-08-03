import designImg from "../assets/Icons/design.png";
const CategoryItem = ({category}) => {
  const {categoryLogo, categoryName, jobsAvailable} = category;
  return (
    <div class="card card-compact shadow-xl">
    <div>
      <img
        src={categoryLogo}
        alt="Design"
      />
    </div>
    <div class="card-body">
      <h2 class="card-title">{categoryName}</h2>
      <p>{jobsAvailable} Jobs Available</p>
    </div>
  </div>
  )
}

export default CategoryItem