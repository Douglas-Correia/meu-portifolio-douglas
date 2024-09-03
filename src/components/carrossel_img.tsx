import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import './style.css';

export const CarrosellImage = () => {
    const totalImages = 30;

    const [imageLeft, setImageLeft] = useState(1);
    const [imageCenter, setImageCenter] = useState(2);
    const [imageRight, setImageRight] = useState(3);
    const [animating, setAnimating] = useState(false);

    const nextImage = () => {
        if (animating) return;

        setAnimating(true);
        setTimeout(() => {
            setImageLeft((prev) => (prev % totalImages) + 1);
            setImageCenter((prev) => (prev % totalImages) + 1);
            setImageRight((prev) => (prev % totalImages) + 1);
            setAnimating(false);
        }, 800);
    };

    const previousImage = () => {
        if (animating) return;

        setAnimating(true);
        setTimeout(() => {
            setImageLeft((prev) => (prev - 2 + totalImages) % totalImages + 1);
            setImageCenter((prev) => (prev - 2 + totalImages) % totalImages + 1);
            setImageRight((prev) => (prev - 2 + totalImages) % totalImages + 1);
            setAnimating(false);
        }, 800);
    };

    return (
        <div className="absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex items-center justify-center z-50">
            <section className="w-full h-full flex items-center px-20">
                <BiChevronLeft size={100} color="white" onClick={previousImage} />
                <div className="flex items-center justify-center carousel-container">
                    <img
                        src={`assets/img/LGVC/usuario/usuario-${imageLeft}.png`}
                        alt=""
                        className={`w-[600px] h-[300px] object-contain image-left shadow-md rounded-lg ${animating ? 'anim-left' : ''}`}
                    />
                    <img
                        src={`assets/img/LGVC/usuario/usuario-${imageCenter}.png`}
                        alt=""
                        className="w-[800px] h-[400px] object-contain image-center shadow-md rounded-lg"
                    />
                    <img
                        src={`assets/img/LGVC/usuario/usuario-${imageRight}.png`}
                        alt=""
                        className={`w-[600px] h-[300px] object-contain image-right shadow-md rounded-lg ${animating ? 'anim-right' : ''}`}
                    />
                </div>
                <BiChevronRight size={100} color="white" onClick={nextImage} />
            </section>
        </div>
    );
};
