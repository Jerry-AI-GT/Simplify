import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center px-5 flex-shrink-0">
            <span className="bg-gradient-to-r text-3xl px-1 from-orange-500 to-red-800 text-transparent bg-clip-text">
              &lt;/&gt;
            </span>
            <span className="text-xl tracking-tight">Simplify</span>
          </div>

          <div className="hidden lg:flex justify-center px-5 space-x-12 items-center">
            <Link href="/auth">
              <div className="bg-gradient-to-r from-orange-500 to-orange-800 px-5 py-2 px-3 rounded-md hover:from-orange-400 hover:scale-105 hover:to-orange-700 cursor-pointer transition-colors duration-300">
                Login
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
