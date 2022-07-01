import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import AccountFilter from "./accountFilter.jsx";

const Table = props => {
  const columns = [
    {
      name: "",
      cell: row=> (<img src="https://i.ibb.co/4VgSPDq/head.png" alt="" />),
      sortable: true,
      grow: -1
    },
    {
      name: "NAME",
      selector: "name",
      sortable: true,
      grow: 2
    },
    {
      name: "EMAIL",
      selector: "email",
      sortable: true,
      hide: "sm"
    },
    {
      name: "PHONE",
      selector: "phone",
      sortable: true
    },
    {
      name: "REG DATE",
      cell: row=> (<div><div className="date">June 12, 2022</div><br></br><div className="time">06:30 AM</div></div>),
      sortable: true,
      hide: "md"
    },
    {
      name: "STATUS",
      cell: row =>
      row.id===4 ? (
       <div className="reject">Rejected</div>
      ) : row.id ===10 ||row.id === 8?(<div className="approve">Approved</div>) :(<div className="pending">Pending</div>),
      sortable: true,
      hide: "sm"
    },
   
    {
      name: "ACTION",
      button: true,
      cell: row =>
      <div className="dropdown">
      <button type="button" className="btn btn-primary dropdown-toggle accountoption" data-bs-toggle="dropdown">
        ACTION
      </button>
      <ul className="dropdown-menu">
      <li><a className="dropdown-item approve-button" href="#/">APPROVE</a></li>
        <li><a className="dropdown-item reject-button" href="#/">REJECT</a></li>
        <li><a className="dropdown-item block-button" href="#/">BLOCK</a></li>
      </ul>
      
    </div>
    // <button className="btn btn-success"  onClick={() => props.click(row.name)}>Action</button>
          
    }
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  // const filteredItems =props.data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <AccountFilter
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
      />
    );
  }, [filterText, resetPaginationToggle]);


  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Table;
