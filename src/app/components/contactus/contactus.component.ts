import { Component, OnInit } from '@angular/core';
import { RichSnippetService } from '../_services/richsnippet.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public jsonLD;
  constructor(private richSnippet: RichSnippetService) { }

  ngOnInit() {
    this.jsonLD = this.richSnippet.contactJsonLD();
  }

}
