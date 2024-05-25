import i18next from 'i18next'
import 'twin.macro'
import Link from '../../components/link'
import Layout from '../../components/layout'
import { getAllLanguageSlugs, getLanguage } from '../../i18n'
import Page from '../../components/Layout/Page'

export default function LangIndex({ language }) {
  const { t } = i18next
  const title = t('page.title');
  const description = t('page.description');

  return (
    <>
      <Page description={description} title={title}>
        <Layout>
          <h2 tw="mt-5 mb-5 font-bold text-2xl">index.js</h2>
          <div>
            {t('language')}: {t(language)} ({language})
          </div>
          <Link href="/test">
            <a>/{language}/test</a>
          </Link>
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
