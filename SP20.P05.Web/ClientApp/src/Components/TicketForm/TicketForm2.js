import React, { Component } from "react";
import axios from "axios";

// Material Ui
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// React-Bootstrap
import { Col, Form, Jumbotron } from "react-bootstrap";

// CSS
import "./TicketForm.css";
import LoginForm from "../LoginForm/LoginForm";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class TicketForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
      userId: null,
      farmFieldId: null,
      fields: ["Blueberry", "Blackberry", "Strawberry"],
      selectedField: "",
      selectedBucket: "",
      selectedBucketSize: "",
      selectedBucketPrice: "",
      bucketPriceSM: "",
      bucketPriceMD: "",
      bucketPriceLG: "",
      numTickets: "",
      smBucket: "0",
      medBucket: "0",
      lgBucket: "0",
      bucketDisable: true,
      amountDisable: true,
      buttonDisable: true,
      BucketTotalPrice: "",
      cartPrice1: "",
      cartPrice2: "",
      cartPrice3: "",
        totalCart: "",
        ticket: {


        }
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.selectedField !== prevState.selectedField) {
      this.handleUser();
      this.handleFieldID();
      this.handleSetTicket();
      this.getTicketTotal();
      this.checkField();
    }
      if (this.state.selectedBucket !== prevState.selectedBucket) {
      this.handleFieldID();
      this.handleSetTicket();
      this.getTicketTotal();
      this.checkBucket();
    }
      if (this.state.ticketTotal !== prevState.ticketTotal) {
      this.handleFieldID();
      this.handleSetTicket();
      this.getTicketTotal();
      this.checkTotal();
    }
    //Todo , make this work.
    if (this.state.smBucket !== prevState.smBucket) {
        this.handleSetTicket();
    }
    if (this.state.medBucket !== prevState.medBucket) {
        this.handleSetTicket();
    }
    if (this.state.lgBucket !== prevState.lgBucket) {
        this.handleSetTicket();
    }
  }

  getTotalCart = () => {
    let total = this.state.cartPrice1 + this.state.cartPrice2 + this.state.cartPrice3;
    this.setState({ totalCart: total });
  };

  handleFieldChange = (e) => {
    let val = e.target.value;
    if (val === "Choose Farm Field...") {
      this.setState({ selectedField: "" });
      sessionStorage.setItem("selectedField", "");
    } else {
      this.setState({ selectedField: val });
      sessionStorage.setItem("selectedField", val);
    }
    this.setBucketPriceSM(val);
    this.setBucketPriceMD(val);
    this.setBucketPriceLG(val);
    };

    handleUser = () => {
        let s = localStorage.getItem("userId");
        this.setState({ userId: s });


    };
    handleFieldID = (selectedField) => {
        switch (this.state.selectedField) {
            case "Blueberry":
                this.setState({ farmFieldId: 1 });
                return;
            case "Blackberry":
                this.setState({ farmFieldId: 2 });
                return;
            case "Strawberry":
                this.setState({ farmFieldId: 3 });
                return;

        }
    };




  setBucketPriceSM = (selectedField) => {
    switch (selectedField) {
      case "Blueberry":
        this.setState({ bucketPriceSM: "11" });
        sessionStorage.setItem("bucketPriceSM", "11");
        return;
      case "Strawberry":
        this.setState({ bucketPriceSM: "10" });
        sessionStorage.setItem("bucketPriceSM", "10");
        return;
      case "Blackberry":
        this.setState({ bucketPriceSM: "13" });
        sessionStorage.setItem("bucketPriceSM", "13");
        return;
      default:
        this.setState({ bucketPriceSM: "11" });
        sessionStorage.setItem("bucketPriceSM", "");
        return;
    }
  };
  checkField = () => {
    if (
      sessionStorage.getItem("selectedField") !== "" ||
      sessionStorage.getItem("selectedField") !== null
    ) {
      this.setState({
        bucketDisable: false,
      });
    }
  };
  checkBucket = () => {
    if (
      sessionStorage.getItem("selectedBucket") !== "" ||
      sessionStorage.getItem("selectedBucket") !== null
    ) {
      this.setState({ amountDisable: false });
    }
  };
  checkTotal = () => {
    if (this.state.ticketTotal === 0) {
      this.setState({ buttonDisable: true });
    } else if (this.state.ticketTotal === "") {
      this.setState({ buttonDisable: true });
    } else if (this.state.ticketTotal === "0") {
      this.setState({ buttonDisable: true });
    } else if (this.state.ticketTotal === null) {
      this.setState({ buttonDisable: true });
    } else this.setState({ buttonDisable: false });
  };
  setBucketPriceMD = (selectedField) => {
    switch (selectedField) {
      case "Blueberry":
        this.setState({ bucketPriceMD: "16" });
        sessionStorage.setItem("bucketPriceMD", "16");
        return;
      case "Strawberry":
        this.setState({ bucketPriceMD: "15" });
        sessionStorage.setItem("bucketPriceMD", "15");
        return;
      case "Blackberry":
        this.setState({ bucketPriceMD: "17" });
        sessionStorage.setItem("bucketPriceMD", "17");
        return;
      default:
        this.setState({ bucketPriceMD: "" });
        sessionStorage.setItem("bucketPriceMD", "");
        return;
    }
  };
  setBucketPriceLG = (selectedField) => {
    switch (selectedField) {
      case "Blueberry":
        this.setState({ bucketPriceLG: "21" });
        sessionStorage.setItem("bucketPriceLG", "21");
        return;
      case "Strawberry":
        this.setState({ bucketPriceLG: "20" });
        sessionStorage.setItem("bucketPriceLG", "20");
        return;
      case "Blackberry":
        this.setState({ bucketPriceLG: "24" });
        sessionStorage.setItem("bucketPriceLG", "24");
        return;
      default:
        this.setState({ bucketPriceLG: "" });
        sessionStorage.setItem("bucketPriceLG", "");
        return;
    }
  };
  getTicketTotal = () => {

    let smallBucketPrice = this.state.bucketPriceSM
    let mediumBucketPrice = this.state.bucketPriceMD
    let largeBucketPrice = this.state.bucketPriceLG

    let smallBucketQTY = sessionStorage.getItem("bucketQtySM")
    let mediumBucketQTY = sessionStorage.getItem("bucketQtyMD")
    let largeBucketQTY = sessionStorage.getItem("bucketQtyLG")

    let ans = (smallBucketPrice * smallBucketQTY) + (mediumBucketPrice * mediumBucketQTY) + (largeBucketPrice * largeBucketQTY)
    sessionStorage.setItem("ticketTotal", ans);


    this.setState({
      ticketTotal: sessionStorage.getItem("ticketTotal")
    });
  };

  handleBucketQtySm = (event) => {
    this.setState({ smBucket: event.target.value });
    sessionStorage.setItem("bucketQtySM", event.target.value);
    this.getTicketTotal()

  };
  handleBucketQtyMed = (event) => {
    this.setState({ medBucket: event.target.value });
    sessionStorage.setItem("bucketQtyMD", event.target.value);
    this.getTicketTotal()
  };
  handleBucketQtyLg = (event) => {
    this.setState({ lgBucket: event.target.value });
    sessionStorage.setItem("bucketQtyLG", event.target.value);
    this.getTicketTotal()
    };


    
// Hardcoded for testing


    handleSetTicket = () => {
        
        this.setState({
            ticket: {
                farmFieldId: this.state.farmFieldId,
                TicketTimeSlot: "9999-03-23T22:24:13.306Z",
                SmallBucketQty: JSON.parse(sessionStorage.getItem("bucketQtySM")),
                MediumBucketQty: JSON.parse(sessionStorage.getItem("bucketQtyMD")),
                LargeBucketQty: JSON.parse(sessionStorage.getItem("bucketQtyLG")),
                UserId: JSON.parse(this.state.userId)
            }
        })

    }







//ticket = {
//    farmFieldId: 1,
//    TicketTimeSlot: "9999-03-23T22:24:13.306Z",
//    SmallBucketQty: JSON.parse(sessionStorage.getItem("bucketQtySM")),
//    MediumBucketQty: JSON.parse(sessionStorage.getItem("bucketQtyMD")),
//    LargeBucketQty: JSON.parse(sessionStorage.getItem("bucketQtyLG")),
//    UserId: 2,
//};

// 

   ticketUrl = "/api/farm-field-tickets"




    issueTicket = async () => {
        console.log(this.state.farmFieldId);
        console.log("Ticket Object: ",this.state.ticket);
        //console.log(this.state.ticket);

    for (var i = 0; i < 1; i++) {
        await axios
            .post(this.ticketUrl, this.state.ticket, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
     }
     this.props.changeForm();
}

  render() {
    return (
      <Jumbotron className={"jumbo_clr"}>
        <h1>Purchase Tickets</h1>
        {localStorage.getItem("user") ? (
          <Form>
            <Form.Group as={Col} controlId={"FarmField"}>
              <Form.Label>Farm Field</Form.Label>
              <Form.Control
                as={"select"}
                value={this.state.selectedField}
                onChange={this.handleFieldChange}
              >
                <option>Choose Farm Field...</option>
                {this.state.fields.map((field) => (
                  <option key={field}>{field}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <div className={"divider div-transparent"} />
            <Form.Group as={Col} controlId={"Buckets"}>
              <Form.Label>Bucket</Form.Label>
              <div>
                {this.state.selectedField ? (
                  <div>
                    <strong>
                      Bucket Prices for {this.state.selectedField} Field:
                    </strong>
                    <div>Small Bucket Price: {this.state.bucketPriceSM}</div>
                    <div>
                      <Select
                        style={{backgroundColor: "white"}}
                        onChange={this.handleBucketQtySm}
                                            value={this.state.smBucket}
                                            
                      >
                        <MenuItem value={0}>Zero</MenuItem>
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>
                        <MenuItem value={6}>Six</MenuItem>
                        <MenuItem value={7}>Seven</MenuItem>
                        <MenuItem value={8}>Eight</MenuItem>
                        <MenuItem value={9}>Nine</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                      </Select>
                    </div>
                    <div>Medium Bucket Price: {this.state.bucketPriceMD}</div>
                    <div>
                      <Select
                                            style={{ backgroundColor: "white" }}
                                            onChange={this.handleBucketQtyMed}
                                            value={this.state.medBucket}
                                            
                      >
                        <MenuItem value={0}>Zero</MenuItem>
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>
                        <MenuItem value={6}>Six</MenuItem>
                        <MenuItem value={7}>Seven</MenuItem>
                        <MenuItem value={8}>Eight</MenuItem>
                        <MenuItem value={9}>Nine</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                      </Select>
                    </div>
                    <div className={"padding"}>
                      Large Bucket Price: {this.state.bucketPriceLG}
                    </div>
                    <div>
                      <Select
                        style={{backgroundColor: "white"}}
                        onChange={this.handleBucketQtyLg}
                                            value={this.state.lgBucket}
                                            
                      >
                        <MenuItem value={0}>Zero</MenuItem>
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>
                        <MenuItem value={6}>Six</MenuItem>
                        <MenuItem value={7}>Seven</MenuItem>
                        <MenuItem value={8}>Eight</MenuItem>
                        <MenuItem value={9}>Nine</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                      </Select>
                    </div>
                  </div>
                ) : null}
              </div>
            </Form.Group>
            {this.state.selectedField && this.state.selectedBucket ? (
              <div>
                {this.state.selectedField} Field Ticket with{" "}
                {this.state.selectedBucket}, ${this.state.selectedBucketPrice}{" "}
                bucket
              </div>
            ) : null}
            <div className={"divider div-transparent"} />

            <div>Total: ${this.state.ticketTotal}</div>
            <div>
              <Button
                variant={"contained"}
                onClick={this.issueTicket}
                disabled={this.state.buttonDisable}
              >
                Buy Tickets
              </Button>
            </div>
          </Form>
        ) : (
          <div>
            Please Log in first
            <div className={"padding-top"}>
              <Link to={{ pathname: "/Login", from: "/tickets" }}>
                <Button id={"TicketLogIn"}>Log in</Button>
              </Link>
            </div>
          </div>
        )}
      </Jumbotron>
    );
  }
}
export default TicketForm;
