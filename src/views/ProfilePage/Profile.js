/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Comment from "@material-ui/icons/Comment";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";

import christian from "assets/img/faces/christian.jpg";
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Talent Platform"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info"
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/examples/city.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={christian} alt="صورة اليوزر" className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>هنا اليوزر نيم</h3>
                  <h5>الإيميل المسجل فيه</h5>
                  <h6>بائع | مشتري</h6>
                  <Button
                    justIcon
                    simple
                    color="facebook"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="primary"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="twitter"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                </div>
              </div>
              {/* ---------------------------------------------------------------------- زر المتابعة */}
              {/* <div className={classes.follow}>
                <Tooltip
                  id="tooltip-top"
                  title="Follow this user"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    round
                    color="primary"
                    className={classes.followButton}
                  >
                    <Add className={classes.followIcon} />
                  </Button>
                </Tooltip>
              </div> */}
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              هنا الإباوت مي{" "}
            </p>
          </div>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Comments",
                  tabIcon: Comment,
                  tabContent: (
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={7}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Latest Comments:</h4>
                        
                        <GridContainer className={classes.collections}>
      
                          <div className={classes.add}>
                              <Tooltip
                                // id="tooltip-top"
                                title="Add Comment"
                                placement="top"
                                classes={{ tooltip: classes.tooltip }}
                                >
                                  <Button
                                   justIcon
                                   round
                                   color="primary"
                                   className={classes.followButton}
                                  >
                                    <Add className={classes.followIcon} />
                                  </Button>
                              </Tooltip>
                            </div>
                          
                          <div className={classes.add}>
                              <Tooltip
                                // id="tooltip-top"
                                title="Edit Comment"
                                placement="top"
                                classes={{ tooltip: classes.tooltip }}
                                >
                                  <Button
                                   justIcon
                                   round
                                   color="primary"
                                   className={classes.followButton}
                                  >
                                    <EditIcon className={classes.followIcon} />
                                  </Button>
                              </Tooltip>
                            </div>
                          
                          <div className={classes.add}>
                              <Tooltip
                                // id="tooltip-top"
                                title="Delete Comment"
                                placement="top"
                                classes={{ tooltip: classes.tooltip }}
                                >
                                  <Button
                                   justIcon
                                   round
                                   color="primary"
                                   className={classes.followButton}
                                  >
                                    <DeleteIcon className={classes.followIcon} />
                                  </Button>
                              </Tooltip>
                            </div>
                          
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + mariyaGeorgieva + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                              <Badge color="info" className={classes.badge}>
                                <a href="#pablo">commenter username</a>
                                </Badge>
                                <p className={classes.cardTitleWhite}>
                                    text text text text text text text text text text text text
                                    limited to text counter ..
                                </p>
                                <span>date stamp</span>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + clemOnojegaw + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="info" className={classes.badge}>
                                <a href="#pablo">commenter username</a>
                                </Badge>
                                <p className={classes.cardTitleWhite}>
                                    text text text text text text text text text text text text
                                    limited to text counter ..
                                </p>
                                <span>date stamp</span>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + oluEletu + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                              <Badge color="info" className={classes.badge}>
                                <a href="#pablo">commenter username</a>
                                </Badge>
                                <p className={classes.cardTitleWhite}>
                                    text text text text text text text text text text text text
                                    limited to text counter ..
                                </p>
                                <span>date stamp</span>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + darrenColeshill + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                              <Badge color="info" className={classes.badge}>
                                <a href="#pablo">commenter username</a>
                                </Badge>
                                <p className={classes.cardTitleWhite}>
                                    text text text text text text text text text text text text
                                    limited to text counter ..
                                </p>
                                <span>date stamp</span>
                              </CardBody>
                            </Card>
                          </GridItem>
                          
                        </GridContainer>
                      </GridItem>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={2}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Stats</h4>
                        <ul className={classes.listUnstyled}>
                          <li>
                            Join date: <b>dateStamp</b>
                          </li>
                          
                          <li>
                            Rating: <b>5 / 5</b>
                          </li>

                        </ul>
                        <hr />
                        <h4 className={classes.title}>Genre</h4>
                        <Badge color="primary">Iraqi</Badge>
                        <Badge color="rose">Egyptian</Badge>
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Media",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={mariyaGeorgieva}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={clemOnojegaw}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={clemOnojeghuo}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={oluEletu}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={cynthiaDelRio}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                }
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-profile"
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
                href="https://www.creative-tim.com?ref=mkpr-profile"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
