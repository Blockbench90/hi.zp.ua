import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";

import styles from "./footerStyle";
const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const { whiteFont } = props;

    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    })

    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    })

    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a href="https://hi.zp.ua/" className={classes.block}  >
                                миньет создателю сайта и ген-директору))
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a href="https://hi.zp.ua/" className={classes.block}  >
                                About us
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a href="https://hi.zp.ua/" className={classes.block}  >
                                Blog
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a href="https://hi.zp.ua/" className={classes.block}  >
                                Licenses
                            </a>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    &copy; {1900 + new Date().getYear()} , made with{" "}
                    <Favorite className={classes.icon} /> by{" "}
                    <a href="https://hi.zp.ua/" className={aClasses}  >
                        Hackers - Inside
                    </a>{" "}
                    for a better web.
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};
