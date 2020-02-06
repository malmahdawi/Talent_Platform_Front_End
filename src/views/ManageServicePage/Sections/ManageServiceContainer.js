/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import ManageServiceItems from "./ManageServiceItems.js"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";

const useStyles = makeStyles(styles);

export default function ManageServiceContainer(props) {

  const classes = useStyles();
  return (
    <div>
      <Parallax
        image={require("assets/img/CircusClown.jpg")}
        filter="dark"
        small
      >
        <div className={classes.container} >
          <GridContainer >
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <div className={classes.brand}>
                <h1 className={classes.title}>MANAGE SERVICES</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section} >
            <div className={classes.container} >
                    <ManageServiceItems services={props.services}/>
            </div>
            </div>
      </div>
    </div>
  );
}
