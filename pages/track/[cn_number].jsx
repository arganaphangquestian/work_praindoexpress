import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Footer from "../../components/Footer";
import axios from "axios";

const Tracking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { cn_number } = router.query;
  const [lang, setLang] = useState(
    i18n.language || window.localStorage.i18nextLng
  );
  const [data, setData] = useState();
  const onChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
    setLang(e.target.value);
  };

  useEffect(() => {
    if (router.asPath !== router.route) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://system.tgiexpress.com/api/v1/process_track_api?api_key=kDXTe4eJ4lQkDMZtSficnxxJiPjDAVNe&referenceNumber=${cn_number}&processMasterCode=shipment_tracking`
        )
        .then((res) => {
          if (res.data) {
            setData(res.data[0].processTimeLineLogsList);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>PRAINDO Express | Track</title>
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
        <div className="right">
          <select value={lang} onChange={(e) => onChangeLang(e)}>
            <option value="id">ID 🇮🇩</option>
            <option value="en">EN 🇬🇧</option>
          </select>
          <Link href="/login">
            <a className="btn orange">Log In</a>
          </Link>
        </div>
      </div>

      <section className="track">
        <img className="hero-image" src="/img/hero.svg" alt="Hero" />
        <p>Tracking Result</p>
        <h1>
          Tracking Code: <span>{cn_number}</span>
        </h1>
        {data && !isLoading ? (
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((x) => (
                <tr>
                  <td>{x.status}</td>
                  <td>{x.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <h1 style={{ color: "#f97f34", marginBottom: 32 }}>
              {isLoading ? "Loading . . ." : "Data Not Found"}
            </h1>
            <Link href="/">
              <a className="btnlink orange">Back to Home</a>
            </Link>
          </>
        )}
      </section>
      <Footer />
      <style jsx>{`
        .btnlink {
          padding: 8px 16px;
          border-radius: 8px;
          color: #fff;
          font-weight: bold;
          font-family: "Montserrat", sans-serif;
        }
        .btnlink.orange {
          background-color: #f97f34;
        }
        .header {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .header .right {
          flex-direction: row;
          transform: translateY(0);
          justify-content: flex-end;
          padding-right: 24px;
        }
        .header .btn {
          padding: 8px 24px;
          font-size: 0.8em;
        }
        .header .right select {
          margin-bottom: 0;
        }
        .track {
          z-index: 1;
          position: relative;
          margin: 32px 0;
        }
        .track h1 {
          margin-top: 16px;
          font-size: 2.5em;
        }
        .hero-image {
          position: absolute;
          right: 0;
          bottom: 0;
          margin-right: 96px;
        }
        .track h1 span {
          color: #f97f34;
        }
        .track table {
          margin-top: 32px;
          width: 60%;
          border-radius: 16px;
          background-color: #fff;
          box-shadow: 8px 8px 16px 2px rgb(255, 242, 234);
          padding: 24px;
        }
        .track table tr {
          display: flex;
        }
        .track table tr td,
        .track table tr th {
          flex: 1;
          padding: 16px 0;
          text-align: left;
        }
        .track table tr th {
          font-size: 1.5em;
        }
        .track table tr {
          border-bottom: 1px solid #dedede;
        }
        .track table tr:first-child,
        .track table tr:last-child {
          border-bottom: none;
        }
        .track table tr td {
          color: #4e4e4e;
          font-family: "Open Sans", sans-serif;
        }
        @media screen and (max-width: 1090px) {
          .hero-image {
            display: none;
          }
          .track table {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Tracking;
