import Navbar from "./Navbar";
import Banner from "./Banner";
const Header = () => {
  return (
    <header className="max-w-[80%] mx-auto">
      {/* Navbar  */}
      <Navbar/>
      {/* banner  */}
      <Banner/>
    </header>
  );
};

export default Header;
