import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from "../lib/posts"
import Date from '../components/date'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props:{
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there. I am an engineering enthusiast from Bangalore, adept in a spectrum of programming languages and web frameworks, while constantly exploring the frontiers of technology. Follow me on <a href="https://twitter.com/kumari_babitha">Twitter.</a></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <Date dateString={date} className={utilStyles.lightText}></Date>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
