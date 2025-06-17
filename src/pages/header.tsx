import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Navigation Bar */}
      <div className="container mx-auto flex justify-between items-center p-4 border-b border-gray-200">
        {/* Logo and Company Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://i.ibb.co/PvqWGDSX/Smartyvest1.png"
            alt="Smartyvest Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            loading="lazy"
          />
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#4faee4] select-none">
            Smartyvest
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {["About", "Product & Services", "Insights", "Contact Us"].map(
                (item, idx) => (
                  <NavigationMenuItem key={idx}>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/coming-soon"
                        className="px-3 py-2 text-base hover:bg-gray-100 rounded transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop Join Us Button */}
        <div className="hidden md:block">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-300 whitespace-nowrap">
            Join Us
          </Button>
        </div>

        {/* Mobile Join Us Button */}
        <div className="md:hidden mr-2">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 whitespace-nowrap"
            onClick={() => {
              setMobileMenuOpen(false);
              // Future action e.g. window.location.href = '/signup';
            }}
          >
            Join Us
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? (
            <CloseIcon className="w-6 h-6 text-gray-700" />
          ) : (
            <MenuIcon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-b border-gray-200 shadow-sm">
          <ul className="flex flex-col space-y-1 px-6 py-4">
            {["About", "Product & Services", "Insights", "Contact Us"].map(
              (item, idx) => (
                <li key={idx}>
                  <Link
                    to="/coming-soon"
                    className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-900 font-medium text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
            <li>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Us
              </Button>
            </li>
          </ul>
        </nav>
      )}

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 py-16 px-6">
        {/* Left Side Text */}
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Secure your{" "}
            <span className="text-[#4faee4]">future</span>
            <br />
            with smart investments
          </h1>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Future-Proof Your <span className="text-[#4faee4]">Finances</span>: Save, <span className="text-[#4faee4]">Invest</span>, Earn More
          </h2>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
            Discover cutting-edge ways to grow your <span className="text-[#4faee4] font-semibold">wealth</span>. With our innovative solutions, you can confidently <span className="text-[#4faee4] font-semibold">save</span>, wisely <span className="text-[#4faee4] font-semibold">invest</span>, and actively <span className="text-[#4faee4] font-semibold">earn</span>, propelling your finances forward.
          </p>

          {/* Learn More Button */}
          <Link to="/coming-soon">
            <Button className="bg-[#4faee4] hover:bg-[#3da4d4] text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 mx-auto lg:mx-0">
              Learn More <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 max-w-md lg:max-w-full mx-auto">
          <img
            src="https://i.ibb.co/G302j0xp/Gemini-Generated-Image-hwte2chwte2chwte.png"
            alt="Artwork Showcase"
            className="rounded-xl shadow-lg w-full object-cover animate-fade-in"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
