import React from 'react'

const Contact =() =>{
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container container_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <div class="mb-3">
                        <label for="name" class="form-label">Enter your name </label>
                        <input type="text" class="form-control" id="name" placeholder="Rir Rakib" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="rirrakib10@gmail.com" />
                    </div>

                    <div class="mb-3">
                        <label for="textarea" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="textarea" rows="3"></textarea>
                    </div>

                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Submit</button>
                    </div>
                </div>

                   
                </div>
            </div>
        </>
    )
}
export default Contact