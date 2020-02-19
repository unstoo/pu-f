import 'react-phone-input-2/lib/style.css'
import '../signupform.css'
//  ------ стили верстальщиков
import '../style.css'
import '../bootstrap.min.css'
import '../font-awesome.min.css'
// FileInputSelfie
// FileInputPoA

// This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import UserContext from '../components/UserContext';

export default class MyApp extends App {
  state = {
    user: '-------'
  };

  // componentDidMount = () => {
  //   const user = localStorage.getItem('coolapp-user');
  //   if (user) {
  //     this.setState({        user      });
  //   } else {
  //     Router.push('/signin');
  //   }
  // };

  // signIn = (username, password) => {
  //   localStorage.setItem('coolapp-user', username);

  //   this.setState({        user: username      },
  //     () => {        Router.push('/');      }
  //   );
  // };

  // signOut = () => {
  //   localStorage.removeItem('coolapp-user');
  //   this.setState({
  //     user: null
  //   });
  //   Router.push('/signin');
  // };

  setUser =  (user) => {
    // alert('setUser: ' + user)
    localStorage.setItem('user', user);
  }

  getUser = () => {
    // alert('getUser: ' + localStorage.getItem('user'))
    // if ( localStorage )  return localStorage.getItem('user')
    return ''
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      // <UserContext.Provider value={{ user: this.state.user, signIn: this.signIn, signOut: this.signOut }}>
      <UserContext.Provider value={{ getUser: this.getUser, setUser: this.setUser }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}