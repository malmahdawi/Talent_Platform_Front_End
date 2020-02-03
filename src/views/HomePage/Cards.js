import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Schedule from "@material-ui/icons/Schedule";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Subject from "@material-ui/icons/Subject";
import WatchLater from "@material-ui/icons/WatchLater";
import People from "@material-ui/icons/People";
import Business from "@material-ui/icons/Business";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import Delete from "@material-ui/icons/Delete";
import Bookmark from "@material-ui/icons/Bookmark";
import Refresh from "@material-ui/icons/Refresh";
import Receipt from "@material-ui/icons/Receipt";
// core components
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
import color1 from "assets/img/examples/color1.jpg";
import color2 from "assets/img/examples/color2.jpg";
import color3 from "assets/img/examples/color3.jpg";

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
            <GridItem xs={12} sm={7} md={7}>
              <div className={classes.title}>
                <h2>Dynamic Shadows™</h2>
                <h4>
                  Material Kit PRO is coming with the famous colored shadows.
                  That means each image from the cards is getting an unique
                  color shadow. You don{"'"}t have to do anything to activate
                  them, just enjoy the new look of your website.
                </h4>
                <br />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={color1} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${color1})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Warning>
                    <h6 className={classes.cardCategory}>DYNAMIC SHADOWS</h6>
                  </Warning>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      The image from this card is getting a yellow shadow
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={color2} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${color2})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Rose>
                    <h6 className={classes.cardCategory}>DYNAMIC SHADOWS</h6>
                  </Rose>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      The image from this card is getting a pink shadow
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={color3} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${color3})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Info>
                    <h6 className={classes.cardCategory}>DYNAMIC SHADOWS</h6>
                  </Info>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      The image from this card is getting a blue shadow
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
  );
}
