import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { BorderColor, Phone, Room, Telegram} from "@material-ui/icons";


import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";
import Button from "../../utils/CustomButton/Button";

import styles from "./questionStyle";
const useStyles = makeStyles(styles);

export default function QuestionSection() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer className={classes.textCenter} justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2>Остались вопросы?</h2>
                        <h4>
                            Мы работаем в Запорожье (Пески, Космос)
                        </h4>
                    </GridItem>

                    <GridItem xs={12} sm={8} md={6}>
                        <Button color="primary" size="lg" href="tel:+380979107901" target="_blank" >
                            <Phone style={{marginRight: "15px"}}/>
                            Позвонить
                        </Button>
                        <Button color="primary" size="lg" href="https://t.me/Hacersinside" target="_blank" >
                            <Telegram style={{marginRight: "15px"}}/>
                            Написать в Telegram
                        </Button>
                    </GridItem>

                </GridContainer>
                <br />
                <br />
                <GridContainer className={classes.textCenter} justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2>Почитать отзывы / Найти нас на карте</h2>
                    </GridItem>
                    <GridItem xs={12} sm={8} md={6}>
                        <Button color="rose" size="lg" href="https://www.google.com/maps/place/Hackers+inside+%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82+%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BE%D0%B2/@47.7832345,35.1818275,17z/data=!4m7!3m6!1s0x40dc5ef9062555f9:0xa5d2e3fac23e0551!8m2!3d47.7832345!4d35.1840162!9m1!1b1"
                                target="_blank" >
                            <BorderColor style={{marginRight: "15px"}}/>
                            Отзывы
                        </Button>
                        <Button color="rose" size="lg" href="https://www.google.com/maps/place/Hackers+inside/@47.7832345,35.1818275,17z/data=!3m1!4b1!4m5!3m4!1s0x40dc5ef9062555f9:0xa5d2e3fac23e0551!8m2!3d47.7832345!4d35.1840162"
                                target="_blank" >
                            <Room style={{marginRight: "15px"}}/>
                            Открыть карту
                        </Button>
                    </GridItem>
                </GridContainer>

            </div>
        </div>
    );
}
