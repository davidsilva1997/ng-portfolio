import { CurricularUnit } from "./curricular-unit.model";
import { Education } from "./education.model";

export class EducationService {
    private educations: Education[] = [
        new Education(
            1,
            'Instituto Superior de Engenharia de Coimbra',
            'assets/isec.png',
            'https://www.isec.pt/',
            'Licenciatura',
            'Engenharia Informática - Desenvolvimento de Aplicações',
            '2018',
            '2022',
            [
                new CurricularUnit('Álgebra Linear', 1, 1, 5, 10),
                new CurricularUnit('Análise Matemática I', 1, 1, 6, 15),
                new CurricularUnit('Análise Matemática II', 1, 2, 6, 10),
                new CurricularUnit('Eletrónica', 1, 2, 4, 10),
                new CurricularUnit('Fundamentos de Computação Gráfica', 1, 2, 5, 12),
                new CurricularUnit('Métodos Estatísticos', 1, 2, 5, 10),
                new CurricularUnit('Programação', 1, 2, 5, 12),
                new CurricularUnit('Tecnologias e Arquiteturas de Computadores', 1, 2, 5, 13),
                new CurricularUnit('Introdução à Inteligência Artificial', 2, 1, 5, 13),
                new CurricularUnit('Investigação Operacional', 2, 1, 5, 13),
                new CurricularUnit('Programação Orientada a Objetos', 2, 1, 5, 10),
                new CurricularUnit('Sistemas Operativos', 2, 1, 5, 11),
                new CurricularUnit('Conhecimento e Raciocínio', 2, 2, 5, 11),
                new CurricularUnit('Empreendedorismo e Inovação', 2, 2, 5, 15),
                new CurricularUnit('Interação Pessoa-Máquina', 2, 2, 5, 13),
                new CurricularUnit('Modelação e Design', 2, 2, 5, 16),
                new CurricularUnit('Programação Avançada', 2, 2, 5, 15),
                new CurricularUnit('Sistemas Operativos II', 2, 2, 5, 12),
                new CurricularUnit('Arquiteturas Móveis', 3, 1, 6, 14),
                new CurricularUnit('Programação WEB', 3, 1, 6, 12),
                new CurricularUnit('Ética e Deontologia', 3, 1, 3, 17),
                new CurricularUnit('Estruturas de Dados', 3, 1, 6, 11),
                new CurricularUnit('Gestão de Projeto de Software', 3, 1, 6, 16),
                new CurricularUnit('Programação Distribuída', 3, 1, 6, 15),
                new CurricularUnit('Estágio', 3, 2, 27, 19),

            ],
            14
        ),
        new Education(
            2,
            'Instituto Superior de Engenharia de Coimbra',
            'assets/isec.png',
            'https://www.isec.pt/',
            'Curso Técnico Superior Profissional',
            'Tecnologias e Programação de Sistemas de Informação',
            '2016',
            '2018',
            [
                new CurricularUnit('Introdução à Programação', 1, 1, 5, 13),
                new CurricularUnit('Introdução aos Sistemas Digitais', 1, 1, 5, 12),
                new CurricularUnit('Introdução às Redes de Dados', 1, 1, 5, 14),
                new CurricularUnit('Matemática', 1, 1, 5, 13),
                new CurricularUnit('Tecnologia e Arquitetura de Computadores', 1, 1, 5, 12),
                new CurricularUnit('Tecnologias Web', 1, 1, 5, 14),
                new CurricularUnit('Base de Dados I', 1, 2, 5, 13),
                new CurricularUnit('Interação Pessoa-Máquina', 1, 2, 4, 15),
                new CurricularUnit('Programação Orientada a Objetos', 1, 2, 5, 13),
                new CurricularUnit('Programação Web I', 1, 2, 6, 12),
                new CurricularUnit('Sistemas de Informação I', 1, 2, 5, 12),
                new CurricularUnit('Sistemas Operativos', 1, 2, 5, 10),
                new CurricularUnit('Base de Dados II', 2, 1, 5, 14),
                new CurricularUnit('Integração de Dados', 2, 1, 4, 13),
                new CurricularUnit('Organização, Gestão e Qualidade', 2, 1, 5, 13),
                new CurricularUnit('Programação em Java para Dispositivos Móveis', 2, 1, 5, 10),
                new CurricularUnit('Programação Web II', 2, 1, 6, 13),
                new CurricularUnit('Sistemas de Informação II', 2, 1, 5, 14),
                new CurricularUnit('Estágio', 2, 2, 30, 16)
            ],
            14
        )
    ]
    private selectedEducation: number;

    getEducations(): Education[] {
        return this.educations.slice();
    }

    getEducation(id: number): Education {
        const education = this.educations.find(find => (find.id === id));

        return education;
    }

    setSelectedEducation(id: number){
        this.selectedEducation = id;
    }

    getSelectedEducation() {
        return this.selectedEducation;
    }
}