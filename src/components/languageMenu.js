import i18next from 'i18next'
import { languages } from '../i18n'
import tw from 'twin.macro'
import Link from './link'

const LanguageMenu = () => {
  const { t } = i18next

  const centeringStyles = {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    height: '100vh',
  }

  return (
    <div style={centeringStyles} className="text-gray-300">
      <div tw="flex items-center">
        <span tw="mr-2 font-sans">{t("header.selectLanguage.label")}</span>
        {languages.map((lang, index) => {
          let langWithFlag;
          switch (lang) {
            case 'en':
              langWithFlag = t("header.selectLanguage.english");
              break;
            case 'jp':
              langWithFlag = t("header.selectLanguage.japanese");
              break;
            // Add more cases for other languages as needed
            default:
              langWithFlag = t(lang);
          }
          return (
            <Link key={index} locale={lang}>
              <a
                css={[
                  tw`text-base m-0.5 p-0.5 cursor-pointer`,
                  i18next.language === lang && tw`text-purple-400 underline `,
                ]}
              >
                {t(langWithFlag)}
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default LanguageMenu