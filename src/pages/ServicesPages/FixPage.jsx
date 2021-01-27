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

import styles from "./serviceStyle/servicesStyle";
import ScrollButton from "../../utils/ScrollButton/ScrollButton";
import QuestionSection from "../../components/Question/QuestionSection";
import BackButton from "../../utils/ScrollButton/BackButton";

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

            <Parallax small filter image={require("../../assets/img/services/fix/bg.jpg")}/>
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
                                                Раздавили экран? Залили жидкостью? Уронили? Ноутбук не включается без
                                                всякой причины?
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
                                    <li><h6>Замена матрицы экрана</h6></li>
                                    <DoneAllIcon color="secondary"/>
                                    <li><h6>Замена клавиатуры (или чистка, отмывка залитой)</h6></li>
                                    <DoneAllIcon color="secondary"/>
                                    <li><h6>Замена аккумулятора (оригинал или лицензия)</h6></li>
                                    <DoneAllIcon color="secondary"/>
                                    <li><h6>Замена винчестера HDD, привода DVD</h6></li>
                                    <DoneAllIcon color="secondary"/>
                                    <li><h6>Замена оперативной памяти</h6></li>
                                    <DoneAllIcon color="secondary"/>
                                    <li><h6>Замена шлейфов (матрицы, клавиатуры)</h6></li>
                                    <DoneAllIcon color="secondary"/>
                                    <li><h6>Прошивка BIOS</h6></li>
                                    <DoneAllIcon color="secondary"/>
                                    <li><h6>Сброс забытого пароля BIOS</h6></li>
                                    <DoneAllIcon color="secondary"/>
                                    <li><h6>Чистка системы охлаждения ноутбука и замена термоинтерфейсов</h6></li>
                                    <DoneAllIcon color="secondary"/>
                                    <li><h6>Ремонт материнских плат ноутбука, включая пересадку чипов северного и южного
                                        мостов</h6>
                                    </li>
                                    <DoneAllIcon color="secondary"/>
                                    <li><h6>Ремонт ноутбучных видеокарт, включая пересадку чипа видеокарты и чипов
                                        видеопамяти</h6>
                                    </li>
                                    <DoneAllIcon color="secondary"/>
                                    <li><h6>Ремонт подсветки матрицы, включая замену ламп подсветки</h6></li>
                                    <DoneAllIcon color="secondary"/>
                                    <li><h6>Любые другие виды ремонта (перепайка разъемов, замена WI-Fi модуля и др.)</h6> </li>
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
