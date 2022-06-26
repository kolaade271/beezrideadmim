import "./modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Modal(){
    return(
       <div className="">

<div className="modal fade " id="addAdmim" tabindex="-1"  aria-hidden="true">
  <div className="modal-dialog permit ">
    <div className="modal-content">
        <div  className="btn-close" data-bs-dismiss="modal" >
          <FontAwesomeIcon icon={faXmark} className="close-icon float-right " /></div>
     <div className="modal-title">Confirm Admin Status</div>
      <div className="modal-body">
        <div className="modal-text">Please enter your Administration Email and Password</div>
      </div>
     
    </div>
  </div>
</div>
       </div>
    )
    
    
}





export default (Modal);

