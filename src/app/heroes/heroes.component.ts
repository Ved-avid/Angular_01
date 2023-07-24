import { Component } from '@angular/core';
import {Hero} from '../hero'
import {HEROES} from '../mock-heroes'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  ngOnInit():void{
    this.getHeroes();
  }
  constructor(private herService:HeroService,private messageService:MessageService){}
   heroes:Hero[]=[]
   selectedHero?: Hero;
   onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id} , Name = ${hero.name}`);
  }

  getHeroes():void{
    this.herService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
