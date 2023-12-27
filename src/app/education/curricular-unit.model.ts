export class CurricularUnit {
    public name: string;
    public year: number;
    public semester: number;
    public ects: number;
    public grade: number;

    constructor(name: string, year: number, semester: number, ects: number, grade: number){
        this.name = name;
        this.year = year;
        this.semester = semester;
        this.ects = ects;
        this.grade = grade;
    }
}