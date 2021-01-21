import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../utils/CustomButton/Button";
import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";

import profile from "../../assets/img/faces/Max.jpg";

import styles from "./profilePagesStyle";

const useStyles = makeStyles(styles);

export default function MaxProfile(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    return (
        <div>
            <Header color="transparent" brand="Hackers-Inside" rightLinks={<HeaderLinks />} fixed
                    changeColorOnScroll={{height: 200, color: "white"}} {...rest} />

            <Parallax small filter image={require("../../assets/img/slick_11.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={profile} alt="..." className={imageClasses} />
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Максим</h3>
                                        <h6>Мастер и по совместительству учредитель</h6>
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
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, dolore dolorem fugit
                                    molestiae mollitia necessitatibus nemo pariatur quae quibusdam quo, reiciendis repudiandae sed
                                    similique suscipit tenetur ullam vitae? Architecto, facilis.
                                </div>
                                <div>Ab accusamus ad architecto assumenda cum debitis doloribus earum, et excepturi illo inventore ipsum
                                    iusto laudantium nemo numquam perspiciatis quae quas qui quidem quod reiciendis veniam voluptas?
                                    Eveniet possimus, vel?
                                </div>
                                <div>Amet architecto atque cupiditate ducimus eius harum illum labore laudantium necessitatibus quae qui
                                    quis quod, similique sunt temporibus totam, vitae voluptatum! Accusantium dignissimos inventore
                                    maiores, mollitia rem sequi ullam voluptatem!
                                </div>
                                <div>At commodi cum cupiditate deleniti esse et fuga harum id impedit in ipsam iste laborum minus modi
                                    molestias mollitia obcaecati officiis, praesentium quidem quisquam quo ratione sint tempore vero
                                    voluptates!
                                </div>
                                <div>Adipisci, autem dolores esse facere hic ipsa libero magni maxime nostrum placeat praesentium
                                    quaerat quidem quisquam sint soluta totam veritatis! Eius eos excepturi nostrum obcaecati quaerat quas
                                    quis recusandae rerum.
                                </div>
                                <div>Aliquid atque consectetur laudantium nam, quidem quisquam sit tenetur. A accusamus amet cumque
                                    distinctio doloremque dolores eaque earum in iste nemo neque non, quo repellat repudiandae, rerum
                                    sapiente totam voluptatum!
                                </div>
                                <div>Culpa cum dolorem dolores ducimus facere illo ipsum quidem similique! Asperiores atque blanditiis
                                    enim, eveniet expedita, fuga harum illum, nemo nulla perferendis praesentium quia quibusdam ratione
                                    sapiente similique tenetur unde.
                                </div>
                                <div>Dolorem ducimus error excepturi maxime nemo nostrum quod repellendus repudiandae. Atque autem
                                    cupiditate distinctio dolore dolorum hic inventore libero neque omnis quis. Aliquid at dolorem minima
                                    voluptas. At, modi, perspiciatis.
                                </div>
                                <div>Deserunt dignissimos doloribus expedita facilis illo, impedit iste nesciunt officiis optio
                                    perspiciatis provident qui quod sunt tempore vel. A aperiam beatae, ea eius fugit inventore non
                                    quisquam saepe sequi tempora.
                                </div>
                                <div>Accusamus accusantium, animi asperiores doloremque eveniet ipsum nam porro? Ad aspernatur,
                                    consequuntur dolorum est ex labore magni, non nulla numquam placeat qui, quod repellendus tenetur ut
                                    vitae voluptas voluptate voluptatem!
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
