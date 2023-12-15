export class Card {
    id: number;
    title: string;
    subTitle: string;
    body: string;
    imagePath: string;
    imageDescription: string;

    constructor(id: number, title: string, subTitle: string, body: string, imagePath: string, imageDescription: string){
        this.id = id;
        this.title = title;
        this.subTitle = subTitle;
        this.body = body;
        this.imagePath = imagePath;
        this.imageDescription = imageDescription;
    }
}