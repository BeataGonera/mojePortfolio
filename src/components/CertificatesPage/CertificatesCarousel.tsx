export const CertificatesCarousel = () => {
    return ( 

      <div id="certificates-carousel" className="carousel slide relative flex justify-center items-center" data-bs-ride="carousel">
  <div className="carousel-inner relative w-4/6 overflow-hidden flex">
    <div className="carousel-item active relative float-left w-full">
      <img
        src="InfoShare.png"
        className="block w-full"
        alt="InfoShare Academy Certificate"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="Coursera1.png"
        className="block w-full"
        alt="Coursera Certificate"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="Coursera2.png"
        className="block w-full"
        alt="Coursera Certificates"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="Coursera3.png"
        className="block w-full"
        alt="Coursera Certificates"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#certificates-carousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#certificates-carousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

     );
}

 
