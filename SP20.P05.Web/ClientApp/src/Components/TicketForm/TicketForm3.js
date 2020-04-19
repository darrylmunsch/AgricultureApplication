// import React, { Component } from "react";
// import axios from "axios";
// import { BucketPrices } from "../TicketForm/constants";
// // Material Ui
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
// // React-Bootstrap
// import { Col, Form, Jumbotron } from "react-bootstrap";

// // CSS
// import "./TicketForm.css";
// import LoginForm from "../LoginForm/LoginForm";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";

// class TicketForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedField: "Choose Field...",
//       step: 1,
//       smBucketPrice: "",
//       mdBucketPrice: "",
//       lgBucketPrice: "",
//       numSmBucket: 0,
//       numMdBucket: 0,
//       numLgBucket: 0,
//       errorSm: "",
//       errorMd: "",
//       errorLg: "",
//       ticketTotal: "",
//       finalTicket: {
//         field: "",
//         totalCost: "",
//         smBuckets: 0,
//         mdBuckets: 0,
//         lgBuckets: 0,
//       },
//     };
//   }
//   //   fields: ["Blueberry", "Blackberry", "Strawberry"],
//   //   selectedField: "",
//   //   selectedBucket: "",
//   //   selectedBucketSize: "",
//   //   selectedBucketPrice: "",
//   //   bucketPriceSM: "",
//   //   bucketPriceMD: "",
//   //   bucketPriceLG: "",
//   //   numTickets: "",
//   //   smBucket: "0",
//   //   medBucket: "0",
//   //   lgBucket: "0",
//   //   bucketDisable: true,
//   //   amountDisable: true,
//   //   buttonDisable: true,
//   //   BucketTotalPrice: "",
//   //   cartPrice: "",

//   // ToDo : add to component did update handler for bucket changing size
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     if (prevState.selectedField !== this.state.selectedField) {
//       this.setBucketPrice(this.state.selectedField);
//     }
//     if (prevState.numSmBucket !== this.state.numSmBucket) {
//       this.getTotal();
//     } else if (prevState.numMdBucket !== this.state.numMdBucket) {
//       this.getTotal();
//     } else if (prevState.numLgBucket !== this.state.numLgBucket) {
//       this.getTotal();
//     }
//   }
//   getFarmFieldId = async (data) => {
//     await axios
//       .get(this.farmFieldActiveUrl)
//       .then((response) => {
//         if (response.data.name === this.state.selectedField) {
//           console.log(response.data.id);
//         }
//       })
//       .catch((error) => console.log(error.response));
//   };
//   handleFieldChange = (e) => {
//     let val = e.target.value;
//     if (val === "Choose Farm Field...") {
//       this.setState({ selectedField: "" });
//       sessionStorage.setItem("selectedField", "");
//     } else {
//       this.setState({ selectedField: val });
//       sessionStorage.setItem("selectedField", val);
//     }
//     this.setBucketPriceSM(val);
//     this.setBucketPriceMD(val);
//     this.setBucketPriceLG(val);
//   };

//   GetBucketTotalPrice = () => {
//     let priceSM = this.state.smBucket;
//     console.log("**PriceSM:", priceSM);
//     let priceMED = this.state.medBucket;
//     console.log("**PriceSM:", priceMED);
//     let priceLG = this.state.lgBucket;
//     console.log("**PriceSM:", priceLG);
//     let TotalPrice = priceSM + priceMED + priceLG;
//     console.log("**Price Logging**: ", TotalPrice);
//     this.setState({ cartPrice: TotalPrice });
//     console.log("Cart price: ", this.state.cartPrice);
//   };
//   setBucketPrice = (field) => {
//     switch (field) {
//       case "Blueberry":
//         this.setState({
//           smBucketPrice: BucketPrices.BlueberryField.smBucketPrice,
//           mdBucketPrice: BucketPrices.BlueberryField.mdBucketPrice,
//           lgBucketPrice: BucketPrices.BlueberryField.lgBucketPrice,
//         });
//         return;
//       case "Blackberry":
//         this.setState({
//           smBucketPrice: BucketPrices.BlackberryField.smBucketPrice,
//           mdBucketPrice: BucketPrices.BlackberryField.mdBucketPrice,
//           lgBucketPrice: BucketPrices.BlackberryField.lgBucketPrice,
//         });
//         return;
//       case "Strawberry":
//         this.setState({
//           smBucketPrice: BucketPrices.StrawberryField.smBucketPrice,
//           mdBucketPrice: BucketPrices.StrawberryField.mdBucketPrice,
//           lgBucketPrice: BucketPrices.StrawberryField.lgBucketPrice,
//         });
//         return;
//     }
//   };
//   setValue = (item) => {
//     this.setState({
//       selectedField: item,
//     });
//   };
//   increaseStep = () => {
//     if (this.state.selectedField !== "Choose Field...") {
//       this.setState({
//         step: 2,
//       });
//     }
//   };
//   decreaseStep = () => {
//     this.setState({
//       step: 1,
//     });
//   };
//   checkField = () => {
//     if (
//       sessionStorage.getItem("selectedField") !== "" ||
//       sessionStorage.getItem("selectedField") !== null
//     ) {
//       this.setState({
//         bucketDisable: false,
//       });
//     }
//   };
//   checkBucket = () => {
//     if (
//       sessionStorage.getItem("selectedBucket") !== "" ||
//       sessionStorage.getItem("selectedBucket") !== null
//     ) {
//       this.setState({ amountDisable: false });
//     }
//   };
//   setNumSmBuckets = (value) => {
//     const isnum = /^\d+$/.test(value);
//     if (!isnum) {
//       this.setState({
//         errorSm: "invalid",
//       });
//     } else {
//       this.setState({
//         errorSm: "",
//         numSmBucket: value,
//       });
//     }
//   };
//   setNumMdBuckets = (value) => {
//     const isnum = /^\d+$/.test(value);
//     if (!isnum) {
//       this.setState({
//         errorMd: "invalid",
//       });
//     } else {
//       this.setState({
//         errorMd: "",
//         numMdBucket: value,
//       });
//     }
//   };
//   setNumLgBuckets = (value) => {
//     const isnum = /^\d+$/.test(value);
//     if (!isnum) {
//       this.setState({
//         errorLg: "invalid",
//       });
//     } else {
//       this.setState({
//         errorLg: "",
//         numLgBucket: value,
//       });
//     }
//   };
//   getTotal = () => {
//     const totalSm = this.state.smBucketPrice * this.state.numSmBucket;
//     const totalMd = this.state.mdBucketPrice * this.state.numMdBucket;
//     const totalLg = this.state.lgBucketPrice * this.state.numLgBucket;
//     const total = totalSm + totalMd + totalLg;
//     this.setState({
//       ticketTotal: total,
//     });
//   };
//   checkTotal = () => {
//     if (this.state.ticketTotal === 0) {
//       this.setState({ buttonDisable: true });
//     } else if (this.state.ticketTotal === "") {
//       this.setState({ buttonDisable: true });
//     } else if (this.state.ticketTotal === "0") {
//       this.setState({ buttonDisable: true });
//     } else if (this.state.ticketTotal === null) {
//       this.setState({ buttonDisable: true });
//     } else this.setState({ buttonDisable: false });
//   };

//   handleBucketChange = (e) => {
//     console.log("Bucket Changed...");
//     // Set val to form value
//     const val = e.target.value;
//     if (val === "Choose Bucket Size...") {
//       sessionStorage.setItem("selectedBucket", "");
//       this.setState({ selectedBucket: "" });
//     } else {
//       sessionStorage.setItem("selectedBucket", val);
//       this.setState({ selectedBucket: val });
//       sessionStorage.setItem("selectedBucketSize", val);
//       this.setState({ selectedBucketSize: val });
//     }
//     this.setSelectedBucketPrice(val);
//   };
//   handleNumberChange = (e) => {
//     console.log("Number of Tickets Changed...");
//     // Set val to form value
//     const val = e.target.value;
//     if (val !== 0) {
//       sessionStorage.setItem("numTickets", val);
//       this.setState({
//         numTickets: val,
//       });
//     }
//   };
//   getTicketTotal = () => {
//     console.log("Getting Ticket Total..");
//     let numTick = sessionStorage.getItem("numTickets");
//     let SBP = sessionStorage.getItem("selectedBucketPrice");
//     let ans = numTick * SBP;
//     sessionStorage.setItem("ticketTotal", ans.toString());

//     this.setState({
//       ticketTotal: this.state.numTickets * this.state.selectedBucketPrice,
//     });
//   };

//   //TODO:  , calculate the total correctly
//   getTotalWithBuckets = () => {
//     this.setState({
//       BucketTotalPrice: this.state.smBucket * this.state.selectedBucketPrice,
//     });
//     console.log("Price of buckets:  ", this.state.BucketTotalPrice);
//   };
//   setSelectedBucketPrice = (size) => {
//     console.log("Setting Selected Bucket Price...");
//     switch (size) {
//       case "Small":
//         sessionStorage.setItem(
//           "selectedBucketPrice",
//           sessionStorage.getItem("bucketPriceSM").substring(1)
//         );
//         return this.setState({
//           selectedBucketPrice: this.state.bucketPriceSM.substring(1),
//         });
//       case "Medium":
//         sessionStorage.setItem(
//           "selectedBucketPrice",
//           sessionStorage.getItem("bucketPriceMD").substring(1)
//         );
//         return this.setState({
//           selectedBucketPrice: this.state.bucketPriceMD.substring(1),
//         });
//       case "Large":
//         sessionStorage.setItem(
//           "selectedBucketPrice",
//           sessionStorage.getItem("bucketPriceLG").substring(1)
//         );
//         return this.setState({
//           selectedBucketPrice: this.state.bucketPriceLG.substring(1),
//         });
//       default:
//         return console.log("Error setting selected bucket price");
//     }
//   };

//   //TODO: Get this to change cart price from empty string to the
//   // Reflected price..
//   handleBucketQtySm = (event) => {
//     this.setState({ smBucket: event.target.value });
//     //sessionStorage.getItem("bucketPriceSM").substring(1);

//     // let price = this.state.smBucket * this.state.selectedBucketPrice;
//     // console.log("**Price Logging**: ", price);
//     // this.setState({ cartPrice: price });
//     // console.log("Cart price: ", this.state.cartPrice);

//     //console.log(this.state.smBucket);
//   };
//   handleBucketQtyMed = (event) => {
//     this.setState({ medBucket: event.target.value });

//     //console.log(this.state.smBucket);
//   };
//   handleBucketQtyLg = (event) => {
//     this.setState({ lgBucket: event.target.value });

//     //console.log(this.state.smBucket);
//   };

//   // this.setState({
//   //   numTickets: val
//   // });
//   render() {
//     return (
//       <Jumbotron className={"jumbo_clr"}>
//         <h1>Purchase Tickets</h1>
//         {localStorage.getItem("user") ? (
//           <Form>
//             <Form.Group as={Col} controlId={"FarmField"}>
//               <Form.Label>Farm Field</Form.Label>
//               <Form.Control
//                 as={"select"}
//                 value={this.state.selectedField}
//                 onChange={this.handleFieldChange}
//               >
//                 <option>Choose Farm Field...</option>
//                 {this.state.fields.map((field) => (
//                   <option key={field}>{field}</option>
//                 ))}
//               </Form.Control>
//             </Form.Group>
//             <div className={"divider div-transparent"} />
//             <Form.Group as={Col} controlId={"Buckets"}>
//               <Form.Label>Bucket</Form.Label>
//               <div>
//                 {this.state.selectedField ? (
//                   <div>
//                     <strong>
//                       Bucket Prices for {this.state.selectedField} Field:
//                     </strong>
//                     <div>Small Bucket: {this.state.bucketPriceSM}</div>
//                     <div>
//                       <Select
//                         onChange={this.handleBucketQtySm}
//                         value={this.state.smBucket}
//                       >
//                         <MenuItem value="">
//                           <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={0}>Zero</MenuItem>
//                         <MenuItem value={1}>One</MenuItem>
//                         <MenuItem value={2}>Two</MenuItem>
//                         <MenuItem value={3}>Three</MenuItem>
//                         <MenuItem value={4}>Four</MenuItem>
//                         <MenuItem value={5}>Five</MenuItem>
//                         <MenuItem value={6}>Six</MenuItem>
//                         <MenuItem value={7}>Seven</MenuItem>
//                         <MenuItem value={8}>Eight</MenuItem>
//                         <MenuItem value={9}>Nine</MenuItem>
//                         <MenuItem value={10}>Ten</MenuItem>
//                       </Select>
//                     </div>
//                     <div>Medium Bucket: {this.state.bucketPriceMD}</div>
//                     <div>
//                       <Select
//                         onChange={this.handleBucketQtyMed}
//                         value={this.state.medBucket}
//                       >
//                         <MenuItem value="">
//                           <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={0}>Zero</MenuItem>
//                         <MenuItem value={1}>One</MenuItem>
//                         <MenuItem value={2}>Two</MenuItem>
//                         <MenuItem value={3}>Three</MenuItem>
//                         <MenuItem value={4}>Four</MenuItem>
//                         <MenuItem value={5}>Five</MenuItem>
//                         <MenuItem value={6}>Six</MenuItem>
//                         <MenuItem value={7}>Seven</MenuItem>
//                         <MenuItem value={8}>Eight</MenuItem>
//                         <MenuItem value={9}>Nine</MenuItem>
//                         <MenuItem value={10}>Ten</MenuItem>
//                       </Select>
//                     </div>
//                     <div className={"padding"}>
//                       Large Bucket: {this.state.bucketPriceLG}
//                     </div>
//                     <div>
//                       <Select
//                         onChange={this.handleBucketQtyLg}
//                         value={this.state.lgBucket}
//                       >
//                         <MenuItem value="">
//                           <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={0}>Zero</MenuItem>
//                         <MenuItem value={1}>One</MenuItem>
//                         <MenuItem value={2}>Two</MenuItem>
//                         <MenuItem value={3}>Three</MenuItem>
//                         <MenuItem value={4}>Four</MenuItem>
//                         <MenuItem value={5}>Five</MenuItem>
//                         <MenuItem value={6}>Six</MenuItem>
//                         <MenuItem value={7}>Seven</MenuItem>
//                         <MenuItem value={8}>Eight</MenuItem>
//                         <MenuItem value={9}>Nine</MenuItem>
//                         <MenuItem value={10}>Ten</MenuItem>
//                       </Select>
//                     </div>
//                   </div>
//                 ) : null}
//               </div>
//               <Form.Control
//                 as={"select"}
//                 value={this.state.selectedBucket}
//                 onChange={this.handleBucketChange}
//                 disabled={this.state.bucketDisable}
//               >
//                 <option>Choose Bucket Size</option>
//                 <option>Small</option>
//                 <option>Medium</option>
//                 <option>Large</option>
//               </Form.Control>
//             </Form.Group>
//             {this.state.selectedField && this.state.selectedBucket ? (
//               <div>
//                 {this.state.selectedField} Field Ticket with{" "}
//                 {this.state.selectedBucket}, ${this.state.selectedBucketPrice}{" "}
//                 bucket
//               </div>
//             ) : null}
//             <div className={"divider div-transparent"} />
//             <Form.Group>
//               <Form.Label>How Many Tickets?</Form.Label>
//               <Form.Control
//                 as={"select"}
//                 value={this.state.numTickets}
//                 onChange={this.handleNumberChange}
//                 disabled={this.state.amountDisable}
//               >
//                 <option />
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 <option>6</option>
//                 <option>7</option>
//                 <option>8</option>
//                 <option>9</option>
//                 <option>10</option>
//               </Form.Control>
//             </Form.Group>
//             <div>Total: ${this.state.ticketTotal}</div>
//             <div>
//               <Button
//                 variant={"contained"}
//                 onClick={this.props.changeForm}
//                 disabled={this.state.buttonDisable}
//               >
//                 Buy Tickets
//               </Button>
//             </div>
//           </Form>
//         ) : (
//           <div>
//             Please Log in first
//             <div className={"padding-top"}>
//               <Link to={{ pathname: "/Login", from: "/tickets" }}>
//                 <Button id={"TicketLogIn"}>Log in</Button>
//               </Link>
//             </div>
//           </div>
//         )}
//       </Jumbotron>
//     );
//   }
// }
// export default TicketForm;
