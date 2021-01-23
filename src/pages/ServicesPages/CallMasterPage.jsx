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

export default function CallMasterPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const imageTop = classNames(classes.imgRaised, classes.imgRoundedRadius, classes.imgFluid);

    return (

        <div>
            <Header color="transparent" brand="Hackers-Inside" rightLinks={<HeaderLinks/>} fixed
                    changeColorOnScroll={{height: 200, color: "white"}} {...rest} />

            <Parallax small filter image={require("../../assets/img/services/call_master/bg.jpg")}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <ScrollButton>

                    <div>
                        <BackButton/>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img style={{width: "250px"}} src={require("../../assets/img/services/call_master/Call_Master2.png")} alt="..." className={imageTop}/>
                                        </div>

                                        <div className={classes.name}>
                                            <h2 className={classes.title}>
                                                Ремонт компьютерной техники в Запорожье
                                            </h2>
                                            <h3 className={classes.subtitle}>
                                                Вызов мастера и диагностика на дому бесплатно,
                                                в случае выполнения любых робот или ремонта.
                                            </h3>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <p style={{fontWeight: 400, fontSize: "17px"}}>
                                        Если вам нужно чтобы мастер просто приехал потратил свое время,
                                        сделал диагностику и сказал вам причину поломки и стоимость ее
                                        устранения, без выполнения работ, то это стоит 150грн.Но так же
                                        вы должны понимать что определенные работы не могут быть выполнены
                                        у вас дома, так как это занимает много времени (6-12часов),
                                        что может принести дискомфорт и вам и мастеру) для этого нужно
                                        приносить к нам в сервис. Если у вас нет такой возможности,
                                        мы можем забрать ваше устройство к нам в сервис а так же привезти
                                        его обратно. (услуга доставки обсуждается индивидуально в
                                        зависимости от района и ситуации).
                                    </p>
                                    <h5>
                                        Мы работаем в Запорожье, по Пескам и Космосу, возможен выезд и дальше,
                                        но только по предварительному одобрению сторон
                                    </h5>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center" xs={12} sm={12} md={12}>
                                <GridItem xs={12} sm={12} md={7} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/call_master/shablon3.png")} alt="..."
                                         style={{width: "350px"}} className={imageTop}/>
                                </GridItem>
                            </GridContainer>
                            <QuestionSection />
                        </div>
                    </div>
                </ScrollButton>
            </div>
            <Footer/>
        </div>

    );
}
