import React from "react";
import { Container } from "reactstrap";

function IndexHeader() {
    return (
        <>
            <div
                className="page-header section-dark"
                style={{
                    backgroundImage:
                        "url(" + require("../../assets/img/bgZP.jpg") + ")",
                }}
            >
                <div className="filter" />
                <div className="content-center">
                    <Container>
                        <div className="title-brand">
                            <h1 className="presentation-title">
                                Ремонт Компьютеров Запорожье
                            </h1>
                            <div className="fog-low">
                                <img alt="..." src={require("../../assets/img/fog-low.png")} />
                            </div>
                            <div className="fog-low right">
                                <img alt="..." src={require("../../assets/img/fog-low.png")} />
                            </div>
                        </div>
                        <div className="presentation-wrapper">
                            <div><img src={require("../../assets/img/hi-logo.png")} alt="logo" /></div>
                            <div>
                                <h2 className="presentation-subtitle text-center">
                                    Hackers - Inside
                                </h2>
                            </div>
                        </div>
                    </Container>
                </div>
                <div
                    className="moving-clouds"
                    style={{
                        backgroundImage: "url(" + require("../../assets/img/clouds.png") + ")",
                    }}
                />
            </div>
        </>
    );
}

export default IndexHeader;
