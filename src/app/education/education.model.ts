import { CurricularUnit } from "./curricular-unit.model";

export class Education {
    public id: number;
    public school: string;
    public schoolImage: string;
    public schoolUrl: string;
    public course: string;
    public branch: string;
    public startDate: string;
    public endDate: string;
    public curricularUnits: CurricularUnit[];
    public grade: number;

    constructor(id: number, school: string, schoolImage: string, schoolUrl: string, course: string, branch: string, startDate: string, endDate: string, curricularUnits: CurricularUnit[], grade: number){
        this.id = id;
        this.school = school;
        this.schoolImage = schoolImage;
        this.schoolUrl = schoolUrl;
        this.course = course;
        this.branch = branch;
        this.startDate = startDate;
        this.endDate = endDate;
        this.curricularUnits = curricularUnits;
        this.grade = grade;
    }
}