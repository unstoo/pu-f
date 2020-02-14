import * as React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
// import Form from '../components/Form'
import { NextPage } from 'next'



const IndexPage: NextPage = () => {
  return (
    <Layout title="Pays Union" isThisIndexPage={true}>
      <div>
          <div className="container landing ">
            <div className="row align-items-center">
                <div className="col-7">
                    <h2>Banking services</h2>
                    <h1>PAYSUNION – надежный поставщик платежных решений для различных компаний по всему миру.</h1>
                    <p>Переводите деньги онлайн, самым современным и безопасным способом.</p>
                </div>
                <div className="col"></div>
            </div>
        </div>
      </div>
    </Layout>
  )
}


export default IndexPage
