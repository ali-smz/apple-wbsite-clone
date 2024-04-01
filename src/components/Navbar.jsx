import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="flex w-full py-5 sm:px-10 px-5 justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-gray cursor-pointer hover:text-white transition-all text-sm"
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="max-sm:justify-end max-sm:flex-1 flex gap-7 items-baseline">
          <img src={searchImg} alt="Search" height={18} width={18} />
          <img src={bagImg} alt="Bag" height={18} width={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
