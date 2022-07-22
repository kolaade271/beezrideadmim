import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import ReviewFilter from "./reviewFilter";

const ReviewTable = props => {
  const columns = [
    {
      name: "",
      cell: row=> (<img src="https://i.ibb.co/4VgSPDq/head.png" className="table-img" alt="" />),
      sortable: true,
      width: "50px",
      
    },
    {
      name: "Driver",
      selector: "name",
      sortable: true,
      width:"160px",
    },
    {
        name: "Passengers",
        cell:row=>("20"),
        sortable: false,
        width:"135px",
      },
    {
      name: "Origin",
     cell:row=>("London"),
      sortable: true,
      hide: "sm",
      width:"120px",
      
    },
    {
      name: "Destination",
      cell:row=>("Open Sea"),
      sortable: true,
      width:"120px",
    },
    {
      name: "Duration",
      cell: row=> ("3h20mins"),
      sortable: true,
      hide: "md",
      width: "130px",
    },
    {
      name: "Overall Rating",
      cell: row => ("5 (14)"),
      sortable: true,
      width:"150px",
    },
   
    {
      name: "ACTION",
      button: true,
      width:"80px",
      cell: row =>
      <button type="button" className="btn btn-primary  mgtoption" >
        See Reviews
      </button>
      
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
                <ReviewFilter
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
      />
      
    );
  }, [filterText, resetPaginationToggle]);


  return (
    <div>
      <div className="card-header reviewhead">{subHeaderComponent}</div>
    <DataTable
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      pagination
      paginationRowsPerPage={[5,  25, 30]} 
    />
    </div>
  );
};

export default ReviewTable;
