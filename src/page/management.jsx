import React, { useState, useEffect } from "react";
import Head from "../components/head";
import "../components/tables/table.css";
import axios from "axios";
import DriverTable from "../components/tables/managementTable/DriverTable";
import DriverModal from "../components/modal/management/driverModal";

function Manangement() {
  const [alldriver, setTable] = useState([]);
  const getTable = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const driveTable = response.data;
        setTable(driveTable);
      })
  };
  useEffect(() => getTable(), []);
  const [driverModal, setEvent] = useState([]);
  
  const driverHandler = modalData =>   setEvent(modalData);
  return (
    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-3 py-5">
      <Head name="Management" />
      <div className="card mgt-card">
        <div className="card-header mgt-header">

          <ul className="nav nav-tabs" id="myTab">
            <li className="nav-item tab-item">
              <a href="#Driver" className="nav-link active" data-bs-toggle="tab">Driver</a>
            </li>
            <li className="nav-item tab-item">
              <a href="#Trip" className="nav-link" data-bs-toggle="tab">Trip</a>
            </li>
            <li className="nav-item tab-item">
              <a href="#Shared" className="nav-link" data-bs-toggle="tab">Shared</a>
            </li>
            <li className="nav-item tab-item">
              <a href="#Private" className="nav-link" data-bs-toggle="tab">Private</a>
            </li>
          </ul>
        </div>
        <div className="tab-body">
          <div className="m-3">

            <div className="tab-content">
              <div className="tab-pane fade show active" id="Driver">
                <DriverTable data={alldriver} click={driverHandler} />
              </div>
              <div className="tab-pane fade" id="Trip">
                <h4 className="mt-2">Trip tab content</h4>
                <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque. Vivamus nibh urna, ornare id gravida ut, mollis a magna. Aliquam porttitor condimentum nisi, eu viverra ipsum porta ut. Nam hendrerit bibendum turpis, sed molestie mi fermentum id. Aenean volutpat velit sem. Sed consequat ante in rutrum convallis. Nunc facilisis leo at faucibus adipiscing.</p>
              </div>
              <div className="tab-pane fade" id="Shared">
                <h4 className="mt-2">Shared tab content</h4>
                <p>Donec vel placerat quam, ut euismod risus. Sed a mi suscipit, elementum sem a, hendrerit velit. Donec at erat magna. Sed dignissim orci nec eleifend egestas. Donec eget mi consequat massa vestibulum laoreet. Mauris et ultrices nulla, malesuada volutpat ante. Fusce ut orci lorem. Donec molestie libero in tempus imperdiet. Cum sociis natoque penatibus et magnis.</p>
              </div>

              <div className="tab-pane fade" id="Private">
                <h4 className="mt-2">Private tab content</h4>
                <p>Donec vel placerat quam, ut euismod risus. Sed a mi suscipit, elementum sem a, hendrerit velit. Donec at erat magna. Sed dignissim orci nec eleifend egestas. Donec eget mi consequat massa vestibulum laoreet. Mauris et ultrices nulla, malesuada volutpat ante. Fusce ut orci lorem. Donec molestie libero in tempus imperdiet. Cum sociis natoque penatibus et magnis.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    <DriverModal data={driverModal}/>
    </main>
  );
}

export default Manangement;
