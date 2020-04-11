import React from 'react';
import axios from "axios";

//This takes in farmFieldID and UserID as props
//TODO: Will need to refactor this to allow for multiple buckets in 1 ticket, as well as the backend

const [ticket, setTicket] = useState({});


let ticketUrl = "api/farm-field-tickets";

const IssueTicket = async (props) => {
    setTicket({
        id: 0,
        ticketTimeSlot: "9999-03-23T22:24:13.306Z",
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