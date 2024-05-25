import i18next from 'i18next'
import 'twin.macro'
import Link from '../../components/link'
import Layout from '../../components/layout'
import { getAllLanguageSlugs, getLanguage } from '../../i18n'
import Page from '../../components/Layout/Page'

import Header from '../../components/Sections/Header'

export default function LangIndex({ language }) {
  const { t } = i18next;
  const page = t('page');
  const headerInputs = t('header')
  return (
    <>
      <Page description={page.description} title={page.title}>
        <Header inputs={headerInputs} />
        <Layout>
          <div>
            {t('language')}: {t(language)} ({language})
          </div>
        </Layout>
      </Page>
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
