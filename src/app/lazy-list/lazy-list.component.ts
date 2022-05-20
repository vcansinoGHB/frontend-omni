import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Company } from '../Models/Company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy-list',
  templateUrl: './lazy-list.component.html',
  styleUrls: ['./lazy-list.component.css']
})
export class LazyListComponent implements OnInit {

  companies:Company[];

  constructor(private service:ServiceService, private router:Router) { 
    this.companies= [];
  }

  ngOnInit(): void {
    this.service.getCompaniesInfo().
                 subscribe(data=>{this.companies=data});
  }

  onScroll() {
    console.log("scrolled!!");
  }

}
