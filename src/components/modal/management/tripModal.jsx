import "./../modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faPeopleGroup,
    faIdCard, faCar, faPalette,  
    faMobile, 
    faCalendarAlt} from '@fortawesome/free-solid-svg-icons'

function TripModal(props) {
  return (
    <div className="">
      <div className="modal fade " id="trip" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg drivermodal">
          <div className="modal-content">
            <div className="">
              <div className="modal-body">
                
              <form className="row g-4 nth">
              <div className="driverdetail">Trip Details</div>
  <div className="col-md-4">
    <label  className="form-label input-label">
    <FontAwesomeIcon icon={faUser} className="iconmail" /> &nbsp;&nbsp; Legal Last Name</label>
    <input type="text"  className="form-control input-view"  value={props.data.name} disabled/>
  </div>
  <div className="col-md-4">
  <label  className="form-label input-label">
  <FontAwesomeIcon icon={faUser} className="iconmail" />
&nbsp;&nbsp;Legal First Name</label>
    <input type="text" className="form-control input-view" value={props.data.name}  disabled/>
  </div>
  <div className="col-md-4">
  <label  className="form-label input-label">
  <FontAwesomeIcon icon={faPeopleGroup} className="iconmail" />
&nbsp;&nbsp;Social Security Number</label>
    <input type="text" className="form-control input-view"  disabled/>
  </div>

  <div className="col-md-4">
    <label  className="form-label input-label">
    <FontAwesomeIcon icon={faIdCard} className="iconmail" />
 &nbsp;&nbsp; Driver License Number</label>
    <input type="text" className="form-control input-view"  value={props.data.name} disabled/>
  </div>
  <div className="col-md-4">
  <label  className="form-label input-label">
  <FontAwesomeIcon icon={faIdCard} className="iconmail" />
&nbsp;&nbsp;Vehicle Plate Number</label>
    <input type="text" className="form-control input-view" value={props.data.name}  disabled/>
  </div>
  <div className="col-md-4">
  <label  className="form-label input-label">
  <FontAwesomeIcon icon={faCar} className="iconmail" />
&nbsp;&nbsp;Vehicle Name</label>
    <input type="text" className="form-control input-view"  disabled/>
  </div>

  <div className="col-md-4">
    <label  className="form-label input-label">
    <FontAwesomeIcon icon={faPalette} className="iconmail" />
       &nbsp;&nbsp; Vehicle Color</label>
    <input type="text" className="form-control input-view"  value={props.data.name} disabled/>
  </div>
  <div className="col-md-4">
  <label  className="form-label input-label">
  <FontAwesomeIcon icon={faMobile} className="iconmail" />
&nbsp;&nbsp;Phone Number</label>
    <input type="text" className="form-control input-view" value={props.data.phone}  disabled/>
  </div>
  <div className="col-md-4">
  <label  className="form-label input-label">
  <FontAwesomeIcon icon={faCalendarAlt} className="iconmail" />
&nbsp;&nbsp;Vehicle Year</label>
    <input type="text" className="form-control input-view"  disabled/>
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





export default TripModal;

