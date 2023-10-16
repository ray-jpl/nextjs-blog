import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ 
    allPostsData 
  }: {
    allPostsData: {
      date: string
      title: string
      id: string
    }[]
  }) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
  
        <section className="pt-1 text-lg">
          <h2 className="text-3xl font-bold">Blog</h2>
          <ul className="p-0 m-0 list-none">
            {allPostsData.map(({ id, date, title }) => (
              <li className="m-0 mb-5" key={id}>
                <Link href={`/posts/${id}`}>
                  {title}
                </Link>
                <br />
                <small className="text-[#666]">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
  }