import "./../modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faPeopleGroup,
    faIdCard, faCar, faPalette,  
    faMobile, 
    faCalendarAlt} from '@fortawesome/free-solid-svg-icons'

function DriverModal(props) {
  return (
    <div className="">
      <div className="modal fade " id="driver" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg drivermodal">
          <div className="modal-content">
            <div className="">
              <div className="modal-body">
                
              <form class="row g-4 nth">
              <div className="driverdetail">Driver Details</div>
  <div class="col-md-4">
    <label  class="form-label input-label">
    <FontAwesomeIcon icon={faUser} className="iconmail" /> &nbsp;&nbsp; Legal Last Name</label>
    <input type="text"  class="form-control input-view"  value={props.data.name} disabled/>
  </div>
  <div class="col-md-4">
  <label  class="form-label input-label">
  <FontAwesomeIcon icon={faUser} className="iconmail" />
&nbsp;&nbsp;Legal First Name</label>
    <input type="text" class="form-control input-view" value={props.data.name}  disabled/>
  </div>
  <div class="col-md-4">
  <label  class="form-label input-label">
  <FontAwesomeIcon icon={faPeopleGroup} className="iconmail" />
&nbsp;&nbsp;Social Security Number</label>
    <input type="text" class="form-control input-view"  disabled/>
  </div>

  <div class="col-md-4">
    <label  class="form-label input-label">
    <FontAwesomeIcon icon={faIdCard} className="iconmail" />
 &nbsp;&nbsp; Driver License Number</label>
    <input type="text" class="form-control input-view"  value={props.data.name} disabled/>
  </div>
  <div class="col-md-4">
  <label  class="form-label input-label">
  <FontAwesomeIcon icon={faIdCard} className="iconmail" />
&nbsp;&nbsp;Vehicle Plate Number</label>
    <input type="text" class="form-control input-view" value={props.data.name}  disabled/>
  </div>
  <div class="col-md-4">
  <label  class="form-label input-label">
  <FontAwesomeIcon icon={faCar} className="iconmail" />
&nbsp;&nbsp;Vehicle Name</label>
    <input type="text" class="form-control input-view"  disabled/>
  </div>

  <div class="col-md-4">
    <label  class="form-label input-label">
    <FontAwesomeIcon icon={faPalette} className="iconmail" />
       &nbsp;&nbsp; Vehicle Color</label>
    <input type="text" class="form-control input-view"  value={props.data.name} disabled/>
  </div>
  <div class="col-md-4">
  <label  class="form-label input-label">
  <FontAwesomeIcon icon={faMobile} className="iconmail" />
&nbsp;&nbsp;Phone Number</label>
    <input type="text" class="form-control input-view" value={props.data.phone}  disabled/>
  </div>
  <div class="col-md-4">
  <label  class="form-label input-label">
  <FontAwesomeIcon icon={faCalendarAlt} className="iconmail" />
&nbsp;&nbsp;Vehicle Year</label>
    <input type="text" class="form-control input-view"  disabled/>
  </div>

  
  
</form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )


}





export default DriverModal;

