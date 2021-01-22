import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";

import styles from "./servicesStyle";
import ScrollButton from "../../utils/ScrollButton/ScrollButton";
import QuestionSection from "../../components/Question/QuestionSection";
import BackButton from "../../utils/ScrollButton/BackButton";

const useStyles = makeStyles(styles);

export default function ServicePage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const imageTop = classNames(classes.imgRaised, classes.imgRoundedRadius, classes.imgFluid);
    const imageContent = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);

    return (

        <div>
            <Header color="transparent" brand="Hackers-Inside" rightLinks={<HeaderLinks/>} fixed
                    changeColorOnScroll={{height: 200, color: "white"}} {...rest} />

            <Parallax small filter image={require("../../assets/img/services/fix/slick_2.jpg")}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <ScrollButton>
                    <div>
                        <BackButton/>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={require("../../assets/img/services/fix/Fix2.png")} alt="..." className={imageTop}/>
                                        </div>

                                        <div className={classes.name}>
                                            <h2 className={classes.title}>
                                                Ремонт компьютерной техники в Запорожье
                                            </h2>
                                            <h3 className={classes.subtitle}>
                                                Раздавили экран?
                                            </h3>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center" xs={12} sm={12} md={12}>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/fix/leptop1.png")} alt="..."
                                         className={imageContent}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/fix/leptop2.png")} alt="..."
                                         className={imageContent}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/fix/leptop.png")} alt="..."
                                         className={imageContent}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/fix/leptop.png")} alt="..."
                                         className={imageContent}/>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <p style={{fontWeight: 400, fontSize: "17px"}}>
                                        Не стоит отчаиваться! Даже если некие горе-умельцы уже посоветовали Вам выкинуть
                                        и купить
                                        новый,
                                        е
                                    </p>
                                    <h5 style={{textDecoration: "underline"}}>Вот короткий перечень, самых
                                        частовстречаемых проблем, с которыми мы сталкиваемся каждый день:</h5>
                                </GridItem>
                            </GridContainer>
                            <div className={classes.description}>



                            </div>
                            <QuestionSection />
                        </div>
                    </div>
                </ScrollButton>
            </div>
            <Footer/>
        </div>

    );
}
