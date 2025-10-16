import * as React from "react";
import { useState } from "react";
import { IoHome, IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/logo-img.png";
import Container from "@/components/Container";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {
      label: "Home",
      path: "/",
      icon: <IoHome className="text-xl" />,
      isHome: true,
    },
    { label: "About Us", path: "/about" },
    { label: "Product Features", path: "/product" },
    { label: "B2B Partner Program", path: "/affilate" },
    { label: "News/Media", path: "/media" },
  ];

  const isActive = (path: any) => location.pathname === path;

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <Container className="relative">
        <div className="flex items-center justify-between py-7 px-4 md:px-0 relative">
          <Link
            to="/"
            className="absolute top-5 left-4 md:left-0 flex-shrink-0 z-10"
          >
            <img
              src={logo}
              alt="EduTech Logo"
              className="w-36 md:w-60 h-auto"
            />
          </Link>

          <div className="w-36 md:w-44" />

          <div className="flex-1 flex items-center justify-end lg:justify-between lg:ml-20 2xl:ml-50">
            <nav className="hidden lg:flex items-center gap-3 xl:gap-8 text-[16px] font-medium text-gray-700">
              {navLinks.map(({ label, path, icon, isHome }) => (
                <Link
                  key={label}
                  to={path}
                  className={`flex items-center gap-1 transition ${
                    isActive(path)
                      ? "text-[#004aad] font-semibold"
                      : isHome
                      ? "text-[#004aad] hover:text-[#004aad]"
                      : "hover:text-[#004aad]"
                  }`}
                >
                  {icon}
                  {!isHome && label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4 ml-4">
              <Link to="/buynow">
                <button className="bg-[#004aad] text-white px-4 py-2 rounded-lg shadow hover:bg-[#004aad] transition text-sm">
                  Buy Now
                </button>
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl text-gray-700 focus:outline-none ml-2"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-lg px-4 py-6 mt-2 space-y-6">
            <nav className="flex flex-col gap-4 text-base font-medium text-gray-700">
              {navLinks.map(({ label, path, icon, isHome }) => (
                <Link
                  key={label}
                  to={path}
                  className={`flex items-center gap-2 ${
                    isActive(path)
                      ? "text-[#004aad] font-semibold"
                      : isHome
                      ? "text-[#004aad]"
                      : "hover:text-[#004aad]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {icon}
                  {label}
                </Link>
              ))}
            </nav>

            <div className="pt-4 flex flex-col gap-4">
              <Link to="/buynow">
                <button className="bg-[#004aad] text-white px-4 py-2 rounded-lg shadow hover:bg-[#004aad] transition text-sm">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
