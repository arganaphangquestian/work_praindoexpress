import Head from "next/head";
import Link from "next/link";

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
  return (
    <>
      <div className="bg-bg">
        <img src="/img/element_1.svg" />
        <img src="/img/element_2.svg" />
      </div>
      <Head>
        <title>PRAINDO Express</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <form>
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
        </form>
        <button className="btn orange">Cek Harga</button>
      </div>

      <section>
        <h1 className="title">How It Works?</h1>
        <ul>
          <li>
            <h4>Pengirim Menyerahkan Barang ke PRAINDO Express</h4>
            <span>yang perlu di lakukan</span>
          </li>
          <li>
            <h4>
              Barang akan kami timbang beratnya dan kami ukur
              <br />
              volumenya (P x L x T : 5000)
            </h4>
          </li>
          <li>
            <h4>
              PRAINDO akan mengeluarkan nomor tracking pengiriman
              <br />
              setelah pelanggan melunasi pembayaran
            </h4>
          </li>
          <li>
            <h4>Barang segera diproses dan dikirim ke negara tujuan</h4>
            <span>
              cabang tujuan pengambilan barang (khusus negara Hongkong)
            </span>
          </li>
        </ul>
      </section>
      <section>
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
            <p>
              Jika Anda memiliki pertanyaan, Anda bisa
              <br />
              menghubungi kami via Whatsapp
            </p>
            <button className="btn orange">Whatsapp</button>
          </div>
        </div>
      </div>

      <section className="aboutus">
        <h1 className="title">About Us</h1>
        <p>
          Praindo Express adalah perusahaan yang bergerak di bidang jasa
          pengiriman luar
          <br />
          negeri. Kami menawarkan jasa pengiriman internasional melalui jalur
          udara. Praindo
          <br />
          Express melayani banyak pengiriman yakni pengiriman dari E-commerce,
          Perusahaan,
          <br />
          Online Shop dan juga perorangan.
        </p>
        <h3>Visi</h3>
        <p>
          Menjadi jasa pengiriman bertaraf internasional yang terpercaya,
          terbaik, tercepat,
          <br />
          termurah, dan teraman dalam memenuhi kepuasan pelanggan.
        </p>
        <h3>Misi</h3>
        <ul>
          <li>
            <p>Selalu memberikan layanan yang terbaik kepada pelanggan kami</p>
          </li>
          <li>
            <p>
              Mengevaluasi secara rutin bagaimana pelayanan yang telah kami
              berikan
            </p>
          </li>
          <li>
            <p>Meningkatkan kinerja dan juga sistem terus menerus</p>
          </li>
        </ul>
      </section>

      <footer>
        <div className="brand"></div>
        <div className="social">
          <h3>Keep in Touch</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">twitter</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <div className="ul">
            <li>
              Jl. Utama VII, Melati 1, No. 8A
              <br />
              RT. 009 RW. 001, Cengkareng,
              <br />
              Jakarta Barat
            </li>
            <li>+62 812 9865 75 93</li>
            <li>info@praindoexpress.com</li>
          </div>
        </div>
      </footer>
    </>
  );
}
