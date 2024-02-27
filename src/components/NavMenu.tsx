import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom'

const NavMenu = () => {

  const [navMobile, setNavMobile] = useState<boolean>(false);
  const [menuMobile, setMenuMobile] = useState<boolean>(false);
  const [menuLarge, setMenuLarge] = useState<boolean>(false);
  const menuMobileRef = useRef< HTMLUListElement | null>(null);
  const menuLargeRef = useRef< HTMLUListElement | null>(null);

  const [user] = useState(null);

  let pages = useLocation();

  return (
    <div className={`travel__navbar ${pages.pathname == "/" ? "absolute":""}`}>
      <div className="travel__navbar-container container">
        <a href="/" className='travel__navbar_item travel__navbar-brand'>Travel</a>
        <div className="travel__navbar_item-shim"></div>
        <button className={`travel__navbar-toggler-button ${navMobile ? "show" : "hide"}`} onClick={() => setNavMobile(!navMobile)}>
          <div className="travel__navbar-toggler-button_bar first"></div>
          <div className="travel__navbar-toggler-button_bar second"></div>
          <div className="travel__navbar-toggler-button_bar third"></div>
        </button>
        <ul id="travel__navbar-menu" className={`travel__navbar-menu ${navMobile ? "show" : ""}`}>
          <li className='travel__navbar_item'><a href="#review" className='travel__navbar-nav_item'>Review</a></li>
          <li className='travel__navbar_item'><a href="#tip" className='travel__navbar-nav_item'>Tip</a></li>
          <li className='travel__navbar_item'><a href="#alert" className='travel__navbar-nav_item'>Alert</a></li>
          <li className='travel__navbar_item'><a href="#blog" className='travel__navbar-nav_item'>Blog</a></li>
          <li className='travel__navbar_item mobile'>
              <a href="#" className={`travel__navbar-nav_item mobile ${menuMobile ? 'show':'hide'}`} onClick={() => setMenuMobile(!menuMobile)}>
                {
                  user ?
                  (
                    <>
                        <div className="user-avatar-box">
                        <img src={`${import.meta.env.VITE_API_BACKEND_URL}/images/${user}`} alt="avatar" />
                      </div>
                      {user}
                    </>
                  )
                  :
                  (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                  )
                }
              </a>
              <ul className='travel__navbar-nav_item-menu mobile' ref={menuMobileRef} style={{height: `${ menuMobile ? menuMobileRef.current?.scrollHeight + "px":"0px"}`, opacity: `${ menuMobileRef ? "1":"0"}`}}>
              {
                !user?
                (
                  <>
                      <li className='travel__navbar_item-menu-item'>
                        <a href="/login" className='travel__navbar-nav_item'>Login</a>
                      </li>
                      <li className='travel__navbar_item-menu-item'>
                        <a href="/register" className='travel__navbar-nav_item'>Register</a>
                      </li>
                  </>
                )
                :
                (
                  <>
                     <li className='travel__navbar_item-menu-item'>
                        <a href="#" className='travel__navbar-nav_item'>Logout</a>
                      </li>
                      <li className='travel__navbar_item-menu-item'>
                        <a href="/profile" className='travel__navbar-nav_item'> Profile</a>
                      </li>
                      <li className='travel__navbar_item-menu-item'>
                        <a href="/admin" className='travel__navbar-nav_item'>Admin Dashboard</a>
                      </li>
                  </>
                )
              }
              </ul>
          </li>
        </ul>
        <div id="nav-menu-dropdown" className='travel__navbar_item travel__navbar-nav_user'>
          <a href="#" className={`travel__navbar-nav_user-item ${menuLarge ? "show":"hide"}`} onClick={() => setMenuLarge(!menuLarge)}>
            {
              user ?
              (
                <>
                    <div className="user-avatar-box">
                    <img src={`${import.meta.env.VITE_API_BACKEND_URL}/images/${user}`} alt="avatar" />
                  </div>
                  {user}
                </>
              )
              :
              (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
              )
            }
          </a>
          <ul className={`travel__navbar-nav_item-menu ${menuLarge ? "show":"hide"}`} ref={menuLargeRef} style={{height: `${ menuLarge ? menuLargeRef.current?.scrollHeight + "px":"0px"}`, opacity: `${ menuLarge ? "1":"0"}`}}>
            {
              !user?
              (
                <>
                    <li className='travel__navbar_item-menu-item'>
                      <a href="/login" className='travel__navbar-nav_item-menu_item'>Login</a>
                    </li>
                    <li className='travel__navbar_item-menu-item'>
                      <a href="/register" className='travel__navbar-nav_item-menu_item'>Register</a>
                    </li>
                </>
              )
              :
              (
                <>
                    <li className='travel__navbar_item-menu-item'>
                      <a href="#" className='travel__navbar-nav_item'>Logout</a>
                    </li>
                    <li className='travel__navbar_item-menu-item'>
                      <a href="/profile" className='travel__navbar-nav_item-menu_item'> Profile</a>
                    </li>
                    <li className='travel__navbar_item-menu-item'>
                      <a href="/admin" className='travel__navbar-nav_item-menu_item'>Admin Dashboard</a>
                    </li>
                </>
              )
            }
          </ul> 
        </div>
      </div>
    </div>
  )
}

export default NavMenu
