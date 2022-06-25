import './fab.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function Fab(){
    return (
       
        
        
     
          <div className="fab">
            <div className="FabInner">
                <a href="#/" className="FabButton">
                <FontAwesomeIcon icon={faPlus} className="icon" />
                </a>
                <ul className="fabMenu">
                   
                  
                    <li>
                        <a href="#/">Add Inventory</a>
                    </li>
                    <li>
                        <a href="#/">Add Staff</a>
                    </li>
                </ul>
            </div>
        </div>
    )
    
}

export default Fab;
