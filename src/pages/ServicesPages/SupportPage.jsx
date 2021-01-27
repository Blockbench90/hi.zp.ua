import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";

import styles from "./serviceStyle/servicesStyle";
import ScrollButton from "../../utils/ScrollButton/ScrollButton";
import QuestionSection from "../../components/Question/QuestionSection";
import BackButton from "../../utils/ScrollButton/BackButton";

const useStyles = makeStyles(styles);

export default function SupportPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const imageTop = classNames(classes.imgRaised, classes.imgRoundedRadius, classes.imgFluid);
    const imageContent = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);

    return (

        <div>
            <Header color="transparent" brand="Hackers-Inside" rightLinks={<HeaderLinks/>} fixed
                    changeColorOnScroll={{height: 200, color: "white"}} {...rest} />

            <Parallax small filter image={require("../../assets/img/services/programs/bg.png")}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <ScrollButton>
                    <div>
                        <BackButton/>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={require("../../assets/img/services/programs/programs_list.jpg")}
                                                 alt="..." className={imageTop}/>
                                        </div>

                                        <div className={classes.name}>
                                            <h2 className={classes.title} style={{fontSize: '1.45rem'}}>
                                                Работаем со всеми самыми распространенными операционными системами
                                            </h2>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center" xs={12} sm={12} md={12}>
                                <GridItem xs={12} sm={12} md={2} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/OS/Android.png")} alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/OS/iOS.png")} alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/OS/Windows.png")} alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/OS/Linux.png")} alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/OS/MacOS.png")} alt="..."
                                         className={imageTop}/>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <h5 style={{textAlign: "center", fontWeight: 600}}>Установить антивирус?
                                        Пожалуйста...</h5>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center" xs={12} sm={12} md={12}>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/antivirus/avast.png")}
                                         alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/antivirus/360.png")} alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/antivirus/beer.png")}
                                         alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/antivirus/Dr.web.png")}
                                         alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/antivirus/eset.png")}
                                         alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/antivirus/Kasper.png")}
                                         alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/antivirus/Mack.png")}
                                         alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/antivirus/panda.png")}
                                         alt="..."
                                         className={imageTop}/>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <h5 style={{textAlign: "center", fontWeight: 600}}>Установить или обновить
                                        програмное обеспичение? Пожалуйста...</h5>
                                </GridItem>
                            </GridContainer>


                            <GridContainer justify="center" xs={12} sm={12} md={12}>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/icons/exel.png")} alt="..."
                                         className={imageContent} style={{width: '75px'}}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/icons/google.png")} alt="..."
                                         className={imageContent} style={{width: '75px'}}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/icons/mediaget.png")} alt="..."
                                         className={imageContent} style={{width: '75px'}}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/icons/microsoft.png")} alt="..."
                                         className={imageContent} style={{width: '75px'}}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/icons/mozilla.png")} alt="..."
                                         className={imageContent} style={{width: '75px'}}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/icons/office.png")} alt="..."
                                         className={imageContent} style={{width: '75px'}}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/icons/opera.png")} alt="..."
                                         className={imageContent} style={{width: '75px'}}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/icons/Photoshop.png")} alt="..."
                                         className={imageContent} style={{width: '75px'}}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/icons/promierPro.png")} alt="..."
                                         className={imageContent} style={{width: '75px'}}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/icons/skype.png")} alt="..."
                                         className={imageContent} style={{width: '75px'}}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/icons/uTorrent.png")} alt="..."
                                         className={imageContent} style={{width: '75px'}}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={1} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/programs/icons/veber.png")} alt="..."
                                         className={imageContent} style={{width: '75px'}}/>
                                </GridItem>
                            </GridContainer>

                            <div className={classes.description}>
                                <h4>
                                Пески, Космос, Запорожье, звоните или пишите, будем рады
                                </h4>
                            </div>
                            <QuestionSection/>
                        </div>
                    </div>
                </ScrollButton>
            </div>
            <Footer/>
        </div>

    );
}
