import React from 'react'
import ReactDom from 'react-dom'
import { NavLink } from 'react-router-dom'


const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                    <img src={props.imgsrc} className="card-img-top img-fluid" alt="servimg" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">
                            some quick exaple text to build on the card title and 
                            bulk of the card's content 
                        </p>
                        <NavLink to="" className="btn btn-primary">
                            More
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card