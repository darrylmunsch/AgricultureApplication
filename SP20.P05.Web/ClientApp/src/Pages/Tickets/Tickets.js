import React, { Component } from "react";
import TicketForm from "../../Components/TicketForm/TicketForm";

export class Tickets extends Component {
  render() {
    return (
      <div className={"background-img"}>
        <div id={"divElement"}>
          <TicketForm />
        </div>
      </div>
    );
  }
}

export default Tickets;
