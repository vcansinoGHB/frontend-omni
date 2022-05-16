import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Company } from '../../Models/Company';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  companies:Company[];
  constructor(private service:ServiceService, private router:Router) { 
    this.companies= [];
  }

  ngOnInit(): void {
    this.service.getCompaniesInfo().
                 subscribe(data=>{this.companies=data});
  }

}
