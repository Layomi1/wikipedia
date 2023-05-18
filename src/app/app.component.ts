import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wikipedia';
  searchTerm: any;
  results: any = [];

  totalResults: any;
  page: number = 1;

  constructor(private service: WikiService) {}

  onSubmit() {
    this.service.search(this.searchTerm).subscribe((res: any) => {
      this.results = res.query.search;
      // pagination
      this.totalResults = res.query.search.length;
    });
  }
}
