import Footer from '@/components/HomeLayout/Footer'
import Header from '@/components/HomeLayout/Header'
import Ai from '@/components/Section/AIFeatures/Ai';
import Faq from '@/components/Section/Faq/Faq';
import Features from '@/components/Section/Features/Features';
import Grocery from '@/components/Section/Grocery/Grocery'
import Join from '@/components/Section/JoinGroscon/Join';
import Service from '@/components/Section/Service/Service';

export default function Home() {
  return (
    <div>
    <div className='w-full'>
      <Header />
      <div>
        <Grocery />
        <Service />
        <Features />
        <Ai />
        <Faq />
        <Join />
      </div>
      <Footer />
    </div>
      
    </div>
  )
}
