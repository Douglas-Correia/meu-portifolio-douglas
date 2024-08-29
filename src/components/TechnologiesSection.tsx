import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiInsomnia, SiHtml5, SiPython, SiJavascript, SiCss3, SiPostgresql, SiNextdotjs } from "react-icons/si";
import { IconContainer } from "./IconContainer";
import PrismaIcon from '@/assets/prisma.svg';
import ZodIcon from '@/assets/zod.svg';
import Image from "next/image";

export const TechnologiesSection = () => {
  return (
    <section id="tecnologias" className="w-full min-h-screen flex justify-center items-center gap-x-20" data-aos="zoom-in-up">
      <div className="flex flex-col items-center justify-center mt-10 max870:mt-20 w-[600px]">
        <h2 className="text-title font-semibold text-primary-blue tracking-[2px] mt-8 max620:text-[2.5rem] max480:text-[2rem]">Tecnologias</h2>
        <p className="text-[1.1rem] text-slate-50 w-[700px] mb-10 mt-4 text-center max720:w-[600px] max620:w-[500px] max550:w-[450px] max480:w-[350px] max400:text-[15px] max400:w-[300px]">
          Ao longo da minha carreira, adquiri um conjunto robusto de habilidades nas seguintes tecnologias, focando no desenvolvimento de aplicações modernas e eficientes:
        </p>
        <div className="flex flex-row items-center justify-center gap-x-10 border-b-2 border-dashed pb-4 border-soft-blue flex-wrap w-[900px] gap-y-10 max870:w-[600px] max620:w-[500px] max550:w-[450px] max480:w-[350px] max367:w-[300px]">

          <IconContainer>
            <SiHtml5 className="text-icons text-yellow-500 transition-all ease-in-out duration-500" />
            <p className="text-primary-blue text-sm">HTML5</p>
          </IconContainer>

          <IconContainer>
            <SiCss3 className="text-icons text-yellow-500 transition-all ease-in-out duration-500" />
            <p className="text-primary-blue text-sm">CSS3</p>
          </IconContainer>

          <IconContainer>
            <FaReact className="text-icons text-blue-500 transition-all ease-in-out duration-500" />
            <p className="text-primary-blue text-sm">React</p>
          </IconContainer>
          
          <IconContainer>
            <SiNextdotjs className="text-icons text-blue-500 transition-all ease-in-out duration-500" />
            <p className="text-primary-blue text-sm">Next</p>
          </IconContainer>

          <IconContainer>
            <FaReact className="text-icons text-blue-400 transition-all ease-in-out duration-500" />
            <p className="text-primary-blue text-sm">React Native</p>
          </IconContainer>

          <IconContainer>
            <SiTailwindcss className="text-icons text-blue-600 transition-all ease-in-out duration-500" />
            <p className="text-primary-blue text-sm">Tailwind CSS</p>
          </IconContainer>

          <IconContainer>
            <SiInsomnia className="text-icons text-purple-600 transition-all ease-in-out duration-500" />
            <p className="text-primary-blue text-sm">Insomnia</p>
          </IconContainer>

          <IconContainer>
            <SiTypescript className="text-icons text-blue-600 transition-all ease-in-out duration-500" />
            <p className="text-primary-blue text-sm">TypeScript</p>
          </IconContainer>

          <IconContainer>
            <FaNodeJs className="text-icons text-green-600 transition-all ease-in-out duration-500" />
            <p className="text-primary-blue text-sm">Node.js</p>
          </IconContainer>

          <IconContainer>
            <SiPython className="text-icons text-yellow-500 transition-all ease-in-out duration-500" />
            <p className="text-primary-blue text-sm">Python</p>
          </IconContainer>

          <IconContainer>
            <SiJavascript className="text-icons text-yellow-500 transition-all ease-in-out duration-500" />
            <p className="text-primary-blue text-sm">Java Script</p>
          </IconContainer>

          <IconContainer>
            <SiPostgresql className="text-icons text-blue-600 transition-all ease-in-out duration-500" />
            <p className="text-primary-blue text-sm">PostgreSQL</p>
          </IconContainer>

          <IconContainer>
            <Image
              src={PrismaIcon}
              alt="my-profile"
              width={40}
              height={40}
              className="rounded-xl border-primary-orange max1060:w-[350px] max1060:h-[350px] max700:w-[300px] max700:h-[300px] max675:hidden"
            />
            <p className="text-primary-blue text-sm">Prisma</p>
          </IconContainer>

          <IconContainer>
            <Image
              src={ZodIcon}
              alt="my-profile"
              width={40}
              height={40}
              className="rounded-xl border-primary-orange max1060:w-[350px] max1060:h-[350px] max700:w-[300px] max700:h-[300px] max675:hidden"
            />
            <p className="text-primary-blue text-sm">Zod</p>
          </IconContainer>

        </div>
      </div>
    </section>
  );
};
