import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetImageComponent } from './get-image/get-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imagefetch';
}
