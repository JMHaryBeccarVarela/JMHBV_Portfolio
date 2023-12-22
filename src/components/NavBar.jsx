import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 rounded-b-xl border-b border border-b-gray-200">
      <nav
        className={`py-4 md:px-8 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="w-[120px] h-auto  rounded-full">
            <img src="src\assets/Diseño sin título.png" alt="logo" />
          </div>
          <div className="lg:flex items-center gap-3 hidden text-gray-800 font-semibold">
            <a className="block hover:text-gray-400 py-2 px-4" href="/">
              Home
            </a>
            <a className="block hover:text-gray-400 py-2 px-4" href="/">
              Portfolio
            </a>
            <a className="block hover:text-gray-400 py-2 px-4" href="/">
              About me
            </a>
            <a className="block hover:text-gray-400 py-2 px-4" href="/">
              Testimonials
            </a>
          </div>

          <div className="lg:block hidden">
            <button className="px-4 py-2 border border-gray-900 text-gary-900 rounded-md hover:bg-gray-600 hover:text-white transition-all duration-300">
              Contact me
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-black text-3xl"
          >
            <HiMenu />
          </button>
        </div>

        <div>
          {isMenuOpen && (
            <div>
              <div className="mt-4 bg-gradient-to-br from-green-300 via-green-500 to-green-700 shadow-lg text-white rounded">
                <a className="block hover:text-gray-400 py-2 px-4" href="/">
                  Home
                </a>
                <a className="block hover:text-gray-400 py-2 px-4" href="/">
                  Portfolio
                </a>
                <a className="block hover:text-gray-400 py-2 px-4" href="/">
                  About me
                </a>
                <a className="block hover:text-gray-400 py-2 px-4" href="/">
                  Testimonials
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
