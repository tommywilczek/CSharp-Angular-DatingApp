import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn = false;

  constructor(private readonly accountService: AccountService) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log('this.model :>> ', this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log('response :>> ', response);
      this.loggedIn = true;
    }, error => {
      console.log('error :>> ', error);
    });
  }
}
