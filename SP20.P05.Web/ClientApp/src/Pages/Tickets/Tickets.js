import React, { Component } from "react";
import TicketForm2 from "../../Components/TicketForm/TicketForm2";

export class Tickets extends Component {
  render() {
    return (
      <div className={"background-img"}>
        <div id={"divElement"}>
          <TicketForm2 />
        </div>
      </div>
    );
  }
}

export default Tickets;
