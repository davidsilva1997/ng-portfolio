export class Card {
    title: string;
    subTitle: string;
    body: string;
    imagePath: string;
    imageDescription: string;

    constructor(title: string, subTitle: string, body: string, imagePath: string, imageDescription: string){
        this.title = title;
        this.subTitle = subTitle;
        this.body = body;
        this.imagePath = imagePath;
        this.imageDescription = imageDescription;
    }
}