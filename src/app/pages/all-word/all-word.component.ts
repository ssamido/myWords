import { Component, OnInit ,ViewChild} from '@angular/core';
import {WordServicesService}  from '../../services/word-services.service' 
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-word',
  templateUrl: './all-word.component.html',
  styleUrls: ['./all-word.component.scss'],
})
export class AllWordComponent implements OnInit {
  
  searchString = '';

  constructor(public wordServicesService:WordServicesService,private router: Router) { }

  ngOnInit() {}
  users =this.wordServicesService.users;
  words = this.wordServicesService.words;


  getDetail(word)
{
  this.router.navigateByUrl('/detail/'+word.English);
}
}

 

 