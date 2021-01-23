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
                        <Button color="primary" size="lg" href="#" target="_blank" >
                            <Phone style={{marginRight: "15px"}}/>
                            Позвонить
                        </Button>
                        <Button color="primary" size="lg" href="#" target="_blank" >
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
                        <Button color="rose" size="lg" href="#" target="_blank" >
                            <BorderColor style={{marginRight: "15px"}}/>
                            Отзывы
                        </Button>
                        <Button color="rose" size="lg" href="#" target="_blank" >
                            <Room style={{marginRight: "15px"}}/>
                            Открыть карту
                        </Button>
                    </GridItem>
                </GridContainer>

            </div>
        </div>
    );
}
