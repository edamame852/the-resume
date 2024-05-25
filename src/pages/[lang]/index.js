// src/pages/[lang]/index.js
import i18next from 'i18next'
import 'twin.macro'
import Layout from '../../components/layout'
import { getAllLanguageSlugs, getLanguage } from '../../i18n'
import Background from '../../components/Sections/Background';

export default function LangIndex({ language }) {
  const { t } = i18next;
  return (
    <>
      <Layout />
      <Background />
    </>

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