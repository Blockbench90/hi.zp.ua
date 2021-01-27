import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Accessible, AddIcCall, BusinessCenter, Computer, DoneAll, Error, ImportantDevices} from '@material-ui/icons';
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
                                                    бесплатно.
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
                                                    обязательно.
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
                        <GridItem xs={12} sm={12} md={12}>
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
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
