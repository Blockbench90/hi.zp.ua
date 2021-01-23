import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Chat, DoneAll, AddIcCall, ImportantDevices, Build, Accessible, BusinessCenter, Error, Computer} from '@material-ui/icons';
import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";
import CustomTabs from "../../utils/CustomTabs/CustomTabs";

import styles from "./servicesStyle";

const useStyles = makeStyles(styles);

export default function ServicesSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <div id="nav-tabs">
                    <h3 style={{textAlign: 'center'}}>Услуги</h3>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomTabs
                                headerColor="primary"
                                tabs={[
                                    {
                                        tabName: "Ремонт",
                                        tabPath: '/fix',
                                        tabIcon: BusinessCenter,
                                        tabContent: (
                                            <div className={classes.textCenter}>
                                                <h6 >
                                                    Раздавили экран? Залили жидкостью? Уронили? Ноутбук не включается без
                                                    всякой причины?
                                                </h6>
                                                <p>
                                                    Не стоит отчаиваться! Даже если некие горе-умельцы уже посоветовали Вам выкинуть
                                                    и купить новый, есть смысл обратиться к нам за консультацией или диагностикой, ведь это
                                                    бесплатно и Вы ничего не теряете. Опыт, необходимое оборудование, налаженные связи с поставщиками комплектующих,
                                                    позволяют нам в сжатые сроки произвести диагностику и если это целесообразно, ремонт.На проведенные работы по
                                                    ремонту дается гарантия до 3-х месяцев, а на некоторые установленные комплектующие (память, винчестер HDD, привод DVD)
                                                    гарантия от 1 года до 3-х лет!
                                                </p>
                                            </div>
                                        )
                                    },
                                    {
                                        tabName: "Обслуживание",
                                        tabPath: '/service',
                                        tabIcon: Error,
                                        tabContent: (
                                            <div className={classes.textCenter}>
                                                <h6 >
                                                    Ошибочно считать, что переустановка операционной системы, решает все проблемы!
                                                </h6>
                                                <p>
                                                    Каждый компьютер, ноутбук или тот же принтер, нуждается в обслуживании точно так же,
                                                    как и машина. Да, компьютер потребляет электричество, а не бензин, но масло все же менять
                                                    обязательно. Случалось ли такое, что компьютер после небольшой нагрузки выключался.
                                                    Ни с того, ни с сего, без спросу и разрешения, просто бац и потух? Или он начинает замедляться,
                                                    замедляться, замедляться, и вот он уже включается 5 минут, вкладки в браузере загружаются по пол
                                                    часа, вы грешите на плохой интернет, перезагружаете роутер, а эффекта ноль? Или шум вентиляторов
                                                    начинает давить на уши, словно вы стоите возле мощной, гудящей вытяжки? Все возможно, и даже больше,
                                                    до боли нам знакомо.
                                                </p>
                                            </div>
                                        )
                                    }
                                ]}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomTabs
                                headerColor="primary"
                                tabs={[
                                    {
                                        tabName: "Программы",
                                        tabPath: '/support',
                                        tabIcon: ImportantDevices,
                                        tabContent: (
                                            <p className={classes.textCenter}>
                                                Обновить, переустановить, удалить, почистить - это все к нам!
                                                Если вы сами не можете разобраться что к чему, мы разберемся со 100% гарантией,
                                                ну или предложим варианты устранения неполадки, и только Вам решать как лучше.
                                                Смело жмите на кнопку позвонить, или загляните в наши контакты, постараемся Вам помочь.
                                            </p>
                                        )
                                    },
                                    {
                                        tabName: "Сборка ПК",
                                        tabPath: '/assembly',
                                        tabIcon: Computer,
                                        tabContent: (
                                            <p>
                                                <h5 style={{fontWeight: 600}}><DoneAll color="secondary"/>Собрать новый ПК</h5>
                                                <h5 style={{fontWeight: 600}}><DoneAll color="secondary"/>Модернизировать старый</h5>
                                                <h5 style={{fontWeight: 600}}><DoneAll color="secondary"/>Помочь выбрать новый</h5>
                                                <h5 style={{fontWeight: 600}}><DoneAll color="secondary"/>Помочь продать старый</h5>
                                            </p>
                                        )
                                    }
                                ]}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomTabs
                                headerColor="primary"
                                tabs={[
                                    {
                                        tabName: "Вызов мастера",
                                        tabPath: '/master',
                                        tabIcon: AddIcCall,
                                        tabContent: (
                                            <p className={classes.textCenter}>
                                                Вызов мастера и диагностика на дому бесплатно,
                                                в случае выполнения любых робот или ремонта.
                                            </p>
                                        )
                                    },
                                    {
                                        tabName: "Для чайников",
                                        tabPath: '/zero',
                                        tabIcon: Accessible,
                                        tabContent: (
                                            <p className={classes.textCenter}>
                                                Не всем дано быть опытными пользователями современной техники,
                                                так что переживать тут не о чем. Этот раздел создан именно для
                                                такой категории людей. Перед тем как звонить нам, сделайте
                                                несколько рекомендаций. В 90% случаев простые шаги
                                                помогают исправить большинство проблем.
                                            </p>
                                        )
                                    }
                                ]}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomTabs
                                headerColor="primary"
                                tabs={[
                                    {
                                        tabName: "Messages",
                                        path: '/profile',
                                        tabIcon: Chat,
                                        tabContent: (
                                            <p className={classes.textCenter}>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. I will be the leader of a company
                                                that ends up being worth billions of dollars, because I
                                                got the answers. I understand culture. I am the nucleus.
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at.
                                            </p>
                                        )
                                    },
                                    {
                                        tabName: "Settings",
                                        path: '/profile',
                                        tabIcon: Build,
                                        tabContent: (
                                            <p className={classes.textCenter}>
                                                think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.
                                            </p>
                                        )
                                    }
                                ]}
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
