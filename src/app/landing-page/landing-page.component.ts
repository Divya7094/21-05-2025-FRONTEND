import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule} from '@ngx-translate/core';
import { ConfigService } from '../services/config.service';

 
@Component({
  selector: 'app-landing-page',
  standalone:true,
  imports: [TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  logoPath: string;
  heroPath: string;
  workPath: string;
  constructor(private router: Router,private configService: ConfigService) {
    this.logoPath = this.configService.getLogoPath();
    this.heroPath = this.configService.getHeroPath();
    this.workPath = this.configService.getWorkPath();
  }
 
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  products() {
    this.router.navigate(['/products']);
  }
  input() {
    this.router.navigate(['/input']);
  }
 
}
