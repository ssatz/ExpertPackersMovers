import { Component, OnInit } from '@angular/core';
import { RichSnippetService } from '../_services/richsnippet.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public jsonLD;
  constructor(private richSnippet: RichSnippetService,
              private title: Title,
              private meta: Meta) { }

  ngOnInit() {
    this.jsonLD = this.richSnippet.contactJsonLD();
    this.title.setTitle('Contact Us - Expert Packers & Movers Bangalore');
    this.meta.updateTag({
      name: 'description',
      content: 'Experts Packers and Movers is affordable Packer and Mover in Coimbatore. ' +
        '✓Verifed & Licensed Packer and Movers ✓Safe & Reliable ✓Inter & Intra City ' +
        'Packing & Moving ✓Hassle Free from the trusted and affordable relocation services.'
    });
    this.meta.updateTag({name: 'keywords' ,
    content: 'expert packers movers,logistics services,household services, packers and movers bangalore, affordable packers and movers'});
  }

}
