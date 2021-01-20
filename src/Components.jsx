import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header/Header";
import Parallax from "./components/Parallax/Parallax";
import Footer from "./components/Footer/Footer";

import HeaderLinks from "./components/Header/HeaderLinks";
import TabsSection from "./components/TabsSection/TabsSection";
import IndexHeader from "./components/Parallax/ContentParallax";
import CarouselSection from "./components/Carousel/CarouselSection";
import LoginSection from "./components/LoginSection/LoginSection";
import ExamplesSection from "./components/ExamplesSection/ExampleSection";
import DownloadSection from "./components/DownloadSection/DownloadSection";

import styles from "./assets/jss/components";
const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header brand="Hackers-Inside" fixed color="transparent"
                    rightLinks={<HeaderLinks />} changeColorOnScroll={{ height: 400, color: "white"}}
                    {...rest}
            />
            <Parallax>
                <IndexHeader />
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <TabsSection />
                <CarouselSection />
                <LoginSection />
                <ExamplesSection />
                <DownloadSection />
            </div>
            <Footer />
        </div>
    );
}
