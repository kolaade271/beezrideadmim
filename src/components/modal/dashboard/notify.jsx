import "./../modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Notify() {
    return (
        <div className="">
            <div className="modal fade " id="notifyUser" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog superadmin-modal ">
                    <div className="modal-content">
                        <div className="btn-close" data-bs-dismiss="modal" >
                            <FontAwesomeIcon icon={faXmark} className="close-icon float-right " /></div>
                        <div className="popinfo">
                            <div className="modal-title">Notify Users</div>
                            <div className="modal-body">
                                <div className="modal-text">Send a push notification to all beebzrides users</div>
                                <form>
                                    <div className="form-group">
                                        <label>Enter Message</label>
                                        <textarea className="newnotify form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button className="btn  btnsubm shadow-none">Send Notification</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade " id="notifyDriver" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog superadmin-modal ">
                    <div className="modal-content">
                        <div className="btn-close" data-bs-dismiss="modal" >
                            <FontAwesomeIcon icon={faXmark} className="close-icon float-right " /></div>
                        <div className="popinfo">
                            <div className="modal-title">Notify Driver</div>
                            <div className="modal-body">
                                <div className="modal-text">Send a push notification to all beebzrides drivers</div>
                                <form>
                                    <div className="form-group">
                                        <label>Enter Message</label>
                                        <textarea className="newnotify form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button className="btn  btnsubm shadow-none">Send Notification</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Notify;

