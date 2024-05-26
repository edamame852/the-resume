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
    height: '5vh',
  }

  return (
    <div style={centeringStyles} className="text-gray-300">
      <div tw="flex flex-col items-end">
        <div tw="flex items-center">
          {languages.map((lang, index) => {
            let selectedLanguage;
            switch (lang) {
              case 'en':
                selectedLanguage = t("header.selectLanguage.english");
                break;
              case 'jp':
                selectedLanguage = t("header.selectLanguage.japanese");
                break;
              // Add more cases for other languages as needed
              default:
                selectedLanguage = t(lang);
            }
            return (
              <Link key={index} locale={lang}>
                <a
                  css={[
                    tw`text-base m-0.5 p-0.5 cursor-pointer`,
                    i18next.language === lang && tw`text-purple-400 underline `,
                  ]}
                >
                  {t(selectedLanguage)}
                </a>
              </Link>
            )
          })}
        </div>
        <div tw="mt-2 font-sans">
          <span>{t("header.missingCountryFlag")}
            <a css={[
              tw`text-base m-0.5 p-0.5 cursor-pointer`,
              tw`text-blue-400 underline `,
            ]} href='https://microsoftedge.microsoft.com/addons/detail/country-flag-fixer/nfkjcekokjacfnambbbdidjpgogkppmm'>{t("header.href.ie")}</a> /
            <a css={[
              tw`text-base m-0.5 p-0.5 cursor-pointer`,
              tw`text-red-400 underline `,
            ]} href='https://chromewebstore.google.com/detail/country-flag-fixer/jhcpefjbhmbkgjgipkhndplfbhdecijh'> {t("header.href.chrome")}</a>
          </span>
        </div>
        <br />
      </div>
    </div>
  )
}

export default LanguageMenu