import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(
    i18n.language || window.localStorage.i18nextLng
  );
  const onChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
    setLang(e.target.value);
  };
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
        <select value={lang} onChange={(e) => onChangeLang(e)}>
          <option value="id">ID 🇮🇩</option>
          <option value="en">EN 🇬🇧</option>
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
