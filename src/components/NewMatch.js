// import React, { Component } from "react";
// import UserTableRow from "./UserTableRow";

// class NewMatch extends Component {
//   state = { users: null };

//   componentDidMount() {
//     fetch("https://randomuser.me/api/1.1/?results=15")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ users: data.results });
//       });
//   }

//   render() {
//     const { users } = this.state;
//     const isLoading = users === null;
//     return (
//       <main>
//         <div className="table-container bg-white">
//           <div className="uk-overflow-auto">
//             <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
//               <thead>
//                 <tr>
//                   <th className="uk-table-shrink" />
//                   <th className="uk-table-shrink" />
//                   <th className="uk-table-shrink">Avatar</th>
//                   <th>Fullname</th>
//                   <th>City</th>
//                   <th>Registered</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {isLoading ? (
//                   <tr>
//                     <td colSpan={6} className="uk-text-center">
//                       <em className="uk-text-muted">Loading...</em>
//                     </td>
//                   </tr>
//                 ) : (
//                   users.map((user, index) => (
//                     <UserTableRow key={index} index={index + 1} user={user} />
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     );
//   }
// }

// export default NewMatch;

import React, { Component } from "react";
import UserTableRow from "./UserTableRow";
import { Table } from "react-bootstrap";
import "../assets/css/Style.css";

class NewMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [
        {
          trip: {
            description:
              "Travelling with preeti and other friends. Going for Kheerganga trek, and a bike trip near kasol",
            groupSize: "5",
            tripBudget: "10000",
            tripLength: "6",
            tripDate: "2021/05/21",
            destination: "Kasol",
            landscape: "Hilly/Mountain",
            tripId: 1,
            user: {
              firstName: "Kabir",
              lastName: "Singh",
              age: "28",
              gender: "male",
            },
          },
        },
        {
          trip: {
            description:
              "Parasailing, Scuba diving & wind surfing. Staying in hostels",
            groupSize: "3",
            tripBudget: "8000",
            tripLength: "4",
            tripDate: "2021/05/21",
            destination: "Goa",
            landscape: "Beach",
            tripId: 2,
            user: {
              firstName: "Subba",
              lastName: "Reddy",
              age: "23",
              gender: "male",
            },
          },
        },
      ],
    };
  }

  render() {
    const { trips } = this.state;

    const isLoading = trips === null;
    return (
      <div className="table-container bg-light p-3">
        <div className="uk-overflow-auto">
          <Table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
            {/* <Table
            bordered
            hover
            striped
            variant="dark"
            className={"border border-dark bg-dark text-white"}
          > */}
            <thead className={"border border-dark bg-dark text-white"}>
              <tr>
                <th className="uk-table-shrink" scope="col">
                  Destination
                </th>
                <th className="uk-table-shrink">Date</th>
                <th className="uk-table-shrink">Trip Host</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="uk-text-center text-white">
                    <em className="uk-text-muted text-white">Loading...</em>
                  </td>
                </tr>
              ) : (
                trips.map((mtrip) => (
                  <UserTableRow key={mtrip.trip.tripId} trip={mtrip.trip} />
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default NewMatch;
