import { Component } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-get-image',
  standalone: true,
  imports: [],
  templateUrl: './get-image.component.html',
  styleUrl: './get-image.component.css'
})
export class GetImageComponent {

  imageUrl = '';

  constructor(private imageService: ImageService) {} 

  ngOnInit() {
    this.fetchPhoto();
  }

  getRandomImage() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.imageService.getRandomImage().subscribe((response) => {
      this.imageUrl = response.urls.regular;
    })
  }
}
