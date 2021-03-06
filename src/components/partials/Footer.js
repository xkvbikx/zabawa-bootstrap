import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class footer extends Component {
    render() {
        return (
            <footer className="footer bg-light py-2 mt-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <span className="text-muted">&copy;Play2Gether</span>
                        </div>
                        <div className="col-3">
                            <NavLink to="/statute" className="link-secondary mx-1">
                                Regulamin
                            </NavLink>
                            <NavLink to="/contact" className="link-secondary">
                                Kontakt
                            </NavLink>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default footer;
