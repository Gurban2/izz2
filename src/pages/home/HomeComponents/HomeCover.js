import React, { useState, useEffect } from "react";
import ExampleCarouselImage from "../../../assets/images/Capture2.PNG";
import "./styles/HomeCover.scss";

const slides = [
  {
    title: "Добро пожаловать на сайт!",
    description: "Мы рады предложить вам лучший сервис и продукцию.",
    image: ExampleCarouselImage,
  },
  {
    title: "Мы предлагаем высокое качество",
    description:
      "Наши продукты прошли все необходимые испытания и соответствуют стандартам.",
    image: ExampleCarouselImage,
  },
  {
    title: "Получите лучшее предложение",
    description: "Не упустите шанс воспользоваться нашими скидками и акциями.",
    image: ExampleCarouselImage,
  },
];

const HomeCover = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="home-cover">
      <div className="carousel">
        <div className="carousel-wrapper">
          {" "}
          <div className="carousel-caption">
            <h5>{slides[currentSlide].title}</h5>
            <p>{slides[currentSlide].description}</p>
          </div>
          <div className="carousel-images">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-image ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button
            className="prev"
            onClick={() =>
              goToSlide((currentSlide - 1 + slides.length) % slides.length)
            }
          >
            &#8249;
          </button>
          <button
            className="next"
            onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          >
            &#8250;
          </button>
        </div>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCover;
