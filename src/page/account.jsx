import React, { useState, useEffect } from "react";
import Table from "../components/tables/accountTable/DataTable";
import "../components/tables/table.css";
import axios from "axios";

import Head from "../components/head";

function UserAccount() {
  const [data, setTable] = useState([]);
  const getTable = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const myTable = response.data;
        setTable(myTable);
      })
  };
  useEffect(() => getTable(), []);
  console.log(data);
  const clickhandler = name => console.log("delete", name);
  return (
    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-3 py-5">
      <Head name="User Account" />
      <div className="account-table card">
        <Table data={data} click={clickhandler} />
      </div>
    </main>
  );
}

export default UserAccount;
