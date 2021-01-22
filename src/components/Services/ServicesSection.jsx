import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import {BusinessCenter, Error} from '@material-ui/icons';


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
