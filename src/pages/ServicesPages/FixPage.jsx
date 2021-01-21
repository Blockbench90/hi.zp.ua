import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import DoneAllIcon from '@material-ui/icons/DoneAll';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";

import profile from "../../assets/img/services/Fix2.png";

import styles from "./servicesStyle";
import ScrollButton from "../../utils/ScrollButton/ScrollButton";
import QuestionSection from "../../components/Question/QuestionSection";

const useStyles = makeStyles(styles);

export default function FixPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const imageTop = classNames(classes.imgRaised, classes.imgRoundedRadius, classes.imgFluid);
    const imageContent = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);

    return (

        <div>
            <Header color="transparent" brand="Hackers-Inside" rightLinks={<HeaderLinks/>} fixed
                    changeColorOnScroll={{height: 200, color: "white"}} {...rest} />

            <Parallax small filter image={require("../../assets/img/slick_2.jpg")}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <ScrollButton>
                    <div>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={profile} alt="..." className={imageTop}/>
                                        </div>

                                        <div className={classes.name}>
                                            <h2 className={classes.title}>
                                                Ремонт компьютерной техники в Запорожье
                                            </h2>
                                            <h3 className={classes.subtitle}>
                                                Раздавили экран? Залили жидкостью? Уронили? Ноутбук не включается без
                                                всякой причины?
                                            </h3>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center" xs={12} sm={12} md={12}>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/leptop1.png")} alt="..."
                                         className={imageContent}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/leptop2.png")} alt="..."
                                         className={imageContent}/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} className={classes.navWrapper}>
                                    <img src={require("../../assets/img/services/leptop.png")} alt="..."
                                         className={imageContent}/>
                                </GridItem>
                            </GridContainer>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={9}>
                                    <p style={{fontWeight: 400, fontSize: "17px"}}>
                                        Не стоит отчаиваться! Даже если некие горе-умельцы уже посоветовали Вам выкинуть
                                        и купить
                                        новый,
                                        есть смысл обратиться к нам за консультацией или диагностикой, ведь это
                                        бесплатно и Вы
                                        ничего не теряете.
                                        Опыт, необходимое оборудование, налаженные связи с поставщиками комплектующих,
                                        позволяют нам
                                        в сжатые сроки
                                        произвести диагностику и если это целесообразно, ремонт.На проведенные работы по
                                        ремонту
                                        дается гарантия до 3-х месяцев,
                                        а на некоторые установленные комплектующие (память, винчестер HDD, привод DVD)
                                        гарантия от 1
                                        года до 3-х лет!
                                    </p>
                                    <h5 style={{textDecoration: "underline"}}>Вот короткий перечень, самых
                                        частовстречаемых проблем, с которыми мы сталкиваемся каждый день:</h5>
                                </GridItem>
                            </GridContainer>
                            <div className={classes.description}>
                                <ul style={{listStyle: "none", fontWeight: 500, fontSize: "18px", lineHeight: 2}}>
                                    <li>Замена матрицы экрана</li>
                                    <DoneAllIcon color="secondary"/>
                                    <li>Замена клавиатуры (или чистка, отмывка залитой)</li>
                                    <DoneAllIcon color="secondary"/>
                                    <li>Замена аккумулятора (оригинал или лицензия)</li>
                                    <DoneAllIcon color="secondary"/>
                                    <li>Замена винчестера HDD, привода DVD</li>
                                    <DoneAllIcon color="secondary"/>
                                    <li>Замена оперативной памяти</li>
                                    <DoneAllIcon color="secondary"/>
                                    <li>Замена шлейфов (матрицы, клавиатуры)</li>
                                    <DoneAllIcon color="secondary"/>
                                    <li>Прошивка BIOS</li>
                                    <DoneAllIcon color="secondary"/>
                                    <li>Сброс забытого пароля BIOS</li>
                                    <DoneAllIcon color="secondary"/>
                                    <li>Чистка системы охлаждения ноутбука и замена термоинтерфейсов</li>
                                    <DoneAllIcon color="secondary"/>
                                    <li>Ремонт материнских плат ноутбука, включая пересадку чипов северного и южного
                                        мостов
                                    </li>
                                    <DoneAllIcon color="secondary"/>
                                    <li>Ремонт ноутбучных видеокарт, включая пересадку чипа видеокарты и чипов
                                        видеопамяти
                                    </li>
                                    <DoneAllIcon color="secondary"/>
                                    <li>Ремонт подсветки матрицы, включая замену ламп подсветки</li>
                                    <DoneAllIcon color="secondary"/>
                                    <li>Любые другие виды ремонта (перепайка разъемов, замена WI-Fi модуля и др.)</li>
                                    <DoneAllIcon color="secondary"/>
                                </ul>
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
