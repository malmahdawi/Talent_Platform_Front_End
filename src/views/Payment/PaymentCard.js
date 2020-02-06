import React from "react";
// react components used to create a google map

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import Datetime from "react-datetime";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";

import city from "assets/img/examples/city.jpg";
import Axios from "axios";

const useStyles = makeStyles(contactsStyle);


export default function PaymentCard(props,{ ...rest }) {
  // console.log(props);
  
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Contact us 1 START */}
      
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes.card1}>
                <form>
                  <CardHeader
                    style={{backgroundColor: '#f44336'}}
                    contact
                    className={classes.textCenter}
                  >
                    <h4 className={classes.cardTitle}>Payment</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="Price"
                          id="price"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: e=>props.handleChange(e),
                            type: "price",
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                          <br></br>
                      <Datetime
                        dateFormat="MMMM DD, YYYY hh:mm"
                        timeFormat={false}
                        value={props.time}
                        onChange={ (e) => props.handleChangeDate(e)}
                        inputProps={{ 
                          placeholder: "Datetime Picker Here" ,
                          
                        }}
                        />
                      </GridItem>
                    </GridContainer>
                    
                    <GridContainer>
                      <GridItem style={{textAlign: 'center'}} xs={12} sm={12} md={12}>
                      <CustomInput
                        id="url"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                            onChange: e=>props.handleChange(e),
                            placeholder: "Insert Photo Url...",
                            type: "reciept_url",
                            startAdornment: (
                                <InputAdornment position="start">
                                <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem style={{textAlign: 'center'}} xs={12} sm={12} md={12}>
                      <Button  color="primary" style={{textAlign: 'center'}} simple onClick={props.handleSubmit}>
                      SUBMIT
                    </Button>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
  );
}
