import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-imagegalary',
  templateUrl: './imagegalary.component.html',
  styleUrls: ['./imagegalary.component.css']
})
export class ImagegalaryComponent implements OnInit {

  constructor(private title: Title,
              private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('✓ Verifed & Licensed Packer and Movers ✓Safe & Reliable ✓Inter & Intra City ');
    this.meta.updateTag({
      name: 'description',
      content: 'Experts Packers and Movers is affordable Packer and Mover in Coimbatore. ' +
        '✓Verifed & Licensed Packer and Movers ✓Safe & Reliable ✓Inter & Intra City ' +
        'Packing & Moving ✓Hassle Free from the trusted and affordable relocation services.'
    });
    this.meta.updateTag({name: 'keywords' ,
    content: 'expert packers movers,logistics services,household services, local packers and movers' +
     'packers and movers bangalore, affordable packers and movers, logistics services,Household service'});
  }
  }

