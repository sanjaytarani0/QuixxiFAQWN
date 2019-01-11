import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.css']
})
export class InviteUserComponent implements OnInit {
user: string;
  constructor() { 
    this.user = "sanjay@gmail.com"
  }

  ngOnInit() {
  }

}
