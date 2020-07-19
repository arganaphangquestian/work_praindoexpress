import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>PRAINDO Express</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="header">
        <Link href="/">
          <a className="brand">
            <img src="/img/icon.png" alt="Praindo Brand" />
            PRAINDO <span>Express</span>
          </a>
        </Link>
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
        <div className="right">
          <select>
            <option value="ID">ID 🇮🇩</option>
            <option value="EN">EN 🇬🇧</option>
          </select>
          <Link href="/login">
            <a className="btn orange">Log In</a>
          </Link>
        </div>
      </div>

      <div className="hero">
        <img src="/img/element_1.svg" className="bg" />
        <div className="hero-content">
          <div className="hero-banner">
            <h1>PRAINDO Express</h1>
            <h3>Jasa Pengiriman Luar Negeri</h3>
          </div>
          <img className="hero-image" src="/img/hero.svg" alt="Hero" />
        </div>
        <div className="hero-resi">
          <form className="resi-input">
            <input type="text" placeholder="Masukan no resi disini" />
            <button type="submit" className="btn blue">
              Telusuri
            </button>
          </form>
          <span>
            <Link href="#">
              <a>Butuh Bantuan ?</a>
            </Link>
          </span>
        </div>
      </div>

      <div className="check">
        <div className="check-label">
          <span>Dari :</span>
          <h4 className="check-input">Praindo Express</h4>
        </div>
        <div className="check-label">
          <span>Ke :</span>
          <select className="check-input">
            <option value="">Pilih Negara Tujuan</option>
          </select>
        </div>
      </div>
    </>
  );
}
