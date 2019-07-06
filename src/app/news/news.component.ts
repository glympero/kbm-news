import { Component, OnInit } from '@angular/core';
import {News} from "../shared/news.model";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[];
  constructor() { }
  ngOnInit() {
    this.news = [{
      image: 'https://m.files.bbci.co.uk/modules/bbc-morph-sport-page/3.2.0/images/bbc-sport-logo.png',
      title: 'BBC News',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae?',
      category: 'Sports'
    },{
      image: 'https://m.files.bbci.co.uk/modules/bbc-morph-sport-page/3.2.0/images/bbc-sport-logo.png',
      title: 'BBC News',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae?',
      category: 'Sports'
    },{
      image: 'https://m.files.bbci.co.uk/modules/bbc-morph-sport-page/3.2.0/images/bbc-sport-logo.png',
      title: 'BBC News',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae?',
      category: 'Sports'
    },{
      image: 'https://m.files.bbci.co.uk/modules/bbc-morph-sport-page/3.2.0/images/bbc-sport-logo.png',
      title: 'BBC News',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae?',
      category: 'Sports'
    },{
      image: 'https://m.files.bbci.co.uk/modules/bbc-morph-sport-page/3.2.0/images/bbc-sport-logo.png',
      title: 'BBC News',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae?',
      category: 'Sports'
    },{
      image: 'https://m.files.bbci.co.uk/modules/bbc-morph-sport-page/3.2.0/images/bbc-sport-logo.png',
      title: 'BBC News',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae?',
      category: 'Sports'
    }]
  }

}
