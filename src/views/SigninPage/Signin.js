import API from "../../API.js"
import React from 'react'
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

import image from "assets/img/Clown.jpg";

const useStyles = makeStyles(loginPageStyle);



export default function Signin(props,{...rest}) {
      const classes = useStyles();
    return (
        <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "linear-gradient(-45deg, rgba(217,30,24,9) 0%,rgba(255,102,0,.7) 30%), url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader
                      color="primary"
                      className={classes.cardHeader}
                    >
                      <h4 className={classes.cardTitle}>Login</h4>
                    </CardHeader>

                    <CardBody signin>
                      <CustomInput
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                            onChange: e=>props.handleChange(e),
                            placeholder: "Email...",
                            type: "email",
                            startAdornment: (
                                <InputAdornment position="start">
                                <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }}
                      />
                      <CustomInput
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                            onChange: e=>props.handleChange(e),
                            placeholder: "Password",
                            type: "password",
                            startAdornment: (
                                <InputAdornment position="start">
                                <Icon className={classes.inputIconsColor}>
                                    lock_utline
                                </Icon>
                                </InputAdornment>
                            ),
                            autoComplete: "off"
                        }}
                      />
                    </CardBody>
                    <div className={classes.textCenter}>
                      <Button simple color="primary" size="lg" onClick={props.handleSubmit}>
                        Submit
                      </Button>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    )
}

