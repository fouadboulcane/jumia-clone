import React from "react";
import "./topheader.css";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";

function TopHeader() {
    return (
        <div className="topheader">
            <div className="container">
                <div className="in_topheader">
                    <div className="topheader__leftnav">
                        <StarsRoundedIcon className="topheader__leftnav__icon" />
                        <a href="#" className="topheader__leftnav__link">
                            Vendez sur Jumia
            </a>
                    </div>
                    <div className="topheader__rightnav">
                        Francais <span className="divider"></span> العربية
          </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;
