import Head from 'next/head';
import Link from 'next/link';

const name = "Hi, I'm Raymond";
export const siteTitle = 'Raymond Li';

export default function Layout({ 
  children, 
  home }: {
    children: React.ReactNode,
    home?: boolean 
  }) {
  return (
    <div className='theme-midnight smooth-scroll'>
      <div className="flex flex-col items-center bg-skin-fill text-skin-primary min-h-screen">
        <Head>
          <link rel="icon" href="/ray.png" />
          <meta
            name="description"
            content="Raymond Li's Personal Website"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
            
        <header className="w-screen mb-5 flex flex-col items-center">
          <nav className="w-2/5 my-2 flex flex-row justify-between">
            <div className="p-2 mx-1 rounded-lg hover:bg-skin-muted text-xl font-bold">
              <Link href="/">{siteTitle}</Link>
            </div>

            <div className="w-1/3 flex justify-between margin-0">
              <Link href="/projects"><a className="p-2 mx-1 rounded-lg hover:bg-skin-muted">Projects</a></Link>
              <Link href="/blog"><a className="p-2 mx-1 rounded-lg hover:bg-skin-muted">Blog</a></Link>
              <Link href="/#contact"><a className="p-2 mx-1 rounded-lg hover:bg-skin-muted">Contact</a></Link>
            </div>
          </nav>
          
          {home ? (
              <h1 className="mt-5 text-5xl font-black tracking-tight">{name}</h1>
          ) : (
            <></>
          )}
        </header>

        <div className="w-2/5">
          <main >{children}</main>
          {!home && (
            <div className="mt-12 hover:underline">
              <Link href="/">← Back to home</Link>
            </div>
          )}
        </div>
      </div>          
    </div>
  );
}