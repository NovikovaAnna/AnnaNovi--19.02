import { createContext, useState } from "react";
import example1 from "../../assets/portfolio1.jpg";
import example2 from "../../assets/portfolio2.jpg";
import example3 from "../../assets/portfolio3.jpg";
import example4 from "../../assets/portfolio4.jpg";
import Slide from "./Slide.jsx";
import Dots from "./Dots.jsx";

export const SliderContext = createContext(null);

export default function Slider() {
    const examples = [
        { src: example1, text: 'Dog1', key: 'example1' },
        { src: example2, text: 'Dog2', key: 'example2' },
        { src: example3, text: 'Dog3', key: 'example3' },
        { src: example4, text: 'Dog4', key: 'example4' },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const value = {
        currentSlide: currentSlide,
        slideNum: examples.length,
        setSlide: setCurrentSlide, // Упрощенное присваивание функции обновления состояния
    };

    return (
        <SliderContext.Provider value={value}>
            <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {examples.map(({ src, text, key }) => (
                    <Slide key={key} src={src} text={text} />
                ))}
            </div>
            <Dots />
        </SliderContext.Provider>
    );
}
