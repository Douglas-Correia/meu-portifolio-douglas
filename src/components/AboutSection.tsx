import Image from "next/image"
import { FaFileAlt } from "react-icons/fa"
import { SocialMediaLinkAlt } from "./SocialMediaLinkAlt"

export const AboutSection = () => {

  return (
    <section id="sobre" className="flex w-full min-h-screen items-center justify-center gap-x-20 max1070:flex-col-reverse" data-aos="zoom-in-up">
      <div className="mt-20 max1070:mt-0">
        <Image
          src="/assets/about-illustration.svg"
          alt="about-illustration"
          width={570}
          height={500}
          className="h-[500px] w-[450px] mr-6 max1070:hidden"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-[600px] text-center gap-y-5 mt-14 max675:w-[550px] max620:w-[500px] max550:w-[450px] max480:w-[400px] max425:w-[350px] max425:gap-y-2 max375:w-[300px]">
        <h2 className="text-title font-semibold text-primary-blue tracking-[2px] max700:text-[2.5rem] max480:text-[2rem]">
          Sobre mim
        </h2>
        <p className="text-[1.1rem] text-slate-50 tracking-wide max700:text-[1rem] max700:tracking-[0px] max425:text-[15px] max400:text-[14px]">
          Meu nome é Douglas Lincoln, tenho 24 anos e sou um desenvolvedor Full-Stack especializado em criar soluções digitais de alta qualidade. Minha experiência inclui uma ampla gama de tecnologias para desenvolvimento web e mobile.
        </p>
        <ul className="text-[1.1rem] text-slate-50 tracking-wide list-disc list-inside text-left max700:text-[1rem] max700:tracking-[0px] max425:text-[15px] max400:text-[14px]">
          <li>Front-end: React, React Native, TypeScript, Tailwind CSS, JavaScript, HTML e CSS, Insomnia, Docker.</li>
          <li>Back-end: Node.js com TypeScript, Fastify, PostgreSQL.</li>
          <li>Aplicações móveis: Desenvolvimento em React Native com foco em usabilidade e integração com APIs.</li>
        </ul>
        <SocialMediaLinkAlt href="../assets/Currilo_Dev.pdf" icon={FaFileAlt}>
          <span className="max550:text-[15px]">Download CV</span>
        </SocialMediaLinkAlt>
      </div>



    </section>
  )
}