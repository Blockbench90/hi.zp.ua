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

export default function ZeroPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const imageTop = classNames(classes.imgRaised, classes.imgRoundedRadius, classes.imgFluid);

    return (

        <div>
            <Header color="transparent" brand="Hackers-Inside" rightLinks={<HeaderLinks/>} fixed
                    changeColorOnScroll={{height: 200, color: "white"}} {...rest} />

            <Parallax small filter image={require("../../assets/img/services/zero/bg.jpg")}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <ScrollButton>

                    <div>
                        <BackButton/>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={require("../../assets/img/services/zero/gm.png")} alt="..." className={imageTop}/>
                                        </div>

                                        <div className={classes.name}>
                                            <h2 className={classes.title}>
                                                Ремонт компьютерной техники в Запорожье
                                            </h2>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <p style={{fontWeight: 600, fontSize: "25px", textAlign: "center"}}>
                                        1. Проверьте надежность подключения кабелей.
                                    </p>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center" xs={12} sm={12} md={12}>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img style={{width: "250px"}} src={require("../../assets/img/services/zero/zero1.png")} alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img style={{width: "250px"}} src={require("../../assets/img/services/zero/zero2.png")} alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img style={{width: "250px"}} src={require("../../assets/img/services/zero/zero3.png")} alt="..."
                                         className={imageTop}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img style={{width: "250px"}} src={require("../../assets/img/services/zero/zero4.png")} alt="..."
                                         className={imageTop}/>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <p style={{fontWeight: 600, fontSize: "25px", textAlign: "center", marginTop: "20px"}}>
                                        2. Перезагрузите ваше устройство.
                                        <p style={{marginTop: "20px", fontSize: "22px"}}>Выключите, подождите 5 минут, и включите снова.
                                        Если ваше устройство питается от сети, после выключения,
                                        вытяните вилку из розетки и также подождите 5 минут.
                                        Если это не помогло, смело звоните нам.</p>
                                    </p>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <p style={{fontWeight: 600, fontSize: "25px", textAlign: "center", marginTop: "20px"}}>
                                        3. Возник вопрос, первым делом прочтите в <a href="https://google.com" style={{color: "red", marginRight: "5px"}}>Google</a>
                                        или посмотрите на <a href="https://www.youtube.com" style={{color: "red", marginRight: "5px"}}>YouTube</a>.
                                        <p style={{marginTop: "20px", fontSize: "22px"}}>
                                            Не стоит сразу же звонить нам, первым делом введите ваш вопрос в
                                            поисковое поле и прочтите хотя-бы первых пять ответов и только потом,
                                            если не удалось решить проблему, звоните нам.</p>
                                    </p>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <p style={{fontWeight: 600, fontSize: "25px", textAlign: "center", fontStyle: "italic", color: "darkseagreen"}}>
                                        Вопрос: У меня не включается, сколько стоит ремонт?
                                        <p style={{marginTop: "20px", fontSize: "22px", fontStyle: "italic"}}>
                                            Вы должны понимать, нужна диагностика, чтобы понять причину и устранить.
                                        </p>
                                    </p>
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
