import { IoLogoGithub } from "react-icons/io";
import { FaAward } from 'react-icons/fa';
import { useState } from "react";
import './style.css';

export interface CardProps {
  name: string;
  description: string;
  html_url: string;
  languages?: string[];
  certificado?: boolean;
  handleShowCarrossel?: (param: boolean) => void;
}
export const Card = ({ name, description, html_url, languages, certificado, handleShowCarrossel }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`flex flex-col items-center cursor-pointer ${isHovered ? 'anim-card' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (!handleShowCarrossel) {
          return;
        } else {
          handleShowCarrossel(true);
        }
      }}
    >
      <div className="bg-primary-blue w-[340px] rounded-[8px] flex flex-col items-center justify-between p-5 text-center shadow-md shadow-light-blue group-hover:animate-card-move-anim transition-transform ease-in-out duration-500">
        <h3 className="font-semibold text-light-coral">{name}</h3>
        <p className="text-med-gray">{description}</p>
        <div className="flex items-center mt-4">
          <a href={html_url} target="_blank" rel="noreferrer noopener" className="flex items-center gap-x-3 p-1 rounded-[6px] hover:bg-light-coral hover:text-primary-blue transition-all ease-in-out duration-500 text-med-gray">
            {certificado ? 'Exibir certificado' : 'Acessar repositório'}: {certificado ? <FaAward className="w-8 h-8 cursor-pointer rounded-[4px]" /> : <IoLogoGithub className="w-8 h-8 cursor-pointer rounded-[4px]" />}
          </a>
        </div>
      </div>
      {languages && languages.length > 0 && (
        <div className="bg-primary-blue mt-4 px-3 py-1 rounded-[4px] w-fit text-sm italic text-med-gray">
          Linguagens: {languages.join(", ")}
        </div>
      )}
    </div>
  );
};
