import * as React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import SignUpForm from '../components/SignUpForm'
import { NextPage } from 'next'


const IndexPage: NextPage = () => {
  return (
    <Layout title="Pays Union">
      <div>
        <SignUpForm />
      </div>
    </Layout>
  )
}


export default IndexPage
