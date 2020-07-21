import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WordServicesService}  from '../../services/word-services.service' 
import {Word}  from '../../model/word' 


@Component({
  selector: 'app-detail-word',
  templateUrl: './detail-word.component.html',
  styleUrls: ['./detail-word.component.scss'],
})
export class DetailWordComponent implements OnInit {
  word:Word;
  id:any;
  constructor(private activatedRoute: ActivatedRoute, private wordServicesService:WordServicesService) { }

  ngOnInit() {
    console.log("je suis la ")
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.word =this.wordServicesService.getWord(this.id)
    console.log(this.word)
    
  }

}
