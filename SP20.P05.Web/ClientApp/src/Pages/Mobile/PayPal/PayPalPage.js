import React from "react";
import PayPal from '../../../Components/Paypal/PayPal';

export default function PayPalPage(){
    document.addEventListener("message", function(data) {
        alert(data.data);
    });
    return(
        <PayPal />
    )
}
