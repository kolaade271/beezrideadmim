import React, { useState, useEffect } from "react";
import Head from "../components/head";
import UserTable from "../components/tables/report/paymentReport/userTable";
import Footer from "../components/footer";
import axios from "axios";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function PaymentReport() {
    const [allreview, setTable] = useState([]);
    const getTable = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const reviewtable = response.data;
                setTable(reviewtable);
            })
    };
    useEffect(() => getTable(), []);

  return (
    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-3 py-5">
      <Head name="Reports" />
      <div className="">
      <div className="arrowback"> <FontAwesomeIcon icon={faArrowLeftLong} />  Back to Reports</div>
        <div className="card report-card">
           
                <UserTable data={allreview} />
                {/* <div className="col-md-8"> <PaymentTable data={allreview} click={"x"} /></div> */}
       
    
         
        </div>
      </div>




      <Footer />
    </main>
  );
}

export default PaymentReport;
