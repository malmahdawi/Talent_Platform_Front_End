import API from "../../API.js"
import React from 'react'

import Features from './Features'
import Cards from './Cards'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.js";

import image from "assets/img/bg0.jpg";

const useStyles = makeStyles(loginPageStyle);




export default function Hero() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
      });
      const classes = useStyles();
      return(
        <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="info" />}
        />
        <div
          className={classes.pageHeader}
          style={{ 
            backgroundImage: "linear-gradient(-45deg, rgba(217,30,24,9) 0%,rgba(255,102,0,.7) 30%), url(" + image + ")"
         }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Find The Perfect Freelance Services <br></br> For Your Business</h1>
                <h4>
                  There{"'"}s no doubt that Tesla is delighted with the
                  interest, but the data also raises a few questions. How long
                  will it take for Tesla to fulfill all those extra orders?
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel=""
                >
                  <i className="fas fa-ticket-alt" />
                  Order Now
                </Button>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} className={classes.mlAuto}>
                <div className={classes.iframeContainer}>
                  <iframe
                    height="250"
                    src="https://www.youtube.com/embed/IN6QnLpVEPI?ref=creativetim"
                    frameBorder="0"
                    allow="encrypted-media"
                    allowFullScreen=""
                    title="Tesla"
                  />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <Features></Features>
        <Cards></Cards>
         </div> 
      )   
}