import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
        <Head>
            <title>Blog</title>
        </Head>

        <Header />
        
        <Main>
            {children}
        </Main>

        <Footer />
    </>
  )
}

export default Layout