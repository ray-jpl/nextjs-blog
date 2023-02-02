import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';

const name = "Hi, I'm Raymond";
export const siteTitle = 'Raymond Li';

export default function Layout({ 
  children, 
  home }: {
    children: React.ReactNode,
    home?: boolean 
  }) {
  return (
    <div className='smooth-scroll'>
      <div className="flex flex-col items-center bg-skin-fill text-skin-primary min-h-screen w-full">
        <Head>
          <link rel="icon" href="/ray.png" />
          <meta
            name="description"
            content="Raymond Li's Personal Website"
          />
          <meta
            property="og:image"
            content="/ray.png"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
            
        <header className="w-full mb-5 flex flex-col items-center">
          <Navbar/>
          {home ? (
              <h1 className="mt-5 mb-10 text-5xl font-black tracking-tight text-skin-accent text-center p-6">{name}</h1>
          ) : (
            <></>
          )}
        </header>

        <div className="p-6 w-full md:w-4/5 xl:w-2/5">
          <main >{children}</main>
          {!home && (
            <div className="mt-12 mb-6 hover:underline">
              <Link href="/">← Back to home</Link>
            </div>
          )}
        </div>
      </div>          
    </div>
  );
}