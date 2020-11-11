import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const { t, i18n } = useTranslation();
  const [selectMore, setSelectMore] = useState(false);
  return (
    <>
      <footer>
        <div className="product">
          <Link href="/">
            <a className="brand">
              <img src="/img/icon.png" alt="Praindo Brand" />
              PRAINDO <span>Express</span>
            </a>
          </Link>
          <p>{t("footer_desc")}</p>
        </div>
        <div className="social">
          <h3>Keep in Touch</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com">
                <img src="/img/ic_instagram.svg" alt="Instagram Icon" />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <img src="/img/ic_facebook.svg" alt="Facebook Icon" />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <img src="/img/ic_twitter.svg" alt="Twitter Icon" />
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <img src="/img/ic_map_pin.svg" alt="Map Icon" />
              <p>
                Jl. Utama VII, Melati 1, No. 8A
                <br />
                RT. 009 RW. 001, Cengkareng,
                <br />
                Jakarta Barat
              </p>
            </li>
            <li>
              <img src="/img/ic_phone.svg" alt="Phone Icon" />
              +62 812 9865 75 93
            </li>
            <li>
              <img src="/img/ic_mail.svg" alt="Mail Icon" />
              info@praindoexpress.com
            </li>
            <li>
              <AnimateSharedLayout type="crossfade">
                <motion.button
                  className="seemore"
                  onClick={() => setSelectMore(true)}
                >
                  See More
                </motion.button>
                <AnimatePresence>
                  {selectMore && (
                    <motion.div className="modal" id="almt">
                      <div className="container">
                        <motion.span
                          layout
                          onClick={() => {
                            setSelectMore(false);
                          }}
                        >
                          <motion.img src="/img/x-circle.svg" />
                        </motion.span>
                        <div className="bodyContainer">
                          <div className="address-headline">Other Address</div>
                          <div className="branch">
                            <div className="branch-headline">
                              Kantor Pusat Jakarta Barat
                            </div>
                            <p>
                              JL. Utama VII, Melati 1, No. 8A, RT.009 RW.001,
                              cengkareng, Jakarta Barat 11730 Indonesia
                            </p>
                            <p>
                              0838-7241-4595
                              <br />
                              0812-9865-7593
                            </p>
                          </div>
                          <div className="branch">
                            <div className="branch-headline">
                              Kantor Pusat Jakarta Barat
                            </div>
                            <p>
                              JL. Utama VII, Melati 1, No. 8A, RT.009 RW.001,
                              cengkareng, Jakarta Barat 11730 Indonesia
                            </p>
                            <p>
                              0838-7241-4595
                              <br />
                              0812-9865-7593
                            </p>
                          </div>
                          <div className="branch">
                            <div className="branch-headline">
                              Kantor Pusat Jakarta Barat
                            </div>
                            <p>
                              JL. Utama VII, Melati 1, No. 8A, RT.009 RW.001,
                              cengkareng, Jakarta Barat 11730 Indonesia
                            </p>
                            <p>
                              0838-7241-4595
                              <br />
                              0812-9865-7593
                            </p>
                          </div>
                          <div className="branch">
                            <div className="branch-headline">
                              Kantor Pusat Jakarta Barat
                            </div>
                            <p>
                              JL. Utama VII, Melati 1, No. 8A, RT.009 RW.001,
                              cengkareng, Jakarta Barat 11730 Indonesia
                            </p>
                            <p>
                              0838-7241-4595
                              <br />
                              0812-9865-7593
                            </p>
                          </div>
                          <div className="branch">
                            <div className="branch-headline">
                              Kantor Pusat Jakarta Barat
                            </div>
                            <p>
                              JL. Utama VII, Melati 1, No. 8A, RT.009 RW.001,
                              cengkareng, Jakarta Barat 11730 Indonesia
                            </p>
                            <p>
                              0838-7241-4595
                              <br />
                              0812-9865-7593
                            </p>
                          </div>
                          <div className="branch">
                            <div className="branch-headline">
                              Kantor Pusat Jakarta Barat
                            </div>
                            <p>
                              JL. Utama VII, Melati 1, No. 8A, RT.009 RW.001,
                              cengkareng, Jakarta Barat 11730 Indonesia
                            </p>
                            <p>
                              0838-7241-4595
                              <br />
                              0812-9865-7593
                            </p>
                          </div>
                          <div className="branch">
                            <div className="branch-headline">
                              Kantor Pusat Jakarta Barat
                            </div>
                            <p>
                              JL. Utama VII, Melati 1, No. 8A, RT.009 RW.001,
                              cengkareng, Jakarta Barat 11730 Indonesia
                            </p>
                            <p>
                              0838-7241-4595
                              <br />
                              0812-9865-7593
                            </p>
                          </div>
                          <div className="branch">
                            <div className="branch-headline">
                              Kantor Pusat Jakarta Barat
                            </div>
                            <p>
                              JL. Utama VII, Melati 1, No. 8A, RT.009 RW.001,
                              cengkareng, Jakarta Barat 11730 Indonesia
                            </p>
                            <p>
                              0838-7241-4595
                              <br />
                              0812-9865-7593
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AnimateSharedLayout>
            </li>
          </ul>
        </div>
      </footer>
      <div className="credit">
        <p className="copyright">©Copyright PRAINDO Express</p>
        <a
          href="http://honestcraft.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="company"
        >
          Website by : HonestCraft
        </a>
      </div>
    </>
  );
};

export default Index;
