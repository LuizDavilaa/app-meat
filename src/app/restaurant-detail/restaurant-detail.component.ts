import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurants: Restaurant;

  constructor(private restaurantService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurants =>{
      this.restaurants = restaurants;
    })
  }

}
