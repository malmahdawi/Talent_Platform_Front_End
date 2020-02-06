import React from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
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



export default function Signup(props,{...rest}) {
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
    props.handleRole(event);
  };
  

      const classes = useStyles();
    return (
        <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader
                      color="primary"
                      className={classes.cardHeader}
                    >
                      <h4 className={classes.cardTitle}>Sign Up</h4>
                    </CardHeader>

                    <CardBody signin>
                        <CustomInput
                        id="username"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            onChange: e=>props.handleChange(e),
                            placeholder: "Username...",
                            type: "text",
                            startAdornment: (
                            <InputAdornment position="start">
                                <Face className={classes.inputIconsColor} />
                            </InputAdornment>
                            )
                        }}
                        />
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
                        id="password"
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
                      <br/>
                      <FormControl fullWidth className={classes.selectFormControl}>
                        <InputLabel
                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                          Select User Type
                        </InputLabel>
                        <Select
                          MenuProps={{
                            className: classes.selectMenu
                          }}
                          classes={{
                            select: classes.select
                          }}
                          value={simpleSelect}
                          onChange={handleSimple}
                          inputProps={{
                            name: "simpleSelect",
                            id: "simple-select"
                          }}
                        >
                          <MenuItem
                            disabled
                            classes={{
                              root: classes.selectMenuItem
                            }}
                          >
                            User Type
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="1"
                          >
                            Seller
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected
                            }}
                            value="2"
                          >
                            Buyer
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </CardBody>
                    
                    <div className={classes.textCenter}>
                      <Button simple color="primary" size="lg" onClick={props.handleSubmit}>
                        Get Started
                      </Button>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer
            className={classes.footer}
            content={
              <div>
                <div className={classes.left}>
                  <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.creative-tim.com/?ref=mkpr-login"
                        target="_blank"
                        className={classes.block}
                      >
                        Creative Tim
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.creative-tim.com/presentation?ref=mkpr-login"
                        target="_blank"
                        className={classes.block}
                      >
                        About us
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="//blog.creative-tim.com/"
                        className={classes.block}
                      >
                        Blog
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.creative-tim.com/license?ref=mkpr-login"
                        target="_blank"
                        className={classes.block}
                      >
                        Licenses
                      </a>
                    </ListItem>
                  </List>
                </div>
                <div className={classes.right}>
                  &copy; {1900 + new Date().getYear()} , made with{" "}
                  <Favorite className={classes.icon} /> by{" "}
                  <a
                    href="https://www.creative-tim.com?ref=mkpr-login"
                    target="_blank"
                  >
                    Creative Tim
                  </a>{" "}
                  for a better web
                </div>
              </div>
            }
          />
        </div>
      </div>
    )
}

