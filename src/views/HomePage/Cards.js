import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// core components
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Rose from "components/Typography/Rose.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

import cardBlog1 from "assets/img/examples/card-blog1.jpg";
import cardBlog2 from "assets/img/examples/card-blog2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardBlog5 from "assets/img/examples/card-blog5.jpg";
import cardBlog6 from "assets/img/examples/card-blog6.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import blog1 from "assets/img/examples/blog1.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import christian from "assets/img/faces/christian.jpg";
import marc from "assets/img/faces/marc.jpg";
import office1 from "assets/img/examples/office1.jpg";
import DigitalMarkting from "assets/img/DigtalMarkting.jpg";
import Music from "assets/img/Music.jpg"; 
import Tech from "assets/img/coding.jpg";
import Design from "assets/img/Design.jpg";
import Video from "assets/img/video.jpg";
import Photo from "assets/img/photo.jpg";

const useStyles = makeStyles(styles);

export default function SectionCards() {
  const [activeRotate1, setActiveRotate1] = React.useState("");
  const [activeRotate2, setActiveRotate2] = React.useState("");
  const [activeRotate3, setActiveRotate3] = React.useState("");
  const classes = useStyles();
  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
      <div>
          <div className={classes.container}>
          <GridContainer>
            <GridItem style={{textAlign: 'center'}} xs={12} sm={12} md={12}>
              <div  className={classes.title}>
                <h2>Categories</h2>
                <br />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>

            <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img style={{height: '270px'}} src={Video} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${Video})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Rose>
                    <h6>Video & Animation</h6>
                  </Rose>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                    Your story's unique. Tell it differently with custom video & animation services
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img style={{height: '270px'}} src={Music} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${Music})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Rose>
                    <h6 className={classes.cardCategory}>Music & Audio</h6>
                  </Rose>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                    You've got a message. Let the world hear it with music, audio & voice services
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img style={{height: '270px'}} src={Tech} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${Tech})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Rose>
                    <h6 className={classes.cardCategory}>Programming & Tech</h6>
                  </Rose>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                    Get all the technical bells and whistles without paying for a programming degree
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img style={{height: '270px'}} src={Design} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${Design})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Rose>
                    <h6 className={classes.cardCategory}>Graphics & Design</h6>
                  </Rose>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        A single place, millions of creative talents
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
            <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img style={{height: '270px'}} src={DigitalMarkting} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${DigitalMarkting})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Rose>
                    <h6 className={classes.cardCategory}>Digital Marketing</h6>
                  </Rose>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                    Update and upgrade your business online <br></br>
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img style={{height: '270px'}} src={Photo} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${Photo})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Rose>
                    <h6 className={classes.cardCategory}>Photography</h6>
                  </Rose>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                    Hire the best freelance Photographers
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
              <GridItem
                md={12}
                sm={12}
                className={classNames(
                  classes.mrAuto,
                  classes.mlAuto,
                  classes.textCenter
                )}
              >
                <Button color="primary" round>
                 MORE     <ArrowRightAltIcon className={classes.icons} ></ArrowRightAltIcon>
                </Button>
                <br></br>
                <br></br>
              </GridItem>
            </GridContainer>
        </div>
      </div>
  );
}
