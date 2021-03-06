import React from 'react'

export const Carousel = () => {
  return (
    <div className="container">
        <div className="row d-flex justify-content-center my-4">
            <div className="col-12 col-md-10 col-lg-8 p-0">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.pcrm.org/sites/default/files/2019-12/Untitled%20%283%29_1.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block text-dark">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.pcrm.org/sites/default/files/2019-12/Untitled%20%283%29_1.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block text-dark">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.pcrm.org/sites/default/files/2019-12/Untitled%20%283%29_1.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block text-dark">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
