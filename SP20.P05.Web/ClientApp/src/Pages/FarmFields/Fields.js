import React, { Component } from "react";
import { Icon } from "rsuite";

// Style sheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./Fields.css";
import {TiTicket} from "react-icons/ti";

export class Fields extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                  <button className={"btn"}>
                    <TiTicket className={"icon_style"}/>
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
                  <button className={"btn"}>
                    <TiTicket className={"icon_style"}/>
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
                    <TiTicket className={"icon_style"}/>
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
                    <TiTicket className={"icon_style"}/>
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
                    <TiTicket className={"icon_style"}/>
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
                    <TiTicket className={"icon_style"}/>
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
