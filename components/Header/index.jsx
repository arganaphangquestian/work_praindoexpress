import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { scroller, animateScroll } from "react-scroll";

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

  const scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className={`header ${toggle ? "active" : ""}`}>
      <Link href="/">
        <a className="brand">
          <img src="/img/icon.png" alt="Praindo Brand" />
          PRAINDO <span>Express</span>
        </a>
      </Link>
      <div className={`right ${toggle ? "active" : ""}`}>
        <nav>
          <React.Fragment>
            <a
              onClick={() => {
                setToggle(false);
                animateScroll.scrollToTop();
              }}
            >
              Home
            </a>
          </React.Fragment>
          <React.Fragment>
            <a
              onClick={() => {
                setToggle(false);
                scrollTo("how");
              }}
            >
              How It Works
            </a>
          </React.Fragment>
          <React.Fragment>
            <a
              onClick={() => {
                setToggle(false);
                scrollTo("services");
              }}
            >
              Our Services
            </a>
          </React.Fragment>
          <React.Fragment>
            <a
              onClick={() => {
                setToggle(false);
                scrollTo("about");
              }}
            >
              About Us
            </a>
          </React.Fragment>
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
