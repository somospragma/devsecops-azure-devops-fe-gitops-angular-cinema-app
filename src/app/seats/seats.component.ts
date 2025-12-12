import { Component } from '@angular/core';
import { SeatsService } from '../seats.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-seats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seats.component.html',
  styleUrl: './seats.component.css'
})
export class SeatsComponent {
  availableSeats: string[] = [];
  bookingStatus: string = '';
  constructor(private seatsService: SeatsService) {}

  ngOnInit(): void {
    this.getAvailableSeats();
  }

  getAvailableSeats(): void {
    this.seatsService.getAvailableSeats().subscribe(
      (data) => {
        this.availableSeats = data;
      },
      (error) => {
        console.error('Error fetching seats:', error);
      }
    );
  }

  bookSeat(seatNumber: string): void {
    this.seatsService.bookSeat(seatNumber).subscribe(
      (response) => {
        this.bookingStatus = response;
        this.getAvailableSeats(); // Refresh seat availability after booking
      },
      (error) => {
        console.error('Error booking seat:', error);
        this.bookingStatus = 'Failed to book seat.';
      }
    );
  }

}
