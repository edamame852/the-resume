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

      <header className="flex items-center justify-between p-2" style={{ height: '16vh' }}>
        <div style={{ height: '5vh' }}>
          <h1 style={{ fontSize: "1.1rem", fontFamily: "cursive", color: "white" }} tw="font-bold text-xl md:text-xl">{t('title', { ns: 'meta' })} </h1>
        </div>
        <div className="ml-auto" style={{ height: '5vh' }}>
          <LanguageMenu />
        </div>
      </header >
      <main className="w-full max-w-2xl">{children}</main>
    </>
  )
}

export default Layout