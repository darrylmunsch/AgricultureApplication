import React from 'react';
import axios from "axios";

const [ticket, setTicket] = useState({});

let ticketUrl = "api/farm-field-tickets";

const IssueTicket = async (props) => {
    setTicket({
        id: 0,
        ticketTimeSlot: "9999-03-23T22:24:13.306Z",
        smallBucketQty: props.smallBucketQty,
        mediumBucketQty: props.mediumBucketQty,
        largeBucketQty: props.largeBucketQty,
        farmFieldId: props.farmFieldId,
        userId: props.userId
    });


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
};

export default IssueTicket;