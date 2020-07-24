import Link from "next/link";
import { useState } from "react";

const Index = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <Link href="/">
        <a className="brand">
          <img src="/img/icon.png" alt="Praindo Brand" />
          PRAINDO <span>Express</span>
        </a>
      </Link>
      <div className={`right ${toggle ? "active" : ""}`}>
        <nav>
          <Link href="#home">
            <a>Home</a>
          </Link>
          <Link href="#how">
            <a>How It Works</a>
          </Link>
          <Link href="#services">
            <a>Our Services</a>
          </Link>
          <Link href="#aboutus">
            <a>About Us</a>
          </Link>
        </nav>
        <select>
          <option value="ID">ID 🇮🇩</option>
          <option value="EN">EN 🇬🇧</option>
        </select>
        <Link href="/login">
          <a className="btn orange">Log In</a>
        </Link>
      </div>
      <div
        className={`hamburger ${toggle ? "active" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <span />
      </div>
    </div>
  );
};

export default Index;
