import '../../frontends/home/Home.scss'
import { Header, Booking, Special } from '../../frontends/home'
import Promotion from '../../frontends/home/Promotion'
import Recommended from '../../frontends/home/Recommended'
import CustomerResponse from '../../frontends/home/CustomerResponse'
import Footer from '../../frontends/home/Footer'
import ScrollToTopBtn from '../../components/homes/ScrollToTopBtn'

const Index = () => {

  return (
    <div className="travel_home">
      <Header/>
      <Booking/>
      <Special />
      <Promotion/>
      <Recommended/>
      <CustomerResponse/>
      <Footer/>
      <ScrollToTopBtn/>
    </div>
  )
}

export default Index
