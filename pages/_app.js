import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../helper/i18n";
import "../styles/style.css";

const Application = ({ Component, pageProps }) => {
	const { t, i18n } = useTranslation();
	useEffect(() => {
		i18n.changeLanguage("id");
		return () => {};
	}, []);
	return <Component {...pageProps} />;
};

export default Application;
