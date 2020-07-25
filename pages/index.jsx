import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    img: "/img/customer_services.svg",
    desc: "Customer Services 24 Jam",
  },
  {
    img: "/img/free_pick_up.svg",
    desc: "Free Pick Up",
  },
  {
    img: "/img/door_to_door.svg",
    desc: "Door to Door",
  },
  {
    img: "/img/port_to_port.svg",
    desc: "Port to Port",
  },
  {
    img: "/img/free_re_packing.svg",
    desc: "Free Repacking",
  },
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const [track, setTrack] = useState("");
  return (
    <>
      <Head>
        <title>PRAINDO Express</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <div className="hero">
        <div className="hero-content">
          <div className="hero-banner">
            <h1>PRAINDO Express</h1>
            <h3>{t("hero_desc")}</h3>
          </div>
          <img className="hero-image" src="/img/hero.svg" alt="Hero" />
        </div>
        <div className="hero-resi">
          <form className="resi-input">
            <input
              type="text"
              placeholder={t("input_cn_number")}
              value={track}
              onChange={(e) => setTrack(e.target.value)}
            />
            <Link href={`/track/${track}`}>
              <a className="btn blue">{t("search")}</a>
            </Link>
          </form>
          <span>
            <Link href="#">
              <a>{t("need_help")}</a>
            </Link>
          </span>
        </div>
      </div>

      <div className="check">
        <form>
          <div className="check-label">
            <span>{t("from")} :</span>
            <h4 className="check-input">Praindo Express</h4>
          </div>
          <div className="check-label">
            <span>{t("to")} :</span>
            <select className="check-input">
              <option value="">{t("choose_destination")}</option>
            </select>
          </div>
        </form>
        <button className="btn orange">{t("check_prize")}</button>
      </div>

      <section className="how">
        <h1 className="title">How It Works?</h1>
        <ul>
          <li>
            <h4>{t("how_1")}</h4>
            <span>
              <img src="/img/ic_plus_circle.svg" alt="Add Icon" />
              {t("how_1_help")}
            </span>
          </li>
          <li>
            <h4>{t("how_2")}</h4>
          </li>
          <li>
            <h4>{t("how_3")}</h4>
          </li>
          <li>
            <h4>{t("how_4")}</h4>
            <span>
              <img src="/img/ic_plus_circle.svg" alt="Add Icon" />
              {t("how_4_help")}
            </span>
          </li>
        </ul>
      </section>
      <section className="service">
        <h1 className="title">Our Services</h1>
        <div className="service-section">
          {services.map((data, key) => (
            <div className="service-card" key={key}>
              <img src={data.img} alt="" />
              <h4>{data.desc}</h4>
            </div>
          ))}
        </div>
      </section>

      <div className="maps">
        <div className="maps-view">
          <div className="maps-view-content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.86329600825!2d106.71979281447524!3d-6.14905519554796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9352a59d913%3A0x2c45c0929edb63e0!2sPraindo%20express!5e0!3m2!1sen!2sid!4v1595178382535!5m2!1sen!2sid"
              frameBorder="0"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="maps-view-desc">
            <h2>
              Jl. Utama VII, Melati 1, No. 8A
              <br />
              RT. 009 RW. 001, Cengkareng,
              <br />
              Jakarta Barat
            </h2>
            <p>{t("any_question")}</p>
            <button className="btn orange">Whatsapp</button>
          </div>
        </div>
      </div>

      <section className="aboutus">
        <h1 className="title">About Us</h1>
        <p>{t("about_us")}</p>
        <h3>{t("vision")}</h3>
        <p>{t("vision_desc")}</p>
        <h3>{t("mission")}</h3>
        <ul>
          <li>
            <p>{t("mission_1")}</p>
          </li>
          <li>
            <p>{t("mission_2")}</p>
          </li>
          <li>
            <p>{t("mission_3")}</p>
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
}
