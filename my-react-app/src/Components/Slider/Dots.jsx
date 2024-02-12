import React, { useContext } from 'react';
import { SliderContext } from './Slider';

export default function Dots() {
    const { currentSlide, slideNum, setSlide } = useContext(SliderContext);

    return (
        <div className="dots">
            {Array.from({ length: slideNum }, (_, i) => (
                <button
                    key={i}
                    className={`dot ${i === currentSlide ? 'active' : ''}`}
                    onClick={() => setSlide(i)}
                />
            ))}
        </div>
    );
}
