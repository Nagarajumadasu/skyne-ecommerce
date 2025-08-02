import { Link } from "react-router-dom";
import { Heart, ShoppingCart, User, Menu, icons } from "lucide-react";
import logo2 from "../assets/logo2.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const isLoggedIn = false; 

function Navbar() {
  const navItem = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Shop",
      slug: "/products",
    },
    {
      name: "Contact Us",
      slug: "/contact"
    }
  ];

  const navIconItem = [
    {
      name: "wishlist",
      icon: <Heart size={22} />,
      slug: '/wishlist',
    },
    {
      name: "cart",
      icon: <ShoppingCart size={22} />,
      slug: '/cart',
    },
    {
      name: isLoggedIn ? "profile" : "login",
      icon: <User size={22} />,
      slug: isLoggedIn ? "/profile" : "/login",
    }
  ]


  return (
    <nav className="w-full bg-black text-white h-16 shadow-sm font-[Outfit]">
      <div className="px-4 md:px-8 h-full flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <Link to="/">
            <img
              src={logo2}
              alt="Skyne Logo"
              className="h-35 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {navItem.map(item => (
            <li key={item.name}>
              <Button variant={'link'}>
              <Link to={item.slug} className="hover:text-yellow-400 transition">
                {item.name}
              </Link>
              </Button>
            </li>
          ))}
        </ul>

        {/* CTA + Icons (Desktop) */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-5">
          {navIconItem.map(item => (
            <Link to={item.slug} className="hover:text-yellow-400 transition" key={item.name}>
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/cart" className="hover:text-yellow-400 transition">
            <ShoppingCart size={22} />
          </Link>
          
          <Link to="/wishlist" className="hover:text-yellow-400 transition">
            <Heart size={22} />
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-transparent hover:text-yellow-400">
                <Menu size={24} />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white border-l-yellow-400">
              <div className="flex flex-col gap-6 py-6">
                {navItem.map(item => (
                  <Link to={item.slug} key={item.name} className="hover:text-yellow-400 transition text-center">
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 p-4 flex flex-col gap-4">
                  {isLoggedIn ? (
                    <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300">
                      <Link to="/profile">Profile</Link>
                    </Button>
                  ) : (
                    <>
                      <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-300">
                        <Link to="/login">Sign In</Link>
                      </Button>
                      <Button asChild variant="outline" className="text-white border-yellow-400 hover:text-black hover:bg-yellow-400">
                        <Link to="/register">Sign Up</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;