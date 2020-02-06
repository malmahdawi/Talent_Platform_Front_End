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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.js";

import image from "assets/img/Clown.jpg";

const useStyles = makeStyles(loginPageStyle);



export default function AddNewService(props) {
  const [multipleSelect, setMultipleSelect] = React.useState([]);
  const handleMultiple = event => {
    setMultipleSelect(event.target.value);
    props.handleCategories(event.target.value);
  };
  const menues = props.categories.map((e,i)=>{
    return(
              <MenuItem key={i}
                classes={{
                  // root: classes.selectMenuItem,
                  // selected: classes.selectMenuItemSelectedMultiple
                }}
                value={e[0]}
              >
                {e[1]}
              </MenuItem>
    )
  })

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
              <GridItem xs={12} sm={12} md={8}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader
                      color="primary"
                      className={classes.cardHeader}
                    >
                      <h4 style={{textTransform: 'uppercase'}} className={classes.cardTitle}>New service</h4>
                    </CardHeader>

                    <CardBody >
                      <CustomInput
                        id="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                            onChange: e=>props.handleChange(e),
                            placeholder: "Name...",
                            type: "name",
                            startAdornment: (
                                <InputAdornment position="start">
                                <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }}
                      />
                      <CustomInput
                        id="price_range"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                            onChange: e=>props.handleChange(e),
                            placeholder: "Price Range...",
                            type: "price_range",
                            startAdornment: (
                                <InputAdornment position="start">
                                <Icon className={classes.inputIconsColor}>
                                    lock_utline
                                </Icon>
                                </InputAdornment>
                            ),
                        }}
                      />
                        <CustomInput
                        id="location"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                            onChange: e=>props.handleChange(e),
                            placeholder: "Location...",
                            type: "location",
                            startAdornment: (
                                <InputAdornment position="start">
                                <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }}
                        />
                        <CustomInput
                        id="description"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                            onChange: e=>props.handleChange(e),
                            placeholder: "Description...",
                            type: "description",
                            startAdornment: (
                                <InputAdornment position="start">
                                <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }}
                        />
                        <CustomInput
                        id="url"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                            onChange: e=>props.handleUrl(e),
                            placeholder: "Insert Photo Url...",
                            type: "url",
                            startAdornment: (
                                <InputAdornment position="start">
                                <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }}
                        />
                        <FormControl fullWidth className={classes.selectFormControl}>
                          <InputLabel
                            htmlFor="multiple-select"
                            className={classes.selectLabel}
                          >
                            Multiple Select
                        </InputLabel>
                          <Select
                            multiple
                            value={multipleSelect}
                            onChange={handleMultiple}
                            MenuProps={{
                              className: classes.selectMenu,
                              classes: { paper: classes.selectPaper }
                            }}
                            classes={{ select: classes.select }}
                            inputProps={{
                              name: "multipleSelect",
                              id: "multiple-select"
                            }}
                          >
                            <MenuItem
                              disabled
                              classes={{
                                root: classes.selectMenuItem
                              }}
                            >
                              Multiple Select
                            </MenuItem>
                              {menues}
                          </Select>
                        </FormControl>
                    </CardBody>
                    <div className={classes.textCenter}>
                      <Button simple color="primary" size="lg" onClick={props.handleSubmit}>
                        Add Service
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

