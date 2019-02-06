import { Component } from '@angular/core';
import { FadeAnimation } from './animation/Fade-Animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [FadeAnimation]

})
export class AppComponent {
  title = 'pro-ang-Football-App';
}
