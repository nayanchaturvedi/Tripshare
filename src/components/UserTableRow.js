// import React from "react";
// import { slideDown, slideUp } from "./Anime";
// import "../assets/css/Style.css";

// function formatDate(str) {
//   return str.substr(0, 10);
// }

// function capitalize(str) {
//   return str
//     .split(" ")
//     .map((s) => {
//       return s.charAt(0).toUpperCase() + s.substr(1);
//     })
//     .join(" ");
// }

// class UserTableRow extends React.Component {
//   state = { expanded: false };

//   toggleExpander = (e) => {
//     if (e.target.type === "checkbox") return;

//     if (!this.state.expanded) {
//       this.setState({ expanded: true }, () => {
//         if (this.refs.expanderBody) {
//           slideDown(this.refs.expanderBody);
//         }
//       });
//     } else {
//       slideUp(this.refs.expanderBody, {
//         onComplete: () => {
//           this.setState({ expanded: false });
//         },
//       });
//     }
//   };

//   render() {
//     const { user } = this.props;
//     return [
//       <tr key="main" onClick={this.toggleExpander}>
//         <td>
//           <input className="uk-checkbox" type="checkbox" />
//         </td>
//         <td className="uk-text-nowrap">{this.props.index}.</td>
//         <td>
//           <img
//             className="uk-preserve-width uk-border-circle"
//             src={user.picture.thumbnail}
//             width={48}
//             alt="avatar"
//           />
//         </td>
//         <td>
//           {capitalize(user.name.first + " " + user.name.last)}
//           <br />
//           <small>{user.email}</small>
//         </td>
//         <td>
//           {capitalize(user.location.city)} ({user.nat})
//         </td>
//         <td>{formatDate(user.registered)}</td>
//       </tr>,
//       this.state.expanded && (
//         <tr className="expandable" key="tr-expander">
//           <td className="uk-background-muted" colSpan={6}>
//             <div ref="expanderBody" className="inner uk-grid">
//               <div className="uk-width-1-4 uk-text-center">
//                 <img
//                   className="uk-preserve-width uk-border-circle"
//                   src={user.picture.large}
//                   alt="avatar"
//                 />
//               </div>
//               <div className="uk-width-3-4">
//                 <h3>{capitalize(user.name.first + " " + user.name.last)}</h3>
//                 <p>
//                   Address:
//                   <br />
//                   <i>
//                     {capitalize(user.location.street)}
//                     <br />
//                     {user.location.postcode} {capitalize(user.location.city)}
//                     <br />
//                     {user.nat}
//                   </i>
//                 </p>
//                 <p>
//                   E-mail: {user.email}
//                   <br />
//                   Phone: {user.phone}
//                 </p>
//                 <p>Date of birth: {formatDate(user.dob)}</p>
//               </div>
//             </div>
//           </td>
//         </tr>
//       ),
//     ];
//   }
// }

// export default UserTableRow;

import React from "react";
import { slideDown, slideUp } from "./Anime";
import "../assets/css/Style.css";
import { Container, Col, Row } from "react-bootstrap";

function formatDate(str) {
  return str.substr(0, 10);
}

function capitalize(str) {
  return str
    .split(" ")
    .map((s) => {
      return s.charAt(0).toUpperCase() + s.substr(1);
    })
    .join(" ");
}

class UserTableRow extends React.Component {
  state = { expanded: false };

  toggleExpander = (e) => {
    if (e.target.type === "checkbox") return;

    if (!this.state.expanded) {
      this.setState({ expanded: true }, () => {
        if (this.refs.expanderBody) {
          slideDown(this.refs.expanderBody);
        }
      });
    } else {
      slideUp(this.refs.expanderBody, {
        onComplete: () => {
          this.setState({ expanded: false });
        },
      });
    }
  };

  render() {
    const { trip } = this.props;
    return [
      <tr key="main" onClick={this.toggleExpander}>
        {/* <td className="uk-text-nowrap text-white">{this.props.index}.</td> */}
        {/* <td>
          <img
            className="uk-preserve-width uk-border-circle text-white"
            src={user.picture.thumbnail}
            width={48}
            alt="avatar"
          />
        </td> */}
        <td>
          {trip.destination}
          <br />
          <small>{trip.landscape}</small>
        </td>
        <td>{trip.tripDate}</td>
        <td>
          {trip.user.firstName} {trip.user.lastName}
        </td>
      </tr>,
      this.state.expanded && (
        <tr className="expandable bg-dark" key="tr-expander">
          <td className="uk-background-muted text-white" colSpan={6}>
            <div ref="expanderBody" className="inner uk-grid text-white">
              <div className="uk-width-1-4 uk-text-center text-white">
                {/* <img
                  className="uk-preserve-width uk-border-circle text-white"
                  src={user.picture.large}
                  alt="avatar"
                /> */}
              </div>
              <Container>
                <Row>
                  <Col>
                    <h3>Trip Details:</h3>
                    <br></br>
                    <div className="text-white block-example border border-info w-50 p-2">
                      <p>
                        Description:
                        <br />
                        <i> {trip.description}</i>
                      </p>
                    </div>
                    <br></br>
                    <p>Travel Budget: {trip.tripBudget}</p>
                    <p>Trip Length: {trip.tripLength}</p>
                    <p>Group Size: {trip.groupSize}</p>
                  </Col>
                  <Col>
                    <h3>Host Details:</h3>
                    <br></br>
                    <p>
                      Host name:{" "}
                      <i>
                        {trip.user.firstName} {trip.user.lastName}
                      </i>
                    </p>
                    <p>
                      Host Age: <i>{trip.user.age}</i>
                    </p>
                    <p>
                      Host gender:<i> {trip.user.gender}</i>
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </td>
        </tr>
      ),
    ];
  }
}

export default UserTableRow;
