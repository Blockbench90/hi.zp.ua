import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import {makeStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";

import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";
import Button from "../CustomButton/Button";

import styles from "./CustomTabsStyle";
import {Link} from "react-router-dom";

const useStyles = makeStyles(styles);

export default function CustomTabs(props) {
    const { headerColor, plainTabs, tabs, title, rtlActive } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, value) => {
        setValue(value);
    };

    const cardTitle = classNames({
        [classes.cardTitle]: true,
        [classes.cardTitleRTL]: rtlActive
    });
    return (
        <Card plain={plainTabs}>
            <CardHeader color={headerColor} plain={plainTabs} >
                {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
                <Tabs value={value} onChange={handleChange} classes={{ root: classes.tabsRoot, indicator: classes.displayNone,
                    flexContainer: classes.justContent }}>

                    {tabs.map((prop, key) => {
                        let icon = {};
                        if (prop.tabIcon) {
                            icon = {
                                icon:
                                    typeof prop.tabIcon === "string" ? (
                                        <Icon>{prop.tabIcon}</Icon>
                                    ) : (
                                        <prop.tabIcon />
                                    )
                            };
                        }
                        return (
                            <Tab classes={{
                                root: classes.tabRootButton,
                                label: classes.tabLabel,
                                selected: classes.tabSelected,
                                wrapper: classes.tabWrapper
                            }}
                                 key={key}
                                 label={prop.tabName}
                                 {...icon}
                            />
                        );
                    })}
                </Tabs>
            </CardHeader>
            <CardBody>
                {tabs.map((prop, key) => {
                    if (key === value) {
                        return <div key={key}>{prop.tabContent}<div style={{display: 'grid', 'justify-content': 'end'}}>
                            <Link to={prop.tabPath}>
                            <Button
                            color="primary"
                            size="lg"
                            target="_blank"
                        >
                            Читать дальше...
                                </Button>
                            </Link>
                            </div>
                        </div>;
                    }
                    return null;
                })}
            </CardBody>
        </Card>
    );
}

CustomTabs.propTypes = {
    headerColor: PropTypes.oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose"
    ]),
    title: PropTypes.string,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            tabName: PropTypes.string.isRequired,
            tabIcon: PropTypes.object,
            tabPath: PropTypes.string,
            tabContent: PropTypes.node.isRequired
        })
    ),
    rtlActive: PropTypes.bool,
    plainTabs: PropTypes.bool
};
