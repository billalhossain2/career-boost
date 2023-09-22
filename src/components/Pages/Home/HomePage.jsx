import useTitle from "../../../Hooks/useTitle"
import CategoryList from "./CategoryList"
import FeaturedJobs from "./FeaturedJobs"
import HomeBanner from "./HomeBanner"

const HomePage = () => {
  useTitle("Home")
  return (
    <>
    <CategoryList></CategoryList>
    <FeaturedJobs></FeaturedJobs>
    </>
  )
}

export default HomePage