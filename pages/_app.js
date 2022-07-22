import Footer from '../components/footer/Footer'
import NavMain from '../components/navbar/navMain'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <> 
     <NavMain />
            <Component {...pageProps} />
    <Footer img='/assets/footer-1.jpg' />
  </>
}

export default MyApp
