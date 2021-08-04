import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../src/img/home_img.svg'
import Layout from './Layout'



const Home = () => {
    return (
        <>
            <Layout
            name="Hello I'm Rir Rakib"
            imgsrc={web}
            visit="/contact"
            btn = "Hire Me"

            />
        </>
    )
}
export default Home