import React, { Component } from 'react';
import axios from 'axios';

import API from '../../API'
import { useState, useEffect } from 'react';

import Service from "views/ServicePage/Sictions/Service.js";

// core components
import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(styles);

export default function CategoriesPage() {
  const classes = useStyles();

  let [data, setData] = useState([]);

//   The useEffect() hook fires any time that the component is rendered.
//   An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get(`${API.url}/categories`)
      .then(response => setData(response.data));
  }, []);

  console.log(data);

  return (


    <div>
     
    
    </div>


  )
}
