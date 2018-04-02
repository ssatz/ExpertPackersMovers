import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(  private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Expert Packers & Movers in Bangalore - Packing & Moving ✓Hassle Free from ' +
    'the trusted and affordable relocation services');
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


