import React from "react";
// react components used to create a google map

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Datetime from "react-datetime";

import ImageUpload from '../ImageUploadTool/ImageUpload'


// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
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

const useStyles = makeStyles(contactsStyle);


export default function SectionContacts({ ...rest }) {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Contact us 1 START */}
      <div
        className={classes.contacts + " " + classes.section}
        style={{ backgroundImage: `url(${city})` }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes.card1}>
                <form>
                  <CardHeader
                    contact
                    color="primary"
                    className={classes.textCenter}
                  >
                    <h4 className={classes.cardTitle}>Payment</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="Price"
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                          <br></br>
                      <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                        />
                      </GridItem>
                    </GridContainer>
                    
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <ImageUpload></ImageUpload>
                      </GridItem>
                    </GridContainer>

                    {/* <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormControl> */}
                    <CustomInput
                      labelText="Your Message"
                      id="message"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleToggle(1)}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                          }}
                        />
                      }
                      classes={{ label: classes.label }}
                      label="I'm not a robot"
                    />
                    <Button color="primary" className={classes.pullRight}>
                      Send Message
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Contact us 1 END */}
    </div>
  );
}
