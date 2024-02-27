import { Outlet } from 'react-router-dom';
import './frontends/assets/FrontEnd.scss';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';


function App() {

  return (
    <>
      <NavMenu/>
      <div className="travel__main-content">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
