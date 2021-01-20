import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";
import Button from "../../utils/CustomButton/Button";

import yura from "../../assets/img/YuraProfileInfo.jpg";
import max from "../../assets/img/MaxProfileInfo.jpg";

import styles from "./exampleStyle";
const useStyles = makeStyles(styles);

export default function ExamplesSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="center">

                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="max-profile" className={classes.link}>
                            <img src={max} alt="..." className={classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid}/>
                            <Button color="primary" size="lg" simple>
                                Посмотреть профиль
                            </Button>
                        </Link>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="yura-profile" className={classes.link}>
                            <img src={yura} alt="..." className={classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid}/>
                            <Button color="primary" size="lg" simple>
                                Посмотреть профиль
                            </Button>
                        </Link>
                    </GridItem>

                </GridContainer>
            </div>
        </div>
    );
}
