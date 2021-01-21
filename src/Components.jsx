import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";

import Header from "./components/Header/Header";
import Parallax from "./components/Parallax/Parallax";
import Footer from "./components/Footer/Footer";

import HeaderLinks from "./components/Header/HeaderLinks";
import ServicesSection from "./components/Services/ServicesSection";
import IndexHeader from "./components/Parallax/ContentParallax";
import CarouselSection from "./components/Carousel/CarouselSection";
import BannerSection from "./components/BannerSection/BannerSection";
import ProfilePreviewSection from "./components/ProfilePreview/ProfilePreviewSection";
import QuestionSection from "./components/Question/QuestionSection";

import styles from "./assets/jss/components";
import ScrollButton from "./utils/ScrollButton/ScrollButton";

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
                <ScrollButton>
                    <ServicesSection />
                    <CarouselSection />
                    <BannerSection />
                    <ProfilePreviewSection />
                    <QuestionSection />
                </ScrollButton>
            </div>
            <Footer />
        </div>
    );
}
