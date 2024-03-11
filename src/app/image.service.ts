import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashRandomImageResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  unsplashUrl = "https://api.unsplash.com/";
  accessKey = "xzWluY2hN0wAFdnsE1GmjpF2R0C_jo4hgn9r6AXhAWE";

  constructor(private http: HttpClient) { }

  getRandomImage() {
      return this.http.get<UnsplashRandomImageResponse>(
        this.unsplashUrl + "photos/random",
        {
          headers: {
            Authorization:
             "Client-ID " + this.accessKey
          }
        }
      );
  }
  
}
