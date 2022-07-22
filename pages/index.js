import Head from 'next/head'
import Footer from '../components/footer/Footer'
import Form from '../components/form/form'
import Banner from '../components/home/banner'
import BasicInfo from '../components/Info/basicInfo'
import Poster from '../components/poster/poster'
import Service from '../components/services/service'
import Testomoni from '../components/testomoni/testomoni'
 



export default function Home(props) {
  console.log(props.data)
  return (
    <div >
      <Head>
        <title>Healing Hands</title>
        <meta name="description" content="Best " />
        <link rel="icon" href="/icons/hhpb.png" />
      </Head>

      <main >
            <Banner img='/assets/banner.jpg'  />
            <BasicInfo />
            <Service />
            <Poster imgUrl='/assets/proud.jpg'  pattern='/assets/pattern.png'/>
            <Testomoni />
            <Form imgUrl='/service/startup.jpg' />
             
      </main>

        
    </div>
  )
}
