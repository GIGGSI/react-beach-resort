import React from "react";
import {MdRoomService, MdFreeBreakfast, MdLocalParking, MdBusinessCenter} from 'react-icons/md'

export default [
    {
        icon: <MdLocalParking/>,
        title: "Parking",
        info:
            "We offers 24-hour indoor parking for its guests." +
            " The hotel is directly accessible from the indoor car "

    }, {
        icon: <MdBusinessCenter/>,
        title: "Business center",
        info: "The hotel's business centre is designated to meet all your" +
            " business travel needs and available to assist you with all" +
            " office services such as scanning and emailing documents," +
            " fax services, photocopying, printing and offices supplies."
    }, {
        icon: <MdFreeBreakfast/>,
        title: "Free Breakfast",
        info: "The hotel restaurant with both indoor and outdoor seating offers" +
            " an open-buffet breakfast and is directly accessible from" +
            " guestroom corridors."
    }, {
        icon: <MdRoomService/>,
        title: "Room service",
        info: "Beach resort provides 24-hour room service. " +
            "Please click here for Room Service menu."
    }
]
