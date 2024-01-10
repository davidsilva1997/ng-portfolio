import { Formation } from "./formation.model";

export class FormationService {
    private formations: Formation[] = [
        new Formation(1, "Angular", "assets/formations/angular.jpg"),
        new Formation(2, "ASP.NET Web API", "assets/formations/aspnet-webapi.jpg")
    ]

    getFormations(): Formation[] {
        return this.formations.slice();
    }
}