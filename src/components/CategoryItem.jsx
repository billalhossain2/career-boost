import designImg from "../assets/Icons/design.png";
const CategoryItem = () => {
  return (
    <div class="card card-compact shadow-xl">
    <div>
      <img
        src={designImg}
        alt="Design"
      />
    </div>
    <div class="card-body">
      <h2 class="card-title">Account & Finance</h2>
      <p>300 Jobs Available</p>
    </div>
  </div>
  )
}

export default CategoryItem