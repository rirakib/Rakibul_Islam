import React from 'react'
import Layout from './Layout'
import aboutImg from '../src/img/about_img.jpg'

const About =() =>{
    return(
        <>
            <Layout
            
            name="This is my about"
            imgsrc={aboutImg}
            describe="Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            visit="https://www.facebook.com/rir12rakib/"
            btn = "Know more"

            />
        </>
    )
}
export default About