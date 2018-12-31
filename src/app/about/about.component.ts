import { Component, OnInit } from '@angular/core';
import { ArtworksService } from '../_services/artworks.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about = this.service.about;

  constructor(private service: ArtworksService) { }

  ngOnInit() {
  }

}
