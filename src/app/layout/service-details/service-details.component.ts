import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  serviceName: string;

  constructor() {
    this.serviceName = "Best Cleaning service in Sydney";
   }

  ngOnInit() {
  }

}
