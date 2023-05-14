import { Component } from '@angular/core';
import { faDumpster, faB } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
  faDumpster = faDumpster;
  faB = faB

}
