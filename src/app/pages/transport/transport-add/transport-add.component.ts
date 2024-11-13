import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TransportService } from 'src/app/core/services/transport.service';
import { Transport } from 'src/app/core/model/transport'; // Adjust the import path as needed

@Component({
  selector: 'app-transport-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './transport-add.component.html',
  styleUrls: ['./transport-add.component.scss'],
})
export class TransportAddComponent {
  transportForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transportService: TransportService,
    private router: Router
  ) {
    this.transportForm = this.fb.group({
      vehicleNumber: ['', Validators.required],
      driverName: ['', Validators.required],
      type: ['', Validators.required],
      capacity: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.transportForm.valid) {
      const transport: Transport = this.transportForm.value;

      this.transportService.addTransport(transport).subscribe(
        (response) => {
          console.log('Transport added:', response);
          this.router.navigate(['/transport']);
        },
        (error) => {
          console.error('Error adding transport:', error);
        }
      );
    }
  }
}
