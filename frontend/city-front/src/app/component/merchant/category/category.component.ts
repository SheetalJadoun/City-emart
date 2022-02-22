import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories=[
    {
    cid:12,
    title:'saree',
    description:'Banarsi saree'
  },
  {
    cid:12,
    title:'saree',
    description:'Banarsi saree'
  },{
    cid:12,
    title:'saree',
    description:'Banarsi saree'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
