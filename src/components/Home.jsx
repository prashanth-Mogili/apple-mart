import React from 'react'

const Home = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img height='600' src="https://img.freepik.com/free-photo/woman-shopping-bags-copy-space_23-2148674356.jpg?w=1060&t=st=1665156409~exp=1665157009~hmac=5a9259dea1b43bb3edfb29a2ced528e136c06c9ee7fd636161d7530e0d348238"
 className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img height='600' src="https://th.bing.com/th/id/OIP.RorXF-Bly9UwTTAo8RhIcAHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img height='600' src="https://th.bing.com/th/id/OIP.pFccP8herBecpSKcyXTDqgHaDt?w=322&h=174&c=7&r=0&o=5&dpr=1.25&pid=1.7" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Home
