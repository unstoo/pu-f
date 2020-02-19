import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string,
  isThisIndexPage?: boolean
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
  isThisIndexPage
}) => (
  <div className="nextLayout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
      <link rel='icon' href='favicon.ico' type='image/x-icon' />
      { isThisIndexPage && <style>
        {
          "body{background-image: url(/img/landingBg.png); background-size: cover; background-repeat: no-repeat;}"
        }
        </style> }
      </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

const Footer = () => {
  return (
    <footer className="">
        <div className="container footer">
          <div className="row align-items-end">
            <div className="col-auto">
              <img src="img/logoFooter.png" />
            </div>
            <div className="col-auto">
                <p><a href="">Personal/bussines account</a></p>
                <p><a href="">Personal bank cards</a></p>
                <p><a href="">Co-branding card</a></p>
            </div>
            <div className="col-auto">
                <p><a href="">Bank transfers</a></p>
                <p><a href="">Merchang account</a></p>
                <p><a href="">Internet acquring</a></p>
            </div>
            <div className="col-auto">
              <p><a href="">Cards emission</a></p>
              <p><a href="">Payment processing</a></p>
              <p><a href="">Payment terminals</a></p>
          </div>
          <div className="col-auto">
              <p><a href="">POS</a></p>
              <p><a href="">Stock</a></p>
              <p><a href="">Partner programs</a></p>
              <p><a href="">Donation</a></p>
          </div>
          <div className="col"></div>
          <div className="col-auto">
              <button type="button" className="log-in rounded-pill">Log In</button>
          </div>
          <div className="col-auto">
            <Link href="/signup">
              <button type="button" className="sign-up rounded-pill">Sign Up</button>
            </Link>
          </div>
          </div>
        </div>
    </footer>
  )
}

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row head align-items-end">
                <div className="col-auto">
                    <a href="http://35.159.33.7:8080/"><img src="img/logo.png" alt=""/></a>
                </div>
                <div className="col"></div>
                <div className="col-auto">
                    <a href="#">Products <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                </div>
                <div className="col-auto">
                    <a href="/">Pricing</a>
                </div>
                <Link href="/about">
                  <div className="col-auto">
                      <a>Company</a>
                  </div>
                </Link>
                <div className="col-auto">
                    <a href="#">Help</a>
                </div>
                <div className="col-auto ml-4">
                    <Link href="/signup">
                      <button className="rounded-pill sign-up">Sign Up</button>
                    </Link>
                </div>
                <div className="col-auto sign-in">
                    <button className="rounded-pill log-in">Log In</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Layout
