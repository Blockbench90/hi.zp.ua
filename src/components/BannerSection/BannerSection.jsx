import React from "react";

import { makeStyles } from "@material-ui/core/styles";


import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";

import styles from "./bannerStyle";
const useStyles = makeStyles(styles);

export default function BannerSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>

                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
