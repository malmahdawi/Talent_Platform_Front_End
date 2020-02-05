import React, { Component } from 'react';
import axios from 'axios';

import API from '../../../API'
import { useState, useEffect } from 'react';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import gucci from "assets/img/examples/gucci.jpg";
import classNames from "classnames";


// core components
import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(styles);

export default function Service() {
  const classes = useStyles();

  let [data, setData] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get(`${API.url}/services`)
      .then(response => setData(response.data));
  }, []);

  console.log(data);

  return (


    <div>
      <GridContainer>
        {data.map((item , k) => (
          <GridItem key = {k} md={4} sm={4}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img style={{height: '270px'}} src={item.galleries[0]? item.galleries[0].url:""} alt="mohammed" />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${gucci})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Service Name :{item.service.name}</h4>
                <p className={classes.cardDescription}>
                  Description :
                 {item.service.description}
                </p>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    price range : {item.service.price_range} per Hour
                  </span>

                </div>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </GridContainer>

    </div>


  )
}
