import React from "react";
import {Link} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Subject from "@material-ui/icons/Subject";
import Delete from "@material-ui/icons/Delete";
import Refresh from "@material-ui/icons/Refresh";
import Payment from "@material-ui/icons/Payment";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

import cardBlog6 from "assets/img/examples/card-blog6.jpg";

const useStyles = makeStyles(styles);

export default function OfferCard(props) {
    const [activeRotate, setActiveRotate] = React.useState("");
    const classes = useStyles();
    React.useEffect(() => {
      if (window) {
        window.addEventListener("resize", addStylesForRotatingCards);
      }
      addStylesForRotatingCards();
      return function cleanup() {
        if (window) {
          window.removeEventListener("resize", addStylesForRotatingCards);
        }
      };
    });
    const addStylesForRotatingCards = () => {
      var rotatingCards = document.getElementsByClassName(classes.cardRotate);
      for (let i = 0; i < rotatingCards.length; i++) {
        var rotatingCard = rotatingCards[i];
        var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
        var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
        cardFront.style.height = "unset";
        cardFront.style.width = "unset";
        cardBack.style.height = "unset";
        cardBack.style.width = "unset";
        var rotatingWrapper = rotatingCard.parentElement;
        var cardWidth = rotatingCard.parentElement.offsetWidth;
        var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
        rotatingWrapper.style.height = cardHeight + "px";
        rotatingWrapper.style["margin-bottom"] = 30 + "px";
        cardFront.style.height = "unset";
        cardFront.style.width = "unset";
        cardBack.style.height = "unset";
        cardBack.style.width = "unset";
        cardFront.style.height = cardHeight + 50 + "px";
        cardFront.style.width = cardWidth + "px";
        cardBack.style.height = cardHeight + 50 + "px";
        cardBack.style.width = cardWidth + "px";
      }
    };
    return (
        <>
            <GridItem xs={12} sm={6} md={6} lg={4} >
                <div
                className={
                    classes.rotatingCardContainer +
                    " " +
                    classes.manualRotate +
                    " " +
                    activeRotate
                }
                >
                <Card style={{display:"flex", flexWrap: "wrap"}} className={classes.cardRotate}>
                    <div
                    className={
                        classes.front + " " + classes.wrapperBackground
                    }
                    style={{ backgroundImage: `url(${props.offer.service_galleries[0].url? props.offer.service_galleries[0].url:cardBlog6})` }}
                    >
                    <CardBody background className={classes.cardBodyRotate}>
                        <h6 className={classes.cardCategoryWhite}>
                        @{props.offer.user}
                        </h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                        <h3 className={classes.cardTitleWhite}>
                            {props.offer.service.name}
                        </h3>
                        </a>
                        <p className={classes.cardDescriptionWhite}>
                            {props.offer.service.description}
                        </p>
                        <div className={classes.textCenter}>
                        <Button
                            round
                            color="danger"
                            onClick={() =>
                            setActiveRotate(classes.activateRotate)
                            }
                        >
                            <Refresh /> Offer Details
                        </Button>
                        </div>
                    </CardBody>
                    </div>
                    <div
                    className={classes.back + " " + classes.wrapperBackground}
                    style={{ backgroundImage: `url(${props.offer.service_galleries[0].url? props.offer.service_galleries[0].url:cardBlog6})` }}
                    >
                    <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>Manage Offer</h5>
                        <p className={classes.cardDescriptionWhite}>
                            Description: {props.offer.offer.description}
                        </p>
                        <p className={classes.cardDescriptionWhite}>
                            Price: {props.offer.offer.price}
                        </p>
                        <p className={classes.cardDescriptionWhite}>
                            Location: {props.offer.offer.location}
                        </p>
                        
                        {(() => {
              
                                switch (props.offer.offer.status) {
                                    case "pending":   return <Badge color="warning">offer pending</Badge>;
                                    case "accepted": return <Badge color="success">offer accepted</Badge>;
                                    case "declined":  return <Badge color="danger">offer declined</Badge>;
                                    }
                            
                            
                        })()}
                        <br/>
                        {(() => {
                            if (props.offer.payments[0]) {
                                switch (props.offer.payments[0].status) {
                                    case "pending":   return <Badge color="warning">payment pending</Badge>;
                                    case "accepted": return <Badge color="success">payment accepted</Badge>;
                                    case "declined":  return <Badge color="danger">payment declined</Badge>;
                                    }
                            }
                        })()}
                        <br />
                        <div className={classes.textCenter}>
                        {
                            props.offer.offer.status == "accepted"?   
                            (  
                                <Link to={{
                                    pathname:"/make-payment",
                                    state: {service_id: props.offer.service.id, offer_id: props.offer.offer.id}
                                    }}>
                                    <Button round  color="warning">
                                        <Payment/> Payment
                                    </Button>
                                </Link>
                                ):null
                        }
                        {
                            props.offer.offer.status == "pending"?   
                            (                    
                                
                                    <Button round justIcon color="danger" onClick={()=>props.handleAction(props.offer.offer.service_id, props.offer.offer.id)}>
                                        <Delete />
                                    </Button>
                                ):null
                        }
                        
                        
                        
                        <br />
                        <Button
                            round
                            color="danger"
                            onClick={() => setActiveRotate("")}
                        >
                            <Refresh /> Back...
                        </Button>
                        </div>
                    </CardBody>
                    </div>
                </Card>
                </div>
            </GridItem>
        </>
    )
}
