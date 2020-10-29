import React from "react";

import "./section.css";

const Section = (props) => {
    return (
        <div className="section">
            <div className="container">
                <div className="section-wrapper shadow-sm">
                    {props.title ?
                        <div className="section__header">
                            <h5>{props.title}</h5>
                            <a href="#">
                                <span>VIEW MORE <i className="fas fa-chevron-right"></i></span>
                            </a>
                        </div>
                        : ''}

                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Section;
