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
    this.handleOpen = this.handleOpen.bind(this);
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
  handleOpen() {
    this.setState({
      show: true
    });
  }
  handleClose() {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <div>
        <div className={"grid_container"}>
          <div className={"p1"}>
            <div className={"overlay"}> </div>
            <div className={"text_background"}>
              <div className={"p1_text"}>
                Check out our blueberry farm and buy tickets now!
              </div>
              <div>
                <div className={"p1_icons"}>
                  <button className={"btn"} onClick={this.handleOpen}>
                    <TiTicket className={"icon_style"} />
                  </button>
                  <ModalFunc
                    show={this.state.show}
                    handleClose={this.handleClose}
                    MTitle={this.state.MTitle}
                    MBody={this.state.MBody}
                    MFooter={this.state.MFooter}
                  />
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
                  <button className={"btn"}>
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
                  <button className={"btn"}>
                    <TiTicket className={"icon_style"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={"p4"}>
            <div className={"overlay"}> </div>
            <div className={"text_background"}>
              <div className={"p1_text"}>
                Check out our corn farm and buy tickets now!
              </div>
              <div>
                <div className={"p1_icons"}>
                  <button className={"btn"}>
                    <TiTicket className={"icon_style"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={"p5"}>
            <div className={"overlayCS"}>Coming Soon </div>
            <div className={"text_background"}>
              <div className={"p1_text"}>
                Check out our corn farm and buy tickets now!
              </div>
              <div>
                <div className={"p1_icons"}>
                  <button className={"btn"}>
                    <TiTicket className={"icon_style"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={"p6"}>
            <div className={"overlayCS"}>Coming Soon </div>
            <div className={"text_background"}>
              <div className={"p1_text"}>
                Check out our corn farm and buy tickets now!
              </div>
              <div>
                <div className={"p1_icons"}>
                  <button className={"btn"}>
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
