import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  metaData= {
    name: 'Test by poon',
    description: 'Poon poon Poon',
    image: 'avatar.png'
  };

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle(this.metaData.name);
    this.meta.addTags([
      { name: 'og:type', content: 'article' },
      { name: 'og:url', content: '/about' },
      { name: 'og:title', content: this.metaData.name },
      { name: 'og:description', content: this.metaData.description},
      { name: 'og:image', content: this.metaData.image }
    ]);
  }

}
