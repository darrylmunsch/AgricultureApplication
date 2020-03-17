import React, { useState, useRef, useEffect } from "react";

export default function PayPal() {
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let paypalRef = useRef();

  const product = {
    price: 1.11,
    description: ""
  };

  useEffect(() => {
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
              setPaidFor(true);
              console.log(order);
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
          <h1>
            {product.description} for ${product.price}
          </h1>
          <div ref={v => (paypalRef = v)} />
        </div>
      )}
    </div>
  );
}
