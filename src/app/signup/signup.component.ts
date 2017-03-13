import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit {


 user ={};
 // localStorageService: LocalStorageService;

  constructor (
    private authService: AuthService) { }
 

  ngOnInit() {

   }
   
  signup() {
    console.log("ttttttttttt",this.user)
    this.authService.signup(this.user).subscribe(data => {
        if (data){
          localStorage.setItem('com.utalent',JSON.stringify(data.token))
          localStorage.setItem('com.userId',JSON.stringify(data.id))
        }
    })
  }
}