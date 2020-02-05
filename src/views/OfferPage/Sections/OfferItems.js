import React from "react";
import OfferCard from "./OfferCard.js"

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";



export default function OfferItem(props) {
    const data = Array.from(props.offers.offers);
    const offers = data.map((o,i) => <OfferCard offer={o} key={i} handleAction={props.handleAction}/>)
    console.log(data);
    return (
        <div >
            <GridContainer layout={'row'}>
                {offers}
            </GridContainer>
        </div>
    )
}
