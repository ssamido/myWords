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



import {Injectable, Pipe , PipeTransform} from '@angular/core';

@Pipe({ name: 'myfilter' })
export class MyFilterPipe implements PipeTransform {
    transform(words: any[], args): any {
        return words.filter(word => word.English.toLowerCase().includes(args.toLowerCase()) );
    }
}