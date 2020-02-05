import React from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Subject from "@material-ui/icons/Subject";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import {Link} from "react-router-dom"

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

import cardProject6 from "assets/img/examples/card-project6.jpg";

const useStyles = makeStyles(projectsStyle);
export default function ManageServiceCard(props) {
  console.log(props.service.service.id);
  
    const classes = useStyles();
    return (
        <>
            <GridItem xs={12} sm={12} md={12} >
              <Card
                raised
                background
                style={{ backgroundImage: `url(${props.service.galleries? props.service.galleries&&props.service.galleries[0].url:cardProject6})` }}
              >
                <CardBody background>
                  <h6 className={classes.cardCategory}>{props.service.categories.name}</h6>
                    <h3 className={classes.cardTitleWhite}>
                        {props.service.service.name}
                    </h3>
                  <p className={classes.cardDescription}>
                    {props.service.service.description}
                  </p>
                  <Link to={{
                      pathname:"/check-offers",
                      state: {offers: props.service.offers, service_id: props.service.service.id}
                      }}>
                    <Button round color="warning">
                        <Subject /> Check Offers
                    </Button>
                  </Link>
                  <Link to={{
                      pathname:"/edit-service",
                      state: {service_obj: props.service}
                      }}>
                    <Button round color="success">
                          <Subject /> Edit Service
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </GridItem>
        </>
    )
}
