import React from "react";
import "./banner.css";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@material-ui/icons/SportsBasketballOutlined";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import ImportantDevicesOutlinedIcon from "@material-ui/icons/ImportantDevicesOutlined";
import AirportShuttleOutlinedIcon from "@material-ui/icons/AirportShuttleOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import ChildFriendlyOutlinedIcon from "@material-ui/icons/ChildFriendlyOutlined";
import FitnessCenterOutlinedIcon from "@material-ui/icons/FitnessCenterOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";

function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="in_banner">
                    <div className="banner__categories shadow-sm">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <SportsEsportsOutlinedIcon className="banner__icons" />
                                <span> Supermarché</span>
                            </li>
                            <li className="list-group-item">
                                <HomeWorkOutlinedIcon className="banner__icons" />
                                <span>Maison & bureau</span>
                            </li>
                            <li className="list-group-item">
                                <FitnessCenterOutlinedIcon className="banner__icons" />
                                <span>Santé et beauté</span>
                            </li>
                            <li className="list-group-item">
                                <WatchLaterOutlinedIcon className="banner__icons" />
                                <span>Mode</span>
                            </li>
                            <li className="list-group-item">
                                <LiveTvOutlinedIcon className="banner__icons" />
                                <span>Electroménager, TV & Audio</span>
                            </li>
                            <li className="list-group-item">
                                <SportsBasketballOutlinedIcon className="banner__icons" />
                                <span>Articles de sport</span>
                            </li>
                            <li className="list-group-item">
                                <PhoneAndroidOutlinedIcon className="banner__icons" />
                                <span>Téléphonie & Accessoires</span>
                            </li>
                            <li className="list-group-item">
                                <ChildFriendlyOutlinedIcon className="banner__icons" />
                                <span>Bébé et Puericulture</span>
                            </li>
                            <li className="list-group-item">
                                <ImportantDevicesOutlinedIcon className="banner__icons" />
                                <span>Informatique</span>
                            </li>
                            <li className="list-group-item">
                                <AirportShuttleOutlinedIcon className="banner__icons" />
                                <span>Jouets & jeux</span>
                            </li>
                            <li className="list-group-item">
                                <SportsBasketballOutlinedIcon className="banner__icons" />
                                <span>Jeux videos & Consoles</span>
                            </li>
                            <li className="list-group-item">
                                <AddCircleOutlineOutlinedIcon className="banner__icons" />
                                <span>Autres catégories</span>
                            </li>
                        </ul>
                    </div>
                    <div className="banner__slider">
                        <div
                            id="carouselExampleFade"
                            className="carousel slide carousel-fade banner-carousel"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <a href="#">
                                        <img
                                            src="https://i.ibb.co/vdpL7kK/SX-SULTAN.jpg"
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://i.ibb.co/ZmDbgV8/1424x768-CTA-J-Achete.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://i.ibb.co/r0LzRD7/SX.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleFade"
                                role="button"
                                data-slide="prev"
                            >
                                <i className="fas fa-chevron-left"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleFade"
                                role="button"
                                data-slide="next"
                            >
                                <i className="fas fa-chevron-right"></i>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="banner__ads">
                        <div className="banner__ad">
                            <img src="https://i.ibb.co/746BGzB/JUMBO.jpg" />
                        </div>
                        <div className="banner__ad">
                            <img src="https://i.ibb.co/VYPHj2y/jumb-fff-1.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
