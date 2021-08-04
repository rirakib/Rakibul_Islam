import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../src/img/home_img.svg'

const Layout = (props) => {
    return(
        <>
            <section id="header" className="d-flex align-items-center justify-content-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
                                <h1>
                                    {props.name}
                                </h1>
                                <h2 className="para my-1">Fronted Developer</h2>
                                <p className="describe">
                                    {props. describe}
                                </p>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn">{props.btn}</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 pt-5 pt-lg-0 ">
                                <img src={props.imgsrc} alt="Home img" className="homeImage img-fluid animated"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Layout