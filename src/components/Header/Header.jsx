import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/80 backdrop-blur-md border-b border-white/5 shadow-2xl">
      <Container>
        <nav className="flex items-center h-20">
          {/* LOGO SECTION */}
          <div className="mr-6 flex items-center transition-transform duration-300 hover:scale-105">
            <Link to="/" className="flex items-center gap-3">
              <Logo width="70px" />
              
            </Link>
          </div>

          {/* NAV ITEMS */}
          <ul className="ml-auto flex items-center gap-1 md:gap-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="
                      relative
                      group
                      cursor-pointer
                      px-4 py-2
                      text-sm font-semibold
                      text-gray-400
                      rounded-xl
                      transition-all duration-300
                      hover:text-white
                      hover:bg-white/5
                      active:scale-95
                    "
                  >
                    {item.name}
                    {/* Floating Underline Aesthetic */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-1/3 group-hover:left-[33%] rounded-full"></span>
                  </button>
                </li>
              ) : null,
            )}

            {/* LOGOUT BUTTON WITH SEPARATOR */}
            {authStatus && (
              <li className="ml-4 pl-4 border-l border-white/10 flex items-center">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
