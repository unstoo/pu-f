import React from 'react';
import Link from 'next/link.js';
import axios from 'axios';
import { Cookies } from 'react-cookie';

import Layout from '../components/Layout'

const serverUrl = 'http://localhost:4000';

// set up cookies
const cookies = new Cookies();
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: cookies.get('token') || null
    }
  }

  onLoginClick = async () => {
    console.log("Login called");
    const response = await axios.get(serverUrl + '/api/login')
    const token = response.data.token;
    cookies.set('token', token);
    this.setState({
      token: token
    })
  }

  render() {
    return (
      <Layout>
        <div>
          <button onClick={() => this.onLoginClick()}>Get Token</button>
          <br></br>
          <p>Current token: {this.state.token || 'null'}</p>
        </div >
      </Layout>
    )
  }
}

export default Index;
