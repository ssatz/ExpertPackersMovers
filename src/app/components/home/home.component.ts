import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {


  constructor(private meta: Meta) { }

  ngAfterViewInit() {
    // TODO
    this.meta.updateTag({ name: 'keywords', content: 'packers movers, packers movers india' });
  }
}
