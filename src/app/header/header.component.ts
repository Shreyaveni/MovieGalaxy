import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthReviewService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, private auth: AuthReviewService){ }
  goToHome(){
    this.router.navigate(['home']);
  }
  
  logout(){
    this.router.navigate(['login']);
    // this.auth.logout();
  }
}
