import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";




import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";
import CustomTabs from "../../utils/CustomTabs/CustomTabs";

import styles from "./tabsStyle";
const useStyles = makeStyles(styles);

export default function TabsSection() {
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
                                        tabName: "Profile",
                                        tabIcon: Face,
                                        tabContent: (
                                            <p className={classes.textCenter}>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.   I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.   I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                            </p>
                                        )
                                    },
                                    {
                                        tabName: "Messages",
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
                                        tabName: "Profile",
                                        tabIcon: Face,
                                        tabContent: (
                                            <p className={classes.textCenter}>
                                                I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.   I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                                the nucleus.   I think that’s a responsibility that I have, to push
                                                possibilities, to show people, this is the level that
                                                things could be at. So when you get something that has
                                                the name Kanye West on it, it’s supposed to be pushing
                                                the furthest possibilities. I will be the leader of a
                                                company that ends up being worth billions of dollars,
                                                because I got the answers. I understand culture. I am
                                            </p>
                                        )
                                    },
                                    {
                                        tabName: "Messages",
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
