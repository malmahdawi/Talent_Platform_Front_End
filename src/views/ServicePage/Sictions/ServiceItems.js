import React, { Component } from 'react';
import axios from 'axios';

import NavPills from "components/NavPills/NavPills.js";
import API from '../../../API'
import { useState, useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import gucci from "assets/img/examples/gucci.jpg";
import classNames from "classnames";
import Subject from "@material-ui/icons/Subject";
import WatchLater from "@material-ui/icons/WatchLater";
import {Link} from "react-router-dom"
// core components
import Button from "components/CustomButtons/Button.js";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";
import { Box } from '@material-ui/core';

const style = {
  ...projectsStyle
};




const useStyles = makeStyles(style);

export default function ServiceItems(props) {
  const classes = useStyles();
  const contents = props.contents.map(e =>{
    return (
        {
            tabButton: e[0],
            tabContent: e[1].map((s,i)=>(
                 (
                  // <>
                    <GridItem  xs={12} sm={4} md={4} lg={4} key={i}>
                        <Card
                        background
                        style={{
                          backgroundImage: `url(${s.galleries[0]? s.galleries[0].url:""})`
                        }}
                      >
                        <CardBody background>
                          <h6 className={classes.cardCategoryWhite}>PRODUCTIVITY APPS</h6>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <h3 className={classes.cardTitleWhite}>
                              {s.service.name}
                            </h3>
                          </a>
                          <p className={classes.title}>
                            {s.service.description}
                          </p>
                          <p className={classes.cardDescriptionWhite}>
                            ${s.service.price_range}
                          </p>
                          <Link to={{
                                    pathname:"/make-payment",
                                    state: {service_id: s.service.id}
                            }}>
                            <Button simple color="white">
                              <Subject /> Details
                            </Button>
                          </Link>
                              {(localStorage.user_type === "buyer")? 
                                (<Link to={{
                                  pathname:"/make-offer",
                                  state: {service_id: s.service.id}
                                }}>
                                <Button simple color="white">
                                  <Subject /> Make An Offer
                                </Button>
                              </Link>):null
                              }

                        </CardBody>
                      </Card>
                      </GridItem>
                
                  )
            ))
        }
    )
})
console.log(contents);

  return (
        <div className={classes.container}>
      <GridContainer>
        <GridItem  xs={12} sm={12} md={12} lg={12}>
      <NavPills

      color="warning"
      alignCenter
      tabs={contents}
      /> 
      </GridItem>
      </GridContainer>
    </div>
  )
}
