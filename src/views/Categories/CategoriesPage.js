import React, { Component } from 'react';
import axios from 'axios';

import API from '../../API'
import { useState, useEffect } from 'react';

import Service from "views/ServicePage/Sictions/Service.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import NavPills from "components/NavPills/NavPills.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import gucci from "assets/img/examples/gucci.jpg";
import classNames from "classnames";
import Tooltip from "@material-ui/core/Tooltip";
import Favorite from "@material-ui/icons/Favorite";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(styles);

export default function CategoriesPage() {
  const classes = useStyles();

  let [data, setData] = useState([]);
    const Category_id = 2;
    const api = `${API.url}/categories/`;
//   The useEffect() hook fires any time that the component is rendered.
//   An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get(api)
      .then(response => setData(response.data));
  }, []);

  console.log(data);

  return (


    <div>
        <Service/>

{/* <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>
                Some of Our Awesome Services 
              </h2>
              <NavPills
                alignCenter
                color="rose"
                tabs={[
                  { tabButton: "All", tabContent: "" },
                  { tabButton: "Music", tabContent: "" },
                  { tabButton: "Dancing", tabContent: "" },
                  { tabButton: "Art", tabContent: "" },
                  { tabButton: "Shows", tabContent: "" }
                ]}
              />
              <div className={classes.tabSpace} />
            </GridItem>
          </GridContainer>
     
     <GridContainer>
        {data.map(item => (
          <GridItem md={4} sm={4}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={item.services[0].galleries[0].url} alt="mohammed" />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${gucci})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Service Name :{item.category.name}</h4>
                <p className={classes.cardDescription}>
                  Description :
                 {item.services[0].service.description}
                </p>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    price range : {item.services[0].service.price_range} per Hour
                  </span>

                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </GridContainer>

    
    </div> */}
    </div>


  )
}
