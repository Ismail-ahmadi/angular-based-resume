import { Component } from '@angular/core';

import { faHouse, faImage, faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  faHouse =faHouse;
  faImage =faImage;
  faCamera =faCamera;

}
