import API from "../../API.js"
import React from 'react'

import Features from './Features'
import Cards from './Cards'
import Footer from '../Footer/Footer'
import Clients from './Clients'

// nodejs library that concatenates classes
import classNames from "classnames";

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
import Parallax from "components/Parallax/Parallax.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle";

import image from "assets/img/hero.jpg";

const useStyles = makeStyles(landingPageStyle);

// #f44336


export default function Hero({ ...rest }) {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  // });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="Talents"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "primary" 
        }}
        {...rest}
      />
      <Parallax
       image={require("assets/img/saudiDancing.png")}
       filter="dark"
        
        >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>
               Find The Perfect Talents

               For Your Event!</h1>
              <h4 style={{textTransform: 'uppercase', fontWeight: 'bold'}}>
              A single place, millions of creative talents
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Features></Features>
          <hr style={{borderTop: '2px solid red'}}></hr>
          <Cards></Cards>
        </div>
      </div>
      <br></br>
      <br></br>
      <Clients></Clients>
      <Footer></Footer>
         </div> 
      )   
}