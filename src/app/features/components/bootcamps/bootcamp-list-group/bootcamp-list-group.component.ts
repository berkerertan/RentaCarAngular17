import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { GetlistBootcampResponse } from '../../../models/responses/bootcamp/getlist-bootcamp-response';
import { BootcampService } from '../../../services/concretes/bootcamp.service';

@Component({
  selector: 'app-bootcamp-list-group',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,SharedModule],
  templateUrl: './bootcamp-list-group.component.html',
  styleUrl: './bootcamp-list-group.component.scss'
})
export class BootcampListGroupComponent implements OnInit {
  @Input() selectedBootcampId!: string; // seçilen bootcamp'ın kimliği
  @Output() bootcampSelected = new EventEmitter<string>(); // bootcamp'lar yüklendiğinde olay yayınlayıcı
  bootcamps!: GetlistBootcampResponse[];
  currentBootcamp!: GetlistBootcampResponse;
  filterText = "";

  constructor(private bootcampService: BootcampService) { }

  ngOnInit(): void {
    this.getBootcamps();
    console.log(this.bootcampSelected)
  }

  onSelectedBootcamp(bootcampId: string): void {
    this.selectedBootcampId = bootcampId;
    this.bootcampSelected.emit(this.selectedBootcampId);
  }

  getBootcamps() {
    this.bootcampService.getList().subscribe((response) => {
      this.bootcamps = response;
    })
  }

  setCurrentBootcamp(bootcamp: GetlistBootcampResponse) {
    this.currentBootcamp = bootcamp;
  }

  getCurrentBootcampClass(bootcamp: GetlistBootcampResponse) {
    if (bootcamp == this.currentBootcamp) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  getDefaultBootcampClass() {
    if (!this.currentBootcamp) {
      return "list-group-item list-group-item-info"
    } else {
      return "list-group-item"
    }
  }
}

}
