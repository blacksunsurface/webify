import classNames from "classnames-ts";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../main";
import { languages } from "../../utils";
import { Language } from "../../utils/enums";
import { Logo } from "../Icons";
import "./style.scss";

const defaultId = Language.English;

const Header = () => {
  const { i18n, t } = useTranslation();

  const [languageId, setLanuagedId] = useState(i18n.language);
  const [showOthers, setOthers] = useState(false);

  const language = languages.find((language) => language.id === languageId)!;
  const others = languages.filter((language) => language.id !== languageId);

  const select = (id: Language) => {
    i18n.changeLanguage(id);
    setLanuagedId(id);
    setOthers(false);
  };

  return (
    <div className="header">
      <div className="navbar">
        <Logo />
        <div className="buttons">
          <div className="languages">
            <div
              className={classNames("language", { active: showOthers })}
              onClick={() => setOthers(!showOthers)}
            >
              {language.label}
            </div>
            {showOthers && (
              <div className="others">
                {others.map(({ id, label }) => (
                  <div key={id} onClick={() => select(id)}>
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>
          <a className="subscribe" href="#subscribe">
            {t("HeaderButton")}
          </a>
        </div>
      </div>
      <h1>{t("HeaderTitle")}</h1>
      <h2>{t("HeaderSubtitle")}</h2>
    </div>
  );
};

export default Header;
