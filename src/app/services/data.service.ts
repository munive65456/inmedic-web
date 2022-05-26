import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class DataService{
    private content = new BehaviorSubject<any>("");
    public share = this.content.asObservable();

    constructor(){ }

    updateData(data$: any){
        this.content.next(data$);
    }
}
