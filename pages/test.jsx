import * as React from 'react'
import fetch from 'isomorphic-unfetch';
import axios from 'axios'
import Dashboard from '../components/Dashboard'
import nextCookie from 'next-cookies'
// import Cookies from 'js-cookie'
import { Cookies } from 'react-cookie';
const cookies = new Cookies();


import Link from 'next/link.js';
const serverUrl = 'http://localhost:4000';


const Test = (props) => {
    const [data, setData] = React.useState('Click to load.')
    const [token, setToken] = React.useState('Req token')


    const getToken = async () => {
      console.log("getToken called");
      const response = await axios.get(serverUrl + '/login')
      const token = response.data.token;
      cookies.set('token', token);
      setToken(token)
    }

    const getData = async (e) => {
      const token = cookies.get('token')
    try {
      const res = await axios.get(serverUrl + '/data', { headers: { 'Authorization': token } });
      setData(res.data)
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
   
    <div>
      <h2>Test</h2>
      <data>{JSON.stringify(data)}</data>
      <button onClick={getData}>Get Data</button>
      <br />
      <button onClick={getToken}>Get Token</button>
      <data>{JSON.stringify(token)}</data>
      <Link href="/secret">
          <a>Secret page</a>
        </Link>
    </div>

  )
}


// const getInitialProps  = async (ctx) => {
//   const cookies = nextCookie(ctx)
//   console.log(JSON.stringify(cookies))
//   const res = await fetch('http://localhost:4000/data', {method: "GET", credentials: "include"});
//   console.log(`Show res. ${JSON.stringify(res)}`);
//   const data = await res.json();
//   console.log(`Show data fetched. Count: ${JSON.stringify(data)}`);
//   return {
//     fetchData: data
//   }
// }

// Test.getInitialProps = getInitialProps


export default Test

