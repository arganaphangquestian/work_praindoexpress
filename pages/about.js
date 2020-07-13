import { useTranslation } from "react-i18next";

function About() {
	const { t, i18n } = useTranslation();

	return (
		<div>
			<button onClick={() => i18n.changeLanguage("id")}>id</button>
			<button onClick={() => i18n.changeLanguage("en")}>en</button>
			<h1>{t("Welcome")}</h1>
		</div>
	);
}

export default About;
