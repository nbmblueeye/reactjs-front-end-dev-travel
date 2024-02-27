import { useLocation } from "react-router-dom";

const Footer = () => {

  let pages = useLocation();

  return (
    <div className="travel__footer">
        <div className="container">
          <div className="travel__footer-copyright">
              <p className="text-muted">
                © 2024 nbmblueeye - All right reserved.
              </p>
          </div>
          <ul className="travel__footer-nav">
            {
              pages.pathname === "/" && 
              <>
                <li className='travel__navbar_item'><a href="#review" className='travel__navbar-nav_item link'>Review</a></li>
                <li className='travel__navbar_item'><a href="#tip" className='travel__navbar-nav_item link'>Tip</a></li>
                <li className='travel__navbar_item'><a href="#alert" className='travel__navbar-nav_item link'>Alert</a></li>
                <li className='travel__navbar_item'><a href="#blog" className='travel__navbar-nav_item link'>Blog</a></li>
              </>
            }
          </ul>
         
        </div>
    </div>
  )
}

export default Footer