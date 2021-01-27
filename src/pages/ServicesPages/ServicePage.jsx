import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";
import ScrollButton from "../../utils/ScrollButton/ScrollButton";
import QuestionSection from "../../components/Question/QuestionSection";
import BackButton from "../../utils/ScrollButton/BackButton";

import styles from "./serviceStyle/servicesStyle";

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

            <Parallax small filter image={require("../../assets/img/services/service/bg.jpg")}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <ScrollButton>
                    <div>
                        <BackButton/>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={require("../../assets/img/services/service/pillll.jpg")} alt="..." className={imageTop}/>
                                        </div>

                                        <div className={classes.name}>
                                            <h2 className={classes.title}>
                                                Ошибочно считать, что переустановка операционной системы, решает все проблемы
                                            </h2>
                                            <h3 className={classes.subtitle}>
                                                Если коротко и по делу, то....
                                            </h3>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center" xs={12} sm={12} md={12}>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/service/Rep.png")} alt="..."
                                         className={imageContent}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/service/Rep1.png")} alt="..."
                                         className={imageContent}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/service/Rep2.png")} alt="..."
                                         className={imageContent}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/service/Rep3.png")} alt="..."
                                         className={imageContent}/>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <p style={{fontWeight: 400, fontSize: "17px"}}>
                                        Каждый компьютер, ноутбук или тот же принтер, нуждается в обслуживании
                                        точно так же, как и машина. Да, компьютер потребляет электричество, а не
                                        бензин, но масло все же менять обязательно. Случалось ли такое, что компьютер
                                        после небольшой нагрузки выключался. Ни с того, ни с сего, без спросу и разрешения,
                                        просто бац и потух? Или он начинает замедляться, замедляться, замедляться, и вот
                                        он уже включается 5 минут, вкладки в браузере загружаются по пол часа, вы
                                        грешите на плохой интернет, перезагружаете роутер, а эффекта ноль? Или
                                        шум вентиляторов начинает давить на уши, словно вы стоите возле мощной,
                                        гудящей вытяжки? Все возможно, и даже больше, до боли нам знакомо. Ошибочно
                                        считать, что компьютер должен просто работать и ухаживать за ним нету смысла.
                                        Мы уже проводили аналогию с автомобилем, но если говорить по факту, сухо и
                                        без преувеличений, то для того, чтобы Ваш верный конь, не бегал, а летал,
                                        требуется регулярная чистка забившихся от пыли вентиляторов, замена термопасты
                                        на процессоре, видеокарте, раз в год переустановка операционной системы и многое
                                        другое. В большинстве своем, перечисленные процедуры не требуют большого ума,
                                        и вы в силах сами проделывать это дома, но есть одно НО! Во-первых, это трудозатратный
                                        процесс, отбирает кучу сил и времени, особенно по неопытности, и чреват
                                        катастрофическими последствиями, если вдруг дрогнула рука. Выбор за вами,
                                        поиграть в «Очумелые ручки», или поручить эту затею тем, кто проделывает
                                        это по сотню раз на дню, и у кого рука точно не дрогнет.
                                    </p>
                                    <h5>
                                        Если Вы живете в Запорожье, будь то Пески или Космос, ниже есть кнопка позвонить,
                                        или написать нам в Telegram. Жмите и мы постараемся Вам помочь)
                                    </h5>
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
