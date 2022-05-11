import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class DataService{
    private content = new BehaviorSubject<string>("Default Content");
    public share = this.content.asObservable();

    constructor(){ }

    updateData(data$: string){
        this.content.next(data$);
    }
}
