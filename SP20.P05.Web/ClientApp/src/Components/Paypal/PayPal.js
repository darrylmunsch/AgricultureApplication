import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';

export default function PayPal(props) {
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let individulauserId = sessionStorage.getItem('userId')

  let smallBucketQTY = sessionStorage.getItem("bucketQtySM")
  let mediumBucketQTY = sessionStorage.getItem("bucketQtyMD")
  let largeBucketQTY = sessionStorage.getItem("bucketQtyLG")
  let farmFieldId= sessionStorage.getItem("farmFieldId")


  let ticket = {
    FarmFieldId: farmFieldId,
    TicketTimeSlot: "9999-03-23T22:24:13.306Z",
    UserId: individulauserId,
    SmallBucketQty: smallBucketQTY,
    MediumBucketQty: mediumBucketQTY,
    LargeBucketQty: largeBucketQTY
  };

  let paypalRef = useRef();

  const product = {
    price: props.price,
    description: props.description
  };

  sessionStorage.setItem('purchaseCompleted', 'true')

  useEffect(() => {
    const ticketUrl='api/farm-field-tickets'
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AdNhjT0uci2cwUCDVDi5fLNz0shPH5ALuzMWG1DqABu7ESmBWb6wm5E58AjYzMsxqLfwRHAzqLnHsaZa";
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);

    if (loaded) {
      setTimeout(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.description,
                    amount: {
                      currency_code: "USD",
                      value: product.price
                    }
                  }
                ]
              });
            },

            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              localStorage.setItem('isPaidFor', 'true');
              setPaidFor(true);


              var issueTicket = async() =>{
                for( var i=0; i<1; i++){
                  await axios
                      .post(ticketUrl, ticket, {
                        headers: {
                          "Content-Type": "application/json"
                        }
                      })
                      .then(res => {
                        console.log(res);
                        console.log(res.data);
                      });
                }
              }

              
            }
          })
          .render(paypalRef);
      });
    }
  });

  return (
    <div>
      {paidFor ? (
        <div>
          <h1>Thanks for the Monies!</h1>
        </div>
      ) : (
        <div>
          <h1>Total: ${product.price}</h1>
          <div ref={v => (paypalRef = v)} />
        </div>
      )}
    </div>
  );
}
