import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";


import profile from "../../assets/img/faces/Yura.jpg";

import Header from "../../components/Header/Header";
import Parallax from "../../components/Parallax/Parallax";
import HeaderLinks from "../../components/Header/HeaderLinks";
import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";
import Button from "../../utils/CustomButton/Button";
import Footer from "../../components/Footer/Footer";

import styles from "./profilePagesStyle";
import ScrollButton from "../../utils/ScrollButton/ScrollButton";
import BackButton from "../../utils/ScrollButton/BackButton";
import Tooltip from "@material-ui/core/Tooltip";
import TelegramIcon from "@material-ui/icons/Telegram";
import {SendOutlined} from "@material-ui/icons";
import QuestionSection from "../../components/Question/QuestionSection";
const useStyles = makeStyles(styles);

export default function YuraProfile(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames( classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid );

    return (
        <div>
            <Header color="transparent" brand="Hackers-Inside" rightLinks={<HeaderLinks />} fixed
                    changeColorOnScroll={{ height: 200, color: "white" }} {...rest}/>

            <Parallax small filter image={require("../../assets/img/yura_back.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                    <ScrollButton>
                        <div>
                            <BackButton/>
                            <div className={classes.container}>
                                <GridContainer justify="center">
                                    <GridItem xs={12} sm={12} md={6}>
                                        <div className={classes.profile}>
                                            <div>
                                                <img src={profile} alt="..." className={imageClasses} />
                                            </div>
                                            <div className={classes.name}>
                                                <h3 className={classes.title}>Юра</h3>
                                                <h6>Мастер</h6>

                                                <Tooltip id="instagram-twitter" title="Написать в Telegram">
                                                    <Button justIcon link href="https://t.me/Hacersinside" target="_blank" className={classes.margin5}>
                                                        <TelegramIcon/>
                                                    </Button>
                                                </Tooltip>

                                                <Tooltip id="instagram-tooltip" title="Отслеживать в Instagram">
                                                    <Button justIcon link href="https://www.instagram.com/maxim.zpua/" target="_blank" className={classes.margin5}>
                                                        <i className={"fab fa-instagram"} />
                                                    </Button>
                                                </Tooltip>

                                                <Tooltip id="instagram-twitter" title="Написать в Viber" >
                                                    <Button justIcon link href="viber://add?number=380979107901" target="_blank" className={classes.margin5}>
                                                        <SendOutlined className={classes.icons} />
                                                    </Button>
                                                </Tooltip>

                                            </div>
                                        </div>
                                    </GridItem>
                                </GridContainer>
                                <div className={classes.description}>
                                    <p>
                                        Женщины созданы при запахе цветов, а мужчины паяльника и канифоли){" "}
                                    </p>
                                </div>
                                <GridContainer justify="center">
                                    <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
                                        <p style={{fontWeight: 400, fontSize: "17px"}}>
                                            Недоспанные ночи, запах паяльника и обжигающий глаза свет лампы,
                                            до сих пор являются для меня сладким воспоминанием о тех временах,
                                            когда все только начиналось. Кажется, прошла целая вечность.
                                            Hackers - Inside перерос с чего-то маленького, с идеи двух энтузиастов,
                                            во что-то большее. Во что-то такое, что отнимает все свободное время,
                                            а по окончанию дня, хочется отдать ему еще столько же, вот что для
                                            меня то самое увлечение, ставшее неотъемлемой частью жизни.
                                            И никакие горы денег не заменят улыбку довольного клиента.
                                        </p>

                                        <p style={{fontWeight: 400, fontSize: "17px"}}>
                                            Очень часто, к нам обращаются люди, не для того, чтобы сделать,
                                            а для того, чтобы исправить уже сделанное, и это поистине печально.
                                            Но после, на выходе, когда в  душе сидит твердое понимание того,
                                            что не обманули, объяснили необъяснимое, помогли разложить все по
                                            полочкам, а вдобавок сделали качественно и именно так, как хотелось,
                                            печаль исчезает. Приходит что-то теплое и непостижимое. Это нельзя
                                            купить или продать, это можно заслужить, оставаясь искренним и честным.
                                            Вот, что для меня Hackers - Inside. В него нельзя поверить, его можно
                                            только почувствовать, однажды испытав на себе.
                                        </p>



                                        <p style={{fontWeight: 400, fontSize: "17px"}}>
                                            Важно!!!
                                            Для людей которые ищут ремонт компьютеров, не только на Песках или Космосе,
                                            хватит обращаться к “мастерам, которые живут рядом”, за услугами
                                            “которые стоят дороже, чем сам продукт”, мы стараемся для Вас каждый день не потому,
                                            что жаждем на Вас заработать, а потому, что у нас есть непреодолимое желание решать
                                            проблемы  возникшие со всевозможными гаджетами. Хотя и самыми популярными запросами
                                            являются: настройка и переустановка виндовс; установка антивируса;
                                            усовершенствования компьютера, модернизация ноутбука, ремонт монитора,
                                            ремонт телевизора, настройка телефона, помощь с современными технологиями
                                            людям пенсионного возраста. Но мы знаем, за всей этой рутиной задач,
                                            найдется именно та, над которой придется поломать голову, и она может быть именно Вашей.
                                        </p>

                                        <h6 style={{fontWeight: 400, fontSize: "15px", color: "black"}}>
                                            Также рады сообщить Вам, что, помимо основного отделения, что находится на Песках, в районе “Ромакса”,
                                            в 2020 году мы открыли ещё один сервис в Кушугуме, который в свою очередь, способен покрыть потребности
                                            близлежащих сел( Балабино, Малокатериновка).
                                        </h6>
                                        <h6 style={{fontWeight: 400, fontSize: "15px", color: "darkcyan"}}>
                                            Приходите к нам, и проверьте это на себе. Мы располагаемся на Песках,
                                            остановка транспорта “Ромакс”. Для более детального маршрута, нажмите
                                            кнопку “Посмотреть на карте”, а если нужна консультация, ткните “Позвонить”.
                                        </h6>
                                    </GridItem>
                                </GridContainer>
                                <QuestionSection />
                            </div>
                        </div>
                    </ScrollButton>
                </div>
            <Footer />
        </div>
    );
}
