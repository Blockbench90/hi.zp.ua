import React from "react";
import {Link} from "react-router-dom";

import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import {Apps, Phone, SendOutlined, Telegram} from "@material-ui/icons";
import CustomDropdown from "../../utils/CustomDropdown/CustomDropdown";
import Button from "../../utils/CustomButton/Button";

import styles from "./haederLinksStyle";
const useStyles = makeStyles(styles);

export default function HeaderLinks() {
    const classes = useStyles();

    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown noLiPadding buttonText="Услуги" buttonProps={{
                    className: classes.navLink,
                    color: "transparent"
                }}
                                buttonIcon={Apps}
                                dropdownList={[
                                    <Link to="/fix" target="_blank" className={classes.dropdownLink}>
                                        Ремонт
                                    </Link>,
                                    <Link to="/service" target="_blank" className={classes.dropdownLink}>
                                        Обслуживание
                                    </Link>,
                                    <Link to="/support" target="_blank" className={classes.dropdownLink}>
                                        Программы
                                    </Link>,
                                    <Link to="/assembly" target="_blank" className={classes.dropdownLink}>
                                        Сборка ПК
                                    </Link>,
                                    <Link to="/master" target="_blank" className={classes.dropdownLink}>
                                        Вызов мастера
                                    </Link>,
                                    <Link to="/zero" target="_blank" className={classes.dropdownLink}>
                                        Для чайников
                                    </Link>,
                                    <a href="https://hi.zp.ua/" className={classes.dropdownLink}>hi.zp.ua</a>
                                ]}/>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Button href="tel:+380979107901" color="transparent" target="_blank" className={classes.navLink} >
                    <Phone className={classes.icons} /> Позвонить
                </Button>

            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip id="instagram-twitter" title="Написать в Telegram" placement={window.innerWidth > 959 ? "top" : "left"}
                         classes={{ tooltip: classes.tooltip }} >
                    <Button href="https://t.me/Hacersinside" target="_blank" color="transparent" className={classes.navLink}>
                        <Telegram className={classes.icons} />
                    </Button>
                </Tooltip>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Tooltip id="instagram-twitter" title="Написать в Viber" placement={window.innerWidth > 959 ? "top" : "left"}
                         classes={{ tooltip: classes.tooltip }}>
                    <Button href="viber://add?number=380979107901" target="_blank" color="transparent" className={classes.navLink}>
                        <SendOutlined className={classes.icons} />
                    </Button>
                </Tooltip>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Tooltip id="instagram-tooltip" title="Отслеживать в Instagram" placement={window.innerWidth > 959 ? "top" : "left"}
                         classes={{ tooltip: classes.tooltip }}>
                    <Button color="transparent" href="https://www.instagram.com/maxim.zpua/" target="_blank"
                            className={classes.navLink}>
                        <i className={classes.socialIcons + " fab fa-instagram"} />
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}
