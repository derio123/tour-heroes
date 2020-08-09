import { Component, OnInit } from '@angular/core';
import { Hero } from '../List/hero';
import { HeroService } from '../shared/hero.service';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  //heroes = HEROES;
  /* selectedHero:Hero; */

  constructor(private heroService: HeroService, 
              /* private messageServe: MessageService */) { }

  ngOnInit(){
    this.getHeroes();
  }

  /* onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageServe.add(`HeroService: Selected hero id=${hero.id}`);
  } */

   getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
