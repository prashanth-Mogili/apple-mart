import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
    <h1 className='text-center mt-4'>Have Some Question?</h1>
    <hr />
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <img height='400' alt="image_not_found"
        src="https://th.bing.com/th/id/OIP.2_OejSZJO1kDC1ojnSLBrgHaGg?w=228&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7"  />
        </div>
        <div className="col-md-6">
        <form>
              <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">
                   Full Name
                  </label>
                  <input
                    type="text"
                    placeholder='John Smith'
                    className="form-control"
                    id="exampleInput"
                    aria-describedby="emailHelp"
                  />
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder='name@example.com'
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputxtxtArea" className="form-label">
                    Description
                  </label>
                  <textarea
                    rows='5'
                    type="password"
                    className="form-control"
                    id="exampleInputxtxtArea"
                  />
                </div>
               
                <button type="submit" className="btn btn-outline-primary mt-3">
                  Send Message
                </button>
              </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact