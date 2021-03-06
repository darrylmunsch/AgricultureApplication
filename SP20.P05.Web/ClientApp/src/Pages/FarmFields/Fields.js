import React, { Component } from "react";

// Style sheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./Fields.css";
import { TiTicket } from "react-icons/ti";
import ModalFunc from "../../Components/Functions/ModalFunc";
import FieldPrompts from "./FieldPrompts";
import { Link } from "react-router-dom";

export class Fields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      MTitle: "",
      MBody: "",
      MFooter: "",
      MProps: {},
      activeTab: ""
    };
    this.handleBlueberryOpen = this.handleBlueberryOpen.bind(this);
    this.handleBlackberryOpen = this.handleBlackberryOpen.bind(this);
    this.handleStrawberryOpen = this.handleStrawberryOpen.bind(this);
    this.handlePumpkinOpen = this.handlePumpkinOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTicketGoTo = this.handleTicketGoTo.bind(this);
  }

  componentWillMount() {
    console.log("Component mounted... \nSetting State...");
    this.setState({
      MTitle: FieldPrompts.blueberryPrompt.MTitle,
      MBody: FieldPrompts.blueberryPrompt.MBody,
      MFooter: FieldPrompts.blueberryPrompt.MFooter
    });
  }
  componentWillUnmount() {
    console.log("Component will unmount..");
  }

  handleBlueberryOpen() {
    this.setState({
      show: true,
      MTitle: FieldPrompts.blueberryPrompt.MTitle,
      MBody: FieldPrompts.blueberryPrompt.MBody,
      MFooter: FieldPrompts.blueberryPrompt.MFooter
    });
    console.log("blueberries," + this.state.show);
  }
  handleStrawberryOpen() {
    this.setState({
      show: true,
      MTitle: FieldPrompts.strawberryPrompt.MTitle,
      MBody: FieldPrompts.strawberryPrompt.MBody,
      MFooter: FieldPrompts.strawberryPrompt.MFooter
    });
    console.log("strawberries," + this.state.show);
  }
  handleBlackberryOpen() {
    this.setState({
      show: true,
      MTitle: FieldPrompts.blackberryPrompt.MTitle,
      MBody: FieldPrompts.blackberryPrompt.MBody,
      MFooter: FieldPrompts.blackberryPrompt.MFooter
    });
    console.log("blackberries," + this.state.show);
  }
  handlePumpkinOpen() {
    this.setState({
      show: true,
      MTitle: FieldPrompts.pumpkinPrompt.MTitle,
      MBody: FieldPrompts.pumpkinPrompt.MBody,
      MFooter: FieldPrompts.pumpkinPrompt.MFooter
    });
    console.log("pumpkins," + this.state.show);
  }
  handleClose() {
    this.setState({
      show: false
    });
  }
  handleTicketGoTo(e) {
    sessionStorage.setItem("activeTab", "tickets");
    this.setState({
      activeTab: "tickets"
    });
  }

  render() {
    return (
      <div>
        <ModalFunc
          show={this.state.show}
          handleClose={this.handleClose}
          MTitle={this.state.MTitle}
          MBody={this.state.MBody}
          MFooter={this.state.MFooter}
        />
        <div className={"grid_container"}>
          <div className={"p1"} onClick={this.handleBlueberryOpen}>
            <div className={"overlay"} />
            <div className={"text_background"}>
              <div className={"p1_text"}>
                Check out our blueberry farm and buy tickets now!
              </div>
              <div>
                <div className={"p1_icons"}>
                  <Link to={"/tickets"} onClick={this.handleTicketGoTo}>
                    <button className={"btn"}>
                      <TiTicket className={"icon_style"} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={"p2"} onClick={this.handleStrawberryOpen}>
            <div className={"overlay"} />
            <div className={"text_background"}>
              <div className={"p1_text"}>
                Check out our strawberry farm and buy tickets now!
              </div>
              <div>
                <div className={"p1_icons"}>
                  <Link to={"/tickets"} onClick={this.handleTicketGoTo}>
                    <button className={"btn"}>
                      <TiTicket className={"icon_style"} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={"p3"} onClick={this.handleBlackberryOpen}>
            <div className={"overlay"} />
            <div className={"text_background"}>
              <div className={"p1_text"}>
                Check out our blackberry farm and buy tickets now!
              </div>
              <div>
                <div className={"p1_icons"}>
                  <Link to={"/tickets"} onClick={this.handleTicketGoTo}>
                    <button className={"btn"}>
                      <TiTicket className={"icon_style"} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={"p4"} onClick={this.handlePumpkinOpen}>
            <div className={"overlayCS"}>Coming Soon </div>
            <div className={"text_background"}>
              <div className={"p1_text"}>
                Check out our pumpkin farm and buy tickets now!
              </div>
              <div>
                <div className={"p1_icons"}>
                  <button className={"btn"} type="button" disabled>
                    <TiTicket className={"icon_style"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fields;
