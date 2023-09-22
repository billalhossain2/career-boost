const CategoryItem = ({category}) => {
  const {categoryLogo, categoryName, jobsAvailable} = category;
  return (
    <div className="card card-compact border-[1px] border-solid border-[#dad6d6] p-3">
      <div>
        <img src={categoryLogo} alt="Design" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{categoryName}</h2>
        <p>{jobsAvailable} Jobs Available</p>
      </div>
    </div>
  );
};

export default CategoryItem;
