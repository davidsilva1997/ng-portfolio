export class Experience {
    public id: number;
    public company: string;
    public companyImage: string;
    public role: string;
    public startDate: string;
    public endDate: string;
    public description: string[];
    public technologies: string[];

    constructor(id: number, company: string, companyImage: string, role: string, startDate: string, endDate: string, description: string[], technologies: string[]){
        this.id = id;
        this.company = company;
        this.companyImage = companyImage;
        this.role = role;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.technologies = technologies;
    }
}