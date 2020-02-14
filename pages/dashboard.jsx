import * as React from 'react'
// import Link from 'next/link'
// import Layout from '../components/Layout'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Dashboard/Footer'
import { handleAuthSSR } from '../utils/auth';

// import fetch from 'isomorphic-unfetch';

const DashboardPage = (props) => {
  return (
        <>
          <Dashboard hydrate={props.data}/>
          <Footer />
        </>
  )
}


const getInitialProps  = async (ctx) => {
  const response = await handleAuthSSR(ctx)
  console.log(response.data)
  // const res = await fetch('http://localhost:4000/data', {method: "GET"});
  // const data = await res.json();
  // console.log(`Show data fetched. Count: ${data.name}`);
  return {
    data: response.data.name.firstname + ' ' + response.data.name.lastname 
  }
}

DashboardPage.getInitialProps = getInitialProps

export default DashboardPage
