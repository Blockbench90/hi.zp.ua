import React from "react";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";

import FavoriteIcon from '@material-ui/icons/Favorite';


import GridContainer from "../../utils/Grid/GridContainer";
import GridItem from "../../utils/Grid/GridItem";
import Card from "../../utils/Card/Card";

import styles from "./carouselStyle";
import imageLoader from "./Photo";

const useStyles = makeStyles(styles);
const images = imageLoader()

const ImageWrap = ({image, description}) => {
    return (
        <div>
            <img src={image} alt="First slide" className="slick-image" />
            <div className="slick-caption">
                <h4>
                    <FavoriteIcon className="slick-icons" />
                    {description}
                </h4>
            </div>
        </div>
    )
}

export default function CarouselSection() {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
                        <Card carousel>
                            <Carousel {...settings}>

                                {images.map((item) => <ImageWrap description={item.description} image={item.original}/>)}

                            </Carousel>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
