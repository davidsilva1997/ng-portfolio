export class Project {
    public id: number;
    public title: string;
    public description: string;
    public iconUrl: string;
    public imageUrls: string[];
    public technologies: string[];
    public githubUrl?: string;
    public youtubeUrl?: string;

    constructor(id: number, title: string, description: string, iconUrl: string, imageUrls: string[], technologies: string[], githubUrl: string, youtubeUrl: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.iconUrl = iconUrl;
        this.imageUrls = imageUrls;
        this.technologies = technologies;
        this.githubUrl = githubUrl;
        this.youtubeUrl = youtubeUrl;
    }
}