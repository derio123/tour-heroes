import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../List/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  /* heroes: Hero[]; */
  hero: Hero;
  constructor(private route: ActivatedRoute, 
              private heroServe: HeroService) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroServe.getHero(id).subscribe(hero => this.hero = hero);
  }
}
