import Head from 'next/head'
import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'twin.macro'
import LanguageMenu from './languageMenu'

const Layout = function ({ children }) {
  const router = useRouter()
  const { t } = i18next

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={t('title', { ns: 'meta' })} />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />{' '}
        <title>{t('title', { ns: 'meta' })}</title>
      </Head>

      <header className="flex items-center justify-between p-2">
        <div style={{ height: '2vh' }}>
          <h1 tw="font-bold text-xl md:text-2xl">{t('title', { ns: 'meta' })} </h1>
        </div>
        <div style={{ height: '6vh' }}>
          <LanguageMenu />
        </div>
      </header>
      <main className="w-full max-w-2xl">{children}</main>
    </>
  )
}

export default Layout