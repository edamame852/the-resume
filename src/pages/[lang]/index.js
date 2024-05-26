// src/pages/[lang]/index.js
import i18next from 'i18next'
import 'twin.macro'
import Layout from '../../components/layout'
import { getAllLanguageSlugs, getLanguage } from '../../i18n'
import Background from '../../components/Sections/Background';
import About from '../../components/Sections/About';
import Page from '../../components/Layout/Page';
import Hero from '../../components/Sections/Hero';

export default function LangIndex({ language }) {
  const { t } = i18next;
  return (
    <Page description={t("page.description")} title={t("page.title")}>
      <Layout />
      <Background />
      <About />
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