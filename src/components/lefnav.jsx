import {
  faChartLine, faDashboard, faDiceD20,
  faPercentage, faUser, faUsersViewfinder
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, NavLink } from "react-router-dom";
function Leftnav() {
  return (
    <BrowserRouter >
      <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block  sidebar collapse">
        <div className="position-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink reloadDocument className="nav-link leftnav" to="/">
                <FontAwesomeIcon icon={faDashboard} />
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink reloadDocument className="nav-link leftnav " to="/account">
                <FontAwesomeIcon icon={faUser} />
                <span className="ml-3">Accounts</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink reloadDocument className="nav-link leftnav"  to="/management">
                <FontAwesomeIcon icon={faDiceD20} />
                <span className="ml-3">Manangement</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink reloadDocument className="nav-link leftnav" to="/review">
                <FontAwesomeIcon icon={faUsersViewfinder} />
                <span className="ml-3">Review</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink reloadDocument className="nav-link " to="/reports">
                <FontAwesomeIcon icon={faChartLine} />
                <span className="ml-3">Reports</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink reloadDocument className="nav-link leftnav" to="/commission">
                <FontAwesomeIcon icon={faPercentage} />
                <span className="ml-3">Commission</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink reloadDocument className="nav-link leftnav"  to="/profile">
                <span className="ml-3">Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </BrowserRouter>)

}

export default Leftnav;
