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
                                    <Link to="/fix" className={classes.dropdownLink}>
                                        Ремонт
                                    </Link>,
                                    <Link to="/service" className={classes.dropdownLink}>
                                        Обслуживание
                                    </Link>,
                                    <a href="https://hi.zp.ua/"
                                       className={classes.dropdownLink}>hi.zp.ua</a>
                                ]}/>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Button href="#" color="transparent" target="_blank" className={classes.navLink} >
                    <Phone className={classes.icons} /> Позвонить
                </Button>

            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip id="instagram-twitter" title="Написать в Telegram" placement={window.innerWidth > 959 ? "top" : "left"}
                         classes={{ tooltip: classes.tooltip }} >
                    <Button href="#" target="_blank" color="transparent" className={classes.navLink}>
                        <Telegram className={classes.icons} />
                    </Button>
                </Tooltip>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Tooltip id="instagram-twitter" title="Написать в Viber" placement={window.innerWidth > 959 ? "top" : "left"}
                         classes={{ tooltip: classes.tooltip }}>
                    <Button href="#" target="_blank" color="transparent" className={classes.navLink}>
                        <SendOutlined className={classes.icons} />
                    </Button>
                </Tooltip>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Tooltip id="instagram-tooltip" title="Отслеживать в Instagram" placement={window.innerWidth > 959 ? "top" : "left"}
                         classes={{ tooltip: classes.tooltip }}>
                    <Button color="transparent" href="#" target="_blank"
                            className={classes.navLink}>
                        <i className={classes.socialIcons + " fab fa-instagram"} />
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}
