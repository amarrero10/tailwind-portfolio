import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import Script from 'next/script'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Albert Marrero',
    default:
      'Albert Marrero - Software Developer, Tech Enthusiast, Entrepreneur',
  },
  description:
    'I’m Albert. As a software engineer, I create dynamic digital experiences through innovative solutions and seamless design.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <>
      <Script
        id="gtag-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-3N2Q283BHL`}
      />

      <Script id="gtag-inline-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3N2Q283BHL', {
      page_path: window.location.pathname,
    });
  `}
      </Script>

      <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className="flex h-full bg-zinc-50 dark:bg-black">
          <Providers>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
