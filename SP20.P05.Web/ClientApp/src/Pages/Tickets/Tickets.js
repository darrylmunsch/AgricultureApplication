import React, { Component } from "react";

import TicketForm2 from "../../Components/TicketForm/TicketForm2";
import BuyTicketForm from "../../Components/Stripe/BuyTicketForm";

export class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTicketForm: true,
      ticketTotal: "",
      fields: ["Blueberry", "Blackberry", "Strawberry"],
      selectedField: "",
      selectedBucket: "",
      selectedBucketSize: "",
      selectedBucketPrice: "",
      bucketPriceSM: "",
      bucketPriceMD: "",
      bucketPriceLG: "",
      numTickets: "",
      data: []
    };
    this.setTicketTotal = this.setTicketTotal.bind(this);
    this.changeForm = this.changeForm.bind(this);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.numTickets !== prevState.numTickets) {
      this.getTicketTotal();
    }
  }
  componentDidMount() {
    sessionStorage.clear();
  }

  setTicketTotal() {
    this.setState({
      ticketTotal: sessionStorage.getItem("ticketTotal")
    });
  }
  changeForm(e) {
    e.preventDefault();
    this.setState({
      showTicketForm: !this.state.showTicketForm
    });
  }

  render() {
    return (
      <div className={"background-img"}>
        <div id={"divElement"}>
          {this.state.showTicketForm === true ? (
            <TicketForm2 {...this.state} changeForm={this.changeForm} />
          ) : (
            <BuyTicketForm
              {...this.state}
              ticketTotal={sessionStorage.getItem("ticketTotal")}
              changeForm={this.changeForm}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Tickets;
