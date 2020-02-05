import React from "react";
import ManageServiceCard from "./ManageServiceCard.js"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// core components
import Button from "components/CustomButtons/Button.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

const useStyles = makeStyles(projectsStyle);

export default function ManageServiceItem(props, {...rest}) {

    const services = props.services.services.map((s,i) => <ManageServiceCard service={s} key={i}/>)

    const classes = useStyles();
    return (
        <div className="cd-section" {...rest}>
            <div className={classes.projects}>
                <div className={classes.container}>
                    <GridContainer>
                        {services}
                        <div className={classes.container}>
                            <Link to="/add-new-service" >
                                <Button
                                    color={"danger"}
                                    round
                                >
                                    Add New Service
                                    {/* <Home className={classes.icons} /> Home */}
                                </Button>
                            </Link>
                        </div>
                    </GridContainer>
                </div>
            </div>
        </div>
    )
}
