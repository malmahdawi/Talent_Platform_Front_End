
import React, { Component } from 'react';
import axios from 'axios';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import gucci from "assets/img/examples/gucci.jpg";
import classNames from "classnames";
import Tooltip from "@material-ui/core/Tooltip";
import Favorite from "@material-ui/icons/Favorite";

// core components
import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';



// const useStyles = withStyles(styles);

   const useStyles = theme => ({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
      });

class ServiceItemParent extends Component {

     
    render (){
        const { classes } = this.props;
        return(


            <div>

<GridContainer>
        
          <GridItem md={4} sm={4}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={gucci} alt="mohammed" />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${gucci})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Service Name :</h4>
                <p className={classes.cardDescription}>
                  Description :
                
                </p>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    price range :   per Hour
                  </span>

                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
  
      </GridContainer>

            </div>
        )
    }

}

export default  withStyles(useStyles) (ServiceItemParent);