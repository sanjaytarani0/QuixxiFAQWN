import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  
  

  constructor() { }

  ngOnInit() {
   
    $(".tab_content").hide();
    $(".tab_content:first").show();
        
  }

 
}
