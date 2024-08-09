import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
`;

const Slide = styled.div`
  min-width: 100%;
  height: 400px;
  background: ${({ bg }) => `url(${bg}) center/cover no-repeat`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideContent = styled.div`
  color: white;
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;

const Control = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 18px;

  ${({ direction }) => direction === 'left' ? 'left: 10px;' : 'right: 10px;'}

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const DotsWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background: ${({ active }) => (active ? 'white' : 'rgba(255, 255, 255, 0.5)')};
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background: white;
  }
`;

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, [nextSlide]);

  return (
    <CarouselContainer>
      <SlideWrapper currentSlide={currentSlide}>
        {slides.map((slide, index) => (
          <Slide key={index} bg={slide.image}>
            <SlideContent>{slide.content}</SlideContent>
          </Slide>
        ))}
      </SlideWrapper>
      <Control direction="left" onClick={prevSlide}>‹</Control>
      <Control direction="right" onClick={nextSlide}>›</Control>
      <DotsWrapper>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotsWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
