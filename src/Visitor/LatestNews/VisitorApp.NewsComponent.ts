import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './VisitorApp.NewsComponent.html'
})
export class NewsComponent {

    public lastestNewsList: any = [];
    constructor(public http: HttpClient) {
        this.http.get<any>("https://newsapi.org/v2/top-headlines?country=in&apiKey=c2571d3d3f6a4194a3f15f4f1d5f1249")
            .subscribe(res => {
                this.lastestNewsList = res.articles
                console.log(res);
            }, err => {
                console.log(err);
            })

    }
}
