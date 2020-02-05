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
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";
import { Box } from '@material-ui/core';

const style = {
  ...projectsStyle
};




const useStyles = makeStyles(style);

export default function ServiceItems(props) {
  const classes = useStyles();

  // let [data, setData] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  // useEffect(() => {
  //   axios
  //     .get(`${API.url}/services`)
  //     .then(response => setData(response.data));
  // }, []);

  // console.log(data);

  const contents = props.contents.map(e =>{
    return (
        {
            tabButton: e[0],
            tabContent: e[1].map((s,i)=>(
                 (
                  // <>
                    <GridItem  xs={12} sm={4} md={4} lg={4}
                    
                    >
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
                          <Link>
                            <Button simple color="white">
                              <Subject /> Details
                            </Button>
                          </Link>
                              {(localStorage.user_type === "buyer")? 
                                (<Link >
                                <Button simple color="white">
                                  <Subject /> Make An Offer
                                </Button>
                              </Link>):null
                              }

                        </CardBody>
                      </Card>
                      </GridItem>
                  
// {/*                     
//                       <GridItem key={i} md={12} sm={12} lg={4}>
//                         <Card product plain>
//                           <CardHeader image plain>
//                             <a href="">
//                               <img style={{height: '270px'}} src={s.galleries[0]? s.galleries[0].url:""} alt="mohammed" />
//                             </a>
//                             <div
//                               className={classes.coloredShadow}
//                               style={{ backgroundImage: `url(${gucci})`, opacity: 1 }}
//                             />
//                           </CardHeader>
//                           <CardBody className={classes.textCenter} plain>
//                             <h4 className={classes.cardTitle}>Service Name :{s.service.name}</h4>
//                             <p className={classes.cardDescription}>
//                               Description :
//                              {s.service.description}
//                             </p>
//                           </CardBody>
//                           <CardFooter plain>
//                             <div className={classes.priceContainer}>
//                               <span className={classNames(classes.price, classes.priceOld)}>
//                                 {" "}
//                                 price range : {s.service.price_range} per Hour
//                               </span>
            
//                             </div>
//                           </CardFooter>
//                         </Card>
//                       </GridItem> */}

                // </>
                  )
            ))
        }
    )
})
console.log(contents);

  return (
    // <div className={classes.projects}>
        <div className={classes.container}>
      <GridContainer>
        {/* <Box justifyContent="center" flexWrap="wrap"> */}
        <GridItem  xs={12} sm={12} md={12} lg={12}>
      <NavPills

      color="warning"
      alignCenter
      tabs={contents}
      // horizontal={contents}
      /> 
      </GridItem>
      {/* </Box> */}
      </GridContainer>
    </div>
    // </div>
  )
}
