import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/core icons
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
// core components
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";


import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.js";

const useStyles = makeStyles(style);

export default function CheckOffersTable(props) {
  console.log(props);


  console.log(data);
  
  
  const classes = useStyles();
  const pendingButtons = (id) => { return [
    { color: "success", icon: Check, onClick: (event, tableRow) => {
      console.log(event);
      console.log(tableRow);
    } },
    { color: "danger", icon: Clear }
  ].map((prop, key) => {
    return (
      <Button justIcon size="sm" color={prop.color} key={key} id={id} onClick={()=>props.handleAction(key,id)}>
        <prop.icon />
      </Button>
    );
  })
}
  const data = props.offers.map(e =>{
    let arr = [e.id, e.user_id, e.price, e.location, e.time, e.description, e.status]
    if (e.status == "pending") {
      arr.push(pendingButtons(e.id))
    }else{
      arr.push(`Offer is ${e.status}`)
    }
    return arr
  })
  return (
        <>
          <GridItem
            xs={12}
            sm={10}
            md={8}
            className={classes.mrAuto + " " + classes.mlAuto}
          >
            <Table
              tableHead={[
                "#",
                "User Id",
                "Price",
                "Location",
                "Time",
                "Description",
                "Status",
                "Actions"
              ]}
              tableData={data}

            />
          </GridItem>
        </>
  );
}
