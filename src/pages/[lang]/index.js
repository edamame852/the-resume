// src/pages/[lang]/index.js
import i18next from 'i18next'
import 'twin.macro'
import Layout from '../../components/layout'
import { getAllLanguageSlugs, getLanguage } from '../../i18n'
import Background from '../../components/Sections/Background';
import About from '../../components/Sections/About';

export default function LangIndex({ language }) {
  return (
    <div>
      <Layout />
      <Background />
    </div>


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