import React, { useState, useEffect } from "react";
import Head from "../components/head";
import "../components/tables/table.css";
import axios from "axios";
import DriverTable from "../components/tables/managementTable/drive/DriverTable";
import DriverModal from "../components/modal/management/driverModal";
import TripTable from "../components/tables/managementTable/trips/TripTable";
import TripModal from "../components/modal/management/tripModal";
import SharedTable from "../components/tables/managementTable/shared/sharedTable";
import PrivateTable from "../components/tables/managementTable/private/PrivateTable";

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

  const [alltrip, setTrip] = useState([]);
  const getTrip = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const driveTable = response.data;
        setTrip(driveTable);
      })
  };
  useEffect(() => getTrip(), []);


  const [allprivate, setPrivate] = useState([]);
  const getPrivate = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const driveTable = response.data;
        setPrivate(driveTable);
      })
  };
  useEffect(() => getPrivate(), []);

  const [driverModal, driverEvent] = useState([]);
  const [tripModal, TripEvent] = useState([]);
  const [privateModal, PrivateEvent] = useState([]);
  
  const driverHandler = driverData =>   driverEvent(driverData);
  const tripHandler = tripData =>   TripEvent(tripData);
  const privateHandler = privateData =>   PrivateEvent(privateData);
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
                <TripTable data={alltrip} click={tripHandler} className="trips"/>
                </div>
              <div className="tab-pane fade" id="Shared">
                <SharedTable data={alltrip} click={tripHandler} className="trips"/>
                </div>

              <div className="tab-pane fade" id="Private">
               <PrivateTable data={allprivate} click={privateHandler} className="trips"/>
                </div>
            </div>
          </div>

        </div>

      </div>
    <DriverModal data={driverModal}/>
    <TripModal data={tripModal}/>
    
    </main>
  );
}

export default Manangement;
