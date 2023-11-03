import { useEffect } from "react";
import HeaderLink from "./HeaderLink.astro"; // Import HeaderLink component
import { SITE_TITLE } from "../consts"; // Import SITE_TITLE constant
import "./header.css"; // Import header styles

const Header = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      window.addEventListener("scroll", () => {
        header.classList.toggle("sticky", window.scrollY > 50);
      });
    }
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", () => {
        header.classList.toggle("sticky", window.scrollY > 50);
      });
    };
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <header>
      <nav>
        <h2>
          <a href="/">{SITE_TITLE}</a>
        </h2>
        <div className="internal-links">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/blog">Blog</HeaderLink>
          <HeaderLink href="/about">About</HeaderLink>
        </div>
        <div className="social-links">
          <a
            href="https://m.webtoo.ls/@astro"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Social media icon */}
          </a>
          <a
            href="https://twitter.com/astrodotbuild"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Social media icon */}
          </a>
          <a
            href="https://github.com/withastro/astro"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Social media icon */}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
