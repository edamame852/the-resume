// src/pages/[lang]/index.js
import i18next from 'i18next'
import 'twin.macro'
import Layout from '../../components/layout'
import { getAllLanguageSlugs, getLanguage } from '../../i18n'
import Background from '../../components/Sections/Background';
import About from '../../components/Sections/About';
import Page from '../../components/Layout/Page';
import Resume from '../../components/Sections/Resume';
import Header from '../../components/Sections/Header';

export default function LangIndex({ language }) {
  const { t } = i18next;
  return (
    <Page description={t("page.description")} title={t("page.title")}>
      {/* <Layout /> */}
      <Header />
      <Background />
      <About />
      <Resume />
    </Page>


  )
}

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const language = getLanguage(params.lang)
  return {
    props: {
      language,
    },
  }
}