import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import TelegramIcon from '@material-ui/icons/Telegram';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../utils/CustomButton/Button";
import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";

import profile from "../../assets/img/faces/Max.jpg";

import styles from "./profilePagesStyle";
import {SendOutlined} from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import QuestionSection from "../../components/Question/QuestionSection";
import ScrollButton from "../../utils/ScrollButton/ScrollButton";
import BackButton from "../../utils/ScrollButton/BackButton";

const useStyles = makeStyles(styles);

export default function MaxProfile(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    return (
        <div>
            <Header color="transparent" brand="Hackers-Inside" rightLinks={<HeaderLinks />} fixed
                    changeColorOnScroll={{height: 200, color: "white"}} {...rest} />

            <Parallax small filter image={require("../../assets/img/slick_11.jpg")} />
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
                                        <h3 className={classes.title}>Максим</h3>
                                        <h6>Мастер, учредитель</h6>

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
                                Когда-то, давным давно, услышал фразу: "Найди работу по душе, и ты никогда в жизни не будешь работать"!
                                И знаете что? Оказывается, я в пожизненном отпуске){" "}
                            </p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
                                <p style={{fontWeight: 400, fontSize: "17px"}}>
                                    Уже более 15 лет, в сфере продаж и обслуживания цифровой техники, мы
                                    гордо держим планку ответственных и надежных партнеров для каждого из
                                    наших клиентов, чему свидетельствуют Ваши положительные отзывы. Но как
                                    и любая другая компания, начинали мы с маленького гаража, пары клиентов,
                                    переполненные уверенностью в себе и жаждой побед на этом поприще.
                                    И лишь благодаря упорству, любви к своей профессии и постоянному желанию
                                    расти и развиваться, теперь покрываем весь город, предоставляя качество,
                                    взамен искренней радости наших клиентов.
                                </p>

                                <p style={{fontWeight: 400, fontSize: "17px"}}>
                                    Наша небольшая команда, в основе своей, состоит из людей, проживающих
                                    в Коммунарском районе. И так уж географически сложилось, что и сервис
                                    открылся на Песках и большую часть уважения в лице любимых клиентов,
                                    заработали именно там.
                                    Ведь всегда готовы прийти на помощь, даже в самых патовых ситуациях.
                                    Плодами  такого отношения, стало доверие не только среди наших клиентов,
                                    но и среди поставщиков, сервисов по ремонту спецтехники, оптовиками,
                                    розничными сетями, что занимаются продажей компьютеров, ноутбуков,
                                    телефонов планшетов, телевизоров и прочего.
                                </p>
                                <p style={{fontWeight: 400, fontSize: "17px"}}>
                                    Согласен, Пески и Космос занимают не такую уж и большую часть нашего
                                    любимого города, но осуществлять ремонт в этих районах приходится довольно
                                    часто. Что несомненно играет нам на руку, так как, было сказано выше, мы почти
                                    Ваши соседи.
                                    <h6 style={{fontWeight: 400, fontSize: "15px", color: "black"}}>Вызов мастера на дом, очень востребованная услуга, но увы, не все можно сделать
                                    у Вас дома, без спец оборудования. Поэтому, мы по максимуму выполняем все, что возможно,
                                    а в случае потребности серьезного вмешательства, забираем в сервис, для более детального изучения.
                                    Максимальный спектр услуг, возможный в таких ограниченных условиях, это: диагностика,
                                    исправление поверхностных повреждений, настройка, установка всевозможного программного обеспечения,
                                    замена расходников, чистка, консультация.</h6>
                                </p>
                                <h6 style={{fontWeight: 400, fontSize: "15px", color: "black"}}>
                                    Также рады сообщить Вам, что, помимо основного отделения, что находится на Песках, в районе “Ромакса”,
                                    в 2020 году мы открыли ещё один сервис в Кушугуме, который в свою очередь, способен покрыть потребности
                                    близлежащих сел( Балабино, Малокатериновка).
                                </h6>
                                <p style={{fontWeight: 400, fontSize: "17px"}}>
                                    Дорогой читатель, прочитав эту статью,  поделитесь с друзьями и знакомыми,  сделай свой вклад
                                    в дальнейшее развитие нас как профессионалов, ведь мы стараемся для Вас.
                                    Стараемся делать лучшие цены, повышать и без того безупречное качество, находить все более
                                    тонкий подход к каждому клиенту и продолжим улучшаться, отдаляя границы далеко за грани Ваших ожиданий.
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
                                <h6 style={{fontWeight: 400, fontSize: "15px", color: "darkcyan"}}>
                                    И да, не верьте словам, приходите и проверяйте, будем рады.
                                    Сервис находится в Южном микрорайоне города Запорожье ("Пески", остановка транспорта “Ромакс”).
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
