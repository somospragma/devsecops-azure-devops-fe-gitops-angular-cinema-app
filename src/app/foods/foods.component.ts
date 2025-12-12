import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../foods.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {
  availableFood: any = {};
  orderStatus: string = '';
  selectedFoodItem: string = '';
  quantity: number = 1;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.getAvailableFood();
  }

  getAvailableFood(): void {
    this.foodService.getAvailableFood().subscribe(
      (data) => {
        this.availableFood = data;
      },
      (error) => {
        console.error('Error fetching food:', error);
      }
    );
  }

  orderFood(): void {
    if (this.selectedFoodItem && this.quantity > 0) {
      this.foodService.orderFood(this.selectedFoodItem, this.quantity).subscribe(
        (response) => {
          this.orderStatus = response.message;
          this.getAvailableFood(); // Refresh food availability after ordering
        },
        (error) => {
          console.error('Error ordering food:', error);
          this.orderStatus = error.error.message;
        }
      );
    } else {
      this.orderStatus = 'Please select a valid food item and quantity.';
    }
  }


}
