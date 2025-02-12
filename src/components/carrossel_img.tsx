import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import './style.css';

export const CarrosellImage = ({handleShowCarrossel}: {handleShowCarrossel: (param: boolean) => void}) => {
    const totalImages = 30;

    const [imageCenter, setImageCenter] = useState(1);
    const [animating, setAnimating] = useState(false);

    const nextImage = () => {
        if (animating) return;

        setAnimating(true);
        setImageCenter((prev) => (prev % totalImages) + 1);

        const image = document.getElementById('image-carrossel');
        if (image) {
            image.classList.remove('anim-image-left'); // Remove a classe de animação da esquerda, se estiver aplicada
            image.classList.add('anim-image-right');
        }

        setTimeout(() => {
            if (image) {
                image.classList.remove('anim-image-right');
            }
            setAnimating(false);
        }, 200); // Ensure this matches the animation duration
    };

    const previousImage = () => {
        if (animating) return;

        setAnimating(true);
        setImageCenter((prev) => (prev - 2 + totalImages) % totalImages + 1);

        const image = document.getElementById('image-carrossel');
        if (image) {
            image.classList.remove('anim-image-right'); // Remove a classe de animação da direita, se estiver aplicada
            image.classList.add('anim-image-left');
        }

        setTimeout(() => {
            if (image) {
                image.classList.remove('anim-image-left');
            }
            setAnimating(false);
        }, 200); // Ensure this matches the animation duration
    };

    return (
        <div 
        className="absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex items-center justify-center z-50"
        onClick={(e) => {
            e.stopPropagation();
            handleShowCarrossel(false);
        }}
        >
            <section className="w-full h-full flex items-center px-20">
                <BiChevronLeft
                    size={100}
                    color="white"
                    onClick={(e) => {
                        e.stopPropagation();
                        previousImage()
                    }}
                    cursor="pointer"
                />
                <div className="flex items-center justify-center w-full no-scrollbar">
                    <img
                        src={`assets/img/LGVC/usuario/usuario-${imageCenter}.png`}
                        alt=""
                        className={`w-full max-w-[1200px] object-contain shadow-md rounded-lg`}
                        id="image-carrossel"
                    />
                </div>
                <BiChevronRight
                    size={100}
                    color="white"
                    onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                    }}
                    cursor="pointer"
                />
            </section>
        </div>
    );
};
