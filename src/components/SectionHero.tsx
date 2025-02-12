import Image from "next/image";
import { SocialMediaLink } from "./SocialMediaLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from '@/assets/profile.jpg'

export const SectionHero = () => {
  return (
    <section id="inicio" className="w-full min-h-screen flex justify-around max620:justify-start items-center mt-10 max1000:flex-col max1000:mt-28 max620:mt-6 max620:h-auto">
      <div className="flex flex-col justify-center items-center mb-12">
        <p className="flex text-[2.8rem] text-slate-50 font-light max620:text-[2.5rem] max500:text-[2rem] max400:text-[1.5rem]">Douglas Lincoln</p>
        <p className="text-6xl text-medium-blue font-extrabold text-primary-blue max1070:text-[3rem] max620:text-[2.5rem] max500:text-[2rem] max400:text-[1.5rem]">Web Full-Stack</p>
        <p className="flex text-xl text-primary-blue opacity-65 max620:text-[1.2rem] max575:text-[1rem] max575:text-center max480:flex-wrap max400:text-[15px] max375:text-[14px]">Desenvolvedor Full-Stack com foco em inovação</p>
        <div className="flex items-center justify-center gap-24 pt-8 text-center max520:gap-12 max620:pt-4">
          <SocialMediaLink
            href="https://github.com/Douglas-Correia"
            icon={FaGithub}>
            GitHub
          </SocialMediaLink>
          <SocialMediaLink 
            href="https://www.linkedin.com/in/douglas-lincoln-863b7621a/" 
            icon={FaLinkedin}>
            LinkedIn
          </SocialMediaLink>
        </div>
        <div className="w-[600px] h-0 border-b-8 border-double border-light-coral mt-12 max675:hidden"></div>
      </div>
      <div className="flex items-center justify-center transform rotate-3">
        <Image
          src={profile}
          alt="my-profile"
          width={400}
          height={400}
          className="rounded-xl border-primary-orange max1060:w-[350px] max1060:h-[350px] max700:w-[300px] max700:h-[300px] max675:w-[250px] max675:h-[250px] max480:w-[200px] max480:h-[200px] max375:w-[150px] max375:h-[150px]"
        />
      </div>
    </section>
  );
};
