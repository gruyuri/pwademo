import { Component, OnInit } from '@angular/core';
import { Item, ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwademo';
  items: Array<Item>;

  constructor(private svcApi : ApiService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.svcApi.fetch().subscribe(
      (data: Array<Item>) => {
        console.log(data);
        this.items = data;
      }, (err) => {
        console.log(err);
      }
    );
  }
}
