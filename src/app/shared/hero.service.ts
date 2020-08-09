import { Injectable } from '@angular/core';
import { Hero } from '../List/hero';
import { HEROES } from '../List/mockheroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServe: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    
    this.messageServe.add('HeroService: fetched heroes');
    return of (HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageServe.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}