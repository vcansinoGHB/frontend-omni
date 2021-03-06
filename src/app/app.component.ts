import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Image Company Project';

  constructor(private router:Router){}

  List(){
    this.router.navigate(["list"]);
  }
  ListLazy() {
    this.router.navigate(["lazylist"]);
  }

}
