import {BrowserRouter, Link} from "react-router-dom";
function Leftnav(){
    return (
        <BrowserRouter > 
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block  sidebar collapse">
    <div className="position-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link reloadDocument className="nav-link active" aria-current="page" to="/">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5233 8.94116H8.54418L13.1921 13.5891C13.3698 13.7667 13.6621 13.7812 13.8448 13.6091C14.983 12.5367 15.7659 11.0912 15.9957 9.46616C16.0351 9.18793 15.8042 8.94116 15.5233 8.94116ZM15.0577 7.03528C14.8154 3.52176 12.0077 0.714119 8.49418 0.471767C8.22595 0.453237 8.00006 0.679413 8.00006 0.948236V7.5294H14.5815C14.8504 7.5294 15.0762 7.30352 15.0577 7.03528ZM6.5883 8.94116V1.96206C6.5883 1.68118 6.34153 1.45029 6.06359 1.48971C2.55859 1.985 -0.120524 5.04705 0.00418193 8.71675C0.132417 12.4856 3.37742 15.5761 7.14801 15.5288C8.63036 15.5103 10.0001 15.0326 11.1262 14.2338C11.3586 14.0691 11.3739 13.727 11.1724 13.5256L6.5883 8.94116Z" fill="white"/>
</svg>
            <span className="ml-2">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link reloadDocument className="nav-link active" aria-current="page" to="/account">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z" fill="white"/>
</svg>


            <span className="ml-2">Accounts</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link reloadDocument className="nav-link active" aria-current="page" to="/management">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 9H6C6.55 9 7 8.55 7 8V0C7 -0.55 6.55 -1 6 -1H0C-0.55 -1 -1 -0.55 -1 0V8C-1 8.55 -0.55 9 0 9ZM0 17H6C6.55 17 7 16.55 7 16V12C7 11.45 6.55 11 6 11H0C-0.55 11 -1 11.45 -1 12V16C-1 16.55 -0.55 17 0 17ZM10 17H16C16.55 17 17 16.55 17 16V8C17 7.45 16.55 7 16 7H10C9.45 7 9 7.45 9 8V16C9 16.55 9.45 17 10 17ZM9 0V4C9 4.55 9.45 5 10 5H16C16.55 5 17 4.55 17 4V0C17 -0.55 16.55 -1 16 -1H10C9.45 -1 9 -0.55 9 0Z" fill="white"/>
</svg>
            <span className="ml-2">Manangement</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link reloadDocument className="nav-link active" aria-current="page" to="/review">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.55556 5.33329H12.4444V10.6666H3.55556V5.33329ZM14.6667 7.99996C14.6667 8.73635 15.2636 9.33329 16 9.33329V12C16 12.7363 15.4031 13.3333 14.6667 13.3333H1.33333C0.596944 13.3333 0 12.7363 0 12V9.33329C0.736389 9.33329 1.33333 8.73635 1.33333 7.99996C1.33333 7.26357 0.736389 6.66663 0 6.66663V3.99996C0 3.26357 0.596944 2.66663 1.33333 2.66663H14.6667C15.4031 2.66663 16 3.26357 16 3.99996V6.66663C15.2636 6.66663 14.6667 7.26357 14.6667 7.99996ZM13.3333 5.11107C13.3333 4.74288 13.0349 4.4444 12.6667 4.4444H3.33333C2.96514 4.4444 2.66667 4.74288 2.66667 5.11107V10.8888C2.66667 11.257 2.96514 11.5555 3.33333 11.5555H12.6667C13.0349 11.5555 13.3333 11.257 13.3333 10.8888V5.11107Z" fill="white"/>
</svg>

            <span className="ml-2">Review</span>
          </Link>
        </li>
       
        <li className="nav-item">
          <Link reloadDocument className="nav-link active" aria-current="page" to="/reports">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.55556 5.33329H12.4444V10.6666H3.55556V5.33329ZM14.6667 7.99996C14.6667 8.73635 15.2636 9.33329 16 9.33329V12C16 12.7363 15.4031 13.3333 14.6667 13.3333H1.33333C0.596944 13.3333 0 12.7363 0 12V9.33329C0.736389 9.33329 1.33333 8.73635 1.33333 7.99996C1.33333 7.26357 0.736389 6.66663 0 6.66663V3.99996C0 3.26357 0.596944 2.66663 1.33333 2.66663H14.6667C15.4031 2.66663 16 3.26357 16 3.99996V6.66663C15.2636 6.66663 14.6667 7.26357 14.6667 7.99996ZM13.3333 5.11107C13.3333 4.74288 13.0349 4.4444 12.6667 4.4444H3.33333C2.96514 4.4444 2.66667 4.74288 2.66667 5.11107V10.8888C2.66667 11.257 2.96514 11.5555 3.33333 11.5555H12.6667C13.0349 11.5555 13.3333 11.257 13.3333 10.8888V5.11107Z" fill="white"/>
</svg>


            <span className="ml-2">Reports</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link reloadDocument className="nav-link active" aria-current="page" to="/profile">
            <span className="ml-2">Profile</span>
          </Link>
        </li>



      </ul>
    </div>
  </nav>
 
  </BrowserRouter>)
    
}

export default Leftnav;
