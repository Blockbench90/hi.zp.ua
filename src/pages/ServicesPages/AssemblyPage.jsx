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

export default function AssemblyPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const imageTop = classNames(classes.imgRaised, classes.imgRoundedRadius, classes.imgFluid);

    return (

        <div>
            <Header color="transparent" brand="Hackers-Inside" rightLinks={<HeaderLinks/>} fixed
                    changeColorOnScroll={{height: 200, color: "white"}} {...rest} />

            <Parallax small filter image={require("../../assets/img/services/assembly/bg.jpg")}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <ScrollButton>

                    <div>
                        <BackButton/>
                        <div className={classes.container}>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={require("../../assets/img/services/assembly/remont.jpg")} alt="..." className={imageTop}/>
                                        </div>

                                        <div className={classes.name}>
                                            <h2 className={classes.title}>
                                                Hackers - Inside поможет...
                                            </h2>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <h3>Собрать новый ПК</h3>
                                    <p style={{fontWeight: 400, fontSize: "17px"}}>
                                        Мы можем собрать для Вас новый компьютер, исходя из ваших желаний,
                                        предпочтений и, естественно, кошелька. Весь процесс сборки чем-то
                                        схож с заказом вина в ресторане, где мы выполняем роль учтивого и
                                        всезнающего сомелье с единственным отличием! Мы не будем пытаться
                                        продать самую дорогую бутылку, мы приложим весь опыт и знания, чтобы
                                        подобрать оптимальный вариант, специально под Вас. Далее последует
                                        процесс «готовки»: непосредственно сборка, установка нужного софта
                                        (программ), тесты, доставка (если потребуется), и как минимум три
                                        года гарантии.
                                    </p>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <h3>Модернизировать старый ПК</h3>
                                    <p style={{fontWeight: 400, fontSize: "17px"}}>
                                        Можно не прибегать к сборке нового компьютера, если старый еще борозды
                                        не портит, а всего-навсего требует небольшого усовершенствования.
                                        Зачем покупать новый, если блок питания сбоит. Меняем его, опять-таки,
                                        только из всеобщего согласия и нашего опыта, и наслаждаемся дальнейшей
                                        работой.
                                    </p>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <h3>Сделать сложный выбор</h3>
                                    <p style={{fontWeight: 400, fontSize: "17px"}}>
                                        Решили купить новый ноутбук или собрать ПК, пришли в магазин и ваши
                                        глаза разошлись по сторонам от невообразимого ассортимента, а голова
                                        пошла кругом, когда принялись изучать характеристики, чтобы не переплатить
                                        и купить нужное. Если узнали в этих строках себя, тогда знайте еще кое-что
                                        , Вы не одни. К нам очень часто обращаются за такого рода помощью и это нормально.
                                        Мы считаем, что изучать все нюансы технического мира перед покупкой вашего
                                        бедующего устройства, не только бессмысленно, но и нецелесообразно. И нужно понимать,
                                        все очень быстро меняется, и быть в курсе всех it-новинок и стабильности их работы
                                        могут знать только люди который работают в этой сфере или просидеть не один день
                                        читая статьи и форумы. Предоставьте это нам, ведь мы живем, дышим и наслаждаемся
                                        своей работой и с радостью поможем Вам в выборе.
                                    </p>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <h3>Предоставить помощь в продаже старого ПК</h3>
                                    <p style={{fontWeight: 400, fontSize: "17px"}}>
                                        Не беда, и на этот вопрос у нас ответ имеется. Мы ценим и с огромным уважением
                                        относимся ко всем нашим клиентам, поэтому поможем с реализацией старого. Вместе
                                        примем решение о цене, выставим на витрину, и в случае продажи, что бывает в 99%
                                        случаев, возвращаем честно заработанные Вами деньги. Зачем оно нам надо? Все очень
                                        просто. Довольный клиент, радость для нас.
                                    </p>
                                </GridItem>
                            </GridContainer>
                            <div className={classes.description}>
                                <h4>
                                Если Вы живете в Запорожье, будь то Пески или Космос, ниже есть кнопка позвонить,
                                или написать нам в Telegram. Жмите и мы постараемся Вам помочь)
                                </h4>
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
