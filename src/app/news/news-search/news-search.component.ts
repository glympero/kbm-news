import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css']
})
export class NewsSearchComponent implements OnInit {
  filteredNews = '';
  categories = ['General', 'Technology', 'Sports', 'Business'];
  constructor() { }

  ngOnInit() {
  }


  filterForeCasts(filterVal: any) {
    // if (filterVal === 0){
    //
    // }
    //   // this.forecasts = this.cacheForecasts;
    // // else
    //   // this.forecasts = this.cacheForecasts.filter((item) => item.summary == filterVal);
  }


}
