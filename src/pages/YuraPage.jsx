import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";


import profile from "../assets/img/faces/Yura.jpg";

import Header from "../components/Header/Header";
import Parallax from "../components/Parallax/Parallax";
import HeaderLinks from "../components/Header/HeaderLinks";
import GridContainer from "../utils/Grid/GridContainer";
import GridItem from "../utils/Grid/GridItem";
import Button from "../utils/CustomButton/Button";
import Footer from "../components/Footer/Footer";

import styles from "./styleProfilePages";
const useStyles = makeStyles(styles);

export default function YuraProfile(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames( classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid );

    return (
        <div>
            <Header color="transparent" brand="Hackers-Inside" rightLinks={<HeaderLinks />} fixed
                    changeColorOnScroll={{ height: 200, color: "white" }} {...rest}/>

            <Parallax small filter image={require("../assets/img/yura_back.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={profile} alt="..." className={imageClasses} />
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Юра</h3>
                                        <h6>Мастер-Ломастер</h6>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-twitter"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-instagram"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-facebook"} />
                                        </Button>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                An artist of considerable range, Chet Faker — the name taken by
                                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                                and records all of his own music, giving it a warm, intimate
                                feel with a solid groove structure.{" "}
                            </p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda autem corporis cum,
                                    dignissimos ea, enim excepturi expedita iure laborum maxime nam natus nesciunt quam qui quibusdam sed,
                                    ullam vitae?
                                </div>
                                <div>A aspernatur consectetur cum debitis ea eaque eligendi, ex fuga fugit iusto laudantium odit placeat
                                    quisquam repellendus, tempora! Ad aliquid earum error exercitationem hic, in labore magnam
                                    necessitatibus ratione soluta.
                                </div>
                                <div>Amet at, corporis debitis deserunt, dolore doloribus ducimus, earum expedita impedit iste maxime
                                    molestiae molestias mollitia nihil nobis nulla placeat porro quidem quos suscipit tempora tenetur unde
                                    vitae voluptate voluptatem.
                                </div>
                                <div>Ab accusantium adipisci ea! Aperiam hic incidunt itaque maxime nisi reprehenderit sed sint, tempora
                                    velit. Ducimus explicabo modi nobis odio possimus quasi, sunt vitae? Debitis illum quas repellat totam
                                    ullam.
                                </div>
                                <div>Accusamus aspernatur assumenda beatae culpa debitis dolor dolorum eius eos illo iusto labore
                                    laudantium maiores, modi nostrum nulla odit pariatur placeat porro provident quod, quos saepe
                                    similique suscipit veritatis voluptas!
                                </div>
                                <div>Aperiam fugit minima quia. Aliquid aspernatur aut delectus deleniti deserunt distinctio ducimus
                                    eius eum facere laborum laudantium mollitia neque nulla odio officiis pariatur quae, quasi quia,
                                    tempore veritatis vitae voluptates?
                                </div>
                                <div>Architecto deleniti dolores quibusdam quisquam saepe temporibus veritatis. Consectetur expedita
                                    minima molestiae necessitatibus nostrum? Asperiores, blanditiis dignissimos eaque error id magni,
                                    minus obcaecati officiis optio possimus quae repellendus veritatis voluptatibus!
                                </div>
                                <div>Aliquam aliquid dolorem nam perspiciatis possimus quia quo recusandae saepe sunt voluptates?
                                    Consectetur consequatur dolorum facere harum, in inventore itaque iure magni neque nostrum officia
                                    sunt tempora veniam. Mollitia, perspiciatis.
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
