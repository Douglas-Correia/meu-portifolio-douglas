"use client";

import { arrProjects } from "./arrProjects";
import { Card, CardProps } from "./Card";
import { useEffect, useState } from "react";
import { CarrosellImage } from "./carrossel_img";

export const ProjectsSection = () => {
  const [repositories, setRepositories] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModalCarrossel, setShowModalCarrossel] = useState(true);

  useEffect(() => {
    setRepositories(arrProjects);
  }, []);

  const handleShowCarrossel = (param: boolean) => {
    setShowModalCarrossel(param);
  }

  return (
    <>
      <section id="servicos" className="relative w-full min-h-screen flex flex-col justify-center items-center pt-36 pb-20 px-4" data-aos="zoom-in-up">
        {showModalCarrossel && <CarrosellImage />}
        <h2 className="text-title font-semibold text-primary-blue tracking-[2px] text-center pb-12 max400:text-[2.5rem]">Serviços prestado para Clientes</h2>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {!loading && (
            <div className="flex flex-col items-center">
              <div className="bg-primary-blue w-[300px] h-[300px] rounded-[8px] flex flex-col items-center justify-between p-5 text-center shadow-md shadow-light-blue">

              </div>
            </div>
          )}
          {repositories && repositories.length > 0 ?
            (repositories.map((r) => (
              <Card
                key={r.name}
                name={r.name}
                description={r.description}
                html_url={r.html_url}
                languages={r.languages}
                handleShowCarrossel={handleShowCarrossel}
              />
            )))
            : null}
        </div>
      </section>

      <section id="certificados" className="w-full min-h-screen flex flex-col justify-center items-center pt-36 pb-20 px-4" data-aos="zoom-in-up">
        <h2 className="text-title font-semibold text-primary-blue tracking-[2px] text-center pb-12 max400:text-[2.5rem]">Certificados</h2>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          <Card
            certificado
            name="Análise e Desenvolvimento de Sistemas"
            description="Diploma de conclusão do curso superior em Análise e Desenvolvimento de Sistemas."
            html_url="#"
            languages={[]}
          />
          <Card
            certificado
            name="Frontend 2.0 Completo"
            description="Certificação em Frontend Completo, cobrindo HTML5, CSS3, JavaScript e React.js."
            html_url="https://www.credential.net/975531d9-c079-489f-b6c2-e6e07ceef349?username=douglaslincolncorreia357757#gs.e9ajrd"
            languages={[]}
          />
          <Card
            certificado
            name="Curso de React.js do Básico ao Avançado"
            description="Certificação em React.js cobrindo desde os fundamentos básicos até técnicas avançadas, incluindo o desenvolvimento completo de aplicações web dinâmicas e responsivas, com práticas em hooks, context API, roteamento e otimização de desempenho."
            html_url="https://www.credential.net/775ed308-25f2-4a4f-bb1a-8f69ddad2ec2?username=douglaslincolncorreia357757"
            languages={[]}
          />
          <Card
            certificado
            name="Curso de React.js"
            description="Certificado do evento NLW da Rocketseat, focado no desenvolvimento de uma plataforma de agendamento de eventos com React.js."
            html_url="https://app.rocketseat.com.br/certificates/40ecd718-ebb7-449c-a0bf-e64989789255"
            languages={[]}
          />
          <Card
            certificado
            name="Curso de React Native"
            description="Certificação em React Native, cobrindo desde os fundamentos até o desenvolvimento avançado de aplicativos móveis"
            html_url="https://app.rocketseat.com.br/certificates/903a2144-5c3b-4215-9183-7a092f86034b"
            languages={[]}
          />
          <Card
            certificado
            name="Curso de Node.js"
            description="Certificação do evento NLW da Rocketseat, com foco no backend utilizando Node.js para funcionalidades de agendamento de eventos."
            html_url="https://app.rocketseat.com.br/certificates/dc04a8df-7bfe-4530-9eda-9593b9fdb776"
            languages={[]}
          />
          <Card
            certificado
            name="Curso de Python Módulo 1"
            description="Certificado do módulo 1, introdução aos fundamentos da linguagem Python."
            html_url="https://www.credential.net/f86badf3-167e-4412-accb-7b994789f27c?username=douglaslincolncorreia357757"
            languages={[]}
          />
          <Card
            certificado
            name="Curso de Python Módulo 2"
            description="Certificado do módulo 2, aprofundamento em conceitos básicos de Python."
            html_url="https://www.credential.net/26b35486-a517-4c0a-88c0-50bd5bf1be52?username=douglaslincolncorreia357757"
            languages={[]}
          />
        </div>
      </section>
    </>
  );
};
