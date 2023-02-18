import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'

import React, { Fragment, useMemo } from 'react'

import { getMDXComponent } from 'mdx-bundler/client';

export default function Post({ postData }) {
    let { code, frontmatter } = postData.props
    const PostContent = useMemo(() => {
    if (!code) return Fragment
    return getMDXComponent(code)
  }, [code]);
  
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <article className='prose dark:prose-invert max-w-full'>
        
        <h1 className="text-4xl leading-8 sm:leading-5 font-bold my-4 tracking-tighter">{frontmatter.title}</h1>
        <div className="text-[#666]">
          <Date dateString={frontmatter.date} />
        </div>
        <section className='mt-10'>
          <PostContent />
        </section>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}
