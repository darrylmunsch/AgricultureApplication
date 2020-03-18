import React, { Component } from "react";

// Style sheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./Fields.css";
import { TiTicket } from "react-icons/ti";
import ModalFunc from "../../Components/Functions/ModalFunc";
import FieldPrompts from "./FieldPrompts";

export class Fields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      MTitle: "",
      MBody: "",
      MFooter: "",
      MProps: {}
    };
    this.handleBlueberryOpen = this.handleBlueberryOpen.bind(this);
    this.handleBlackberryOpen = this.handleBlackberryOpen.bind(this);
    this.handleStrawberryOpen = this.handleStrawberryOpen.bind(this);
    this.handlePumpkinOpen = this.handlePumpkinOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  componentWillMount() {
    console.log("Component mounted... \nSetting State...");
    this.setState({
      MTitle: FieldPrompts.blueberryPrompt.MTitle,
      MBody: FieldPrompts.blueberryPrompt.MBody,
      MFooter: FieldPrompts.blueberryPrompt.MFooter
    });
  }
  handleBlueberryOpen() {
    this.setState({
      show: true,
      MTitle: FieldPrompts.blueberryPrompt.MTitle,
      MBody: FieldPrompts.blueberryPrompt.MBody,
      MFooter: FieldPrompts.blueberryPrompt.MFooter
    });
    console.log("blueberries," + this.state.show)
  }
  handleStrawberryOpen() {
    this.setState({
      show: true,
      MTitle: FieldPrompts.strawberryPrompt.MTitle,
      MBody: FieldPrompts.strawberryPrompt.MBody,
      MFooter: FieldPrompts.strawberryPrompt.MFooter
    });
    console.log("strawberries,"+ this.state.show)
  }
  handleBlackberryOpen() {
    this.setState({
      show: true,
      MTitle: FieldPrompts.blackberryPrompt.MTitle,
      MBody: FieldPrompts.blackberryPrompt.MBody,
      MFooter: FieldPrompts.blackberryPrompt.MFooter
    });
    console.log("blackberries,"+ this.state.show)
  }
  handlePumpkinOpen() {
    this.setState({
      show: true,
      MTitle: FieldPrompts.pumpkinPrompt.MTitle,
      MBody: FieldPrompts.pumpkinPrompt.MBody,
      MFooter: FieldPrompts.pumpkinPrompt.MFooter
    });
    console.log("pumpkins,"+ this.state.show)
  }
  handleClose() {
    this.setState({
      show: false
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
          <div className={"p1"}>
            <div className={"overlay"}> </div>
            <div className={"text_background"}>
              <div className={"p1_text"}>
                Check out our blueberry farm and buy tickets now!
              </div>
              <div>
                <div className={"p1_icons"}>
                  <button className={"btn blueberry"} onClick={this.handleBlueberryOpen}>
                    <TiTicket className={"icon_style"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={"p2"}>
            <div className={"overlay"}> </div>
            <div className={"text_background"}>
              <div className={"p1_text"}>
                Check out our strawberry farm and buy tickets now!
              </div>
              <div>
                <div className={"p1_icons"}>
                  <button className={"btn strawberry"} onClick={this.handleStrawberryOpen}>
                    <TiTicket className={"icon_style"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={"p3"}>
            <div className={"overlay"}> </div>
            <div className={"text_background"}>
              <div className={"p1_text"}>
                Check out our blackberry farm and buy tickets now!
              </div>
              <div>
                <div className={"p1_icons"}>
                  <button className={"btn blackberry"} onClick={this.handleBlackberryOpen}>
                    <TiTicket className={"icon_style"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={"p4"}>
            <div className={"overlayCS"}>Coming Soon </div>
            <div className={"text_background"}>
              <div className={"p1_text"}>
                Check out our pumpkin farm and buy tickets now!
              </div>
              <div>
                <div className={"p1_icons"}>
                  <button className={"btn pumpkin"} onClick={this.handlePumpkinOpen}>
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
