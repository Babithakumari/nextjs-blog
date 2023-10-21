import Link from "next/link";
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image'
import Layout from '/components/layout'

const FirstPost = () => {
    return (
        <Layout>
        <Head>
        <title>First Post</title>
      </Head>
     

        <h1>First Post</h1>
        <p>This is the content of first post</p>
        </Layout>
    )

}
export default FirstPost