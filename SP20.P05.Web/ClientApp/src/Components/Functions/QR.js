import React from "react";
import QRCode from "qrcode.react";

const QR = props => {
  return <QRCode value={props.ticket} renderAs={"svg"} size={128} />;
};
export default QR;
