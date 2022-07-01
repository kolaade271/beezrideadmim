
// import React, { useMemo } from "react";

// import DataTable from "react-data-table-component";
// import FilterComponent from "./FilterComponent";

// const Table = props => {
//   const columns = [
//     {
//       name: "Name",
//       selector: "name",
//       sortable: true,
//       grow: 2
//     },
//     {
//       name: "Email",
//       selector: "email",
//       sortable: true,
//       hide: "sm"
//     },
//     {
//       name: "Website",
//       selector: "website",
//       sortable: true
//     },
//     {
//       name: "Company",
//       selector: "company.name",
//       sortable: true,
//       hide: "md"
//     },
//     {
//       name: "City",
//       selector: "address.city",
//       sortable: true,
//       hide: "md"
//     },
//     {
//       name: "Buttons",
//       button: true,
//       cell: row =>
//         row.showButtons ? (
//           <>
//             <button
//               onClick={() => props.click(row.name)}
//               style={{ marginRight: "5px" }}
//             >
//               Edit
//             </button>
//             <button onClick={() => props.click(row.name)}>Delete</button>
//           </>
//         ) : null
//     }
//   ];

//   const [filterText, setFilterText] = React.useState("");
//   const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
//     false
//   );
//   // const filteredItems = data.filter(
//   //   item => item.name && item.name.includes(filterText)
//   // );
//   const filteredItems = props.data.filter(
//     item =>
//       JSON.stringify(item)
//         .toLowerCase()
//         .indexOf(filterText.toLowerCase()) !== -1
//   );

//   const subHeaderComponent = useMemo(() => {
//     const handleClear = () => {
//       if (filterText) {
//         setResetPaginationToggle(!resetPaginationToggle);
//         setFilterText("");
//       }
//     };

//     return (
//       <FilterComponent
//         onFilter={e => setFilterText(e.target.value)}
//         onClear={handleClear}
//         filterText={filterText}
//       />
//     );
//   }, [filterText, resetPaginationToggle]);

//   return (
//     <DataTable
//       title="Contact List"
//       columns={columns}
//       data={filteredItems}
//       defaultSortField="name"
//       striped
//       pagination
//       subHeader
//       subHeaderComponent={subHeaderComponent}
//     />
//   );
// };

// export default Table;








import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					User_Name: { item.username },
					Full_Name: { item.name },
					User_Email: { item.email }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;
