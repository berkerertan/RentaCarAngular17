import { Component, OnInit } from '@angular/core';
import { BootcampStateService } from '../../../services/concretes/bootcamp-state.service';
import { GetlistBootcampStateResponse } from '../../../models/responses/bootcampState/getlist-bootcamp-state-response';
import { BootcampListItemDto } from '../../../models/responses/bootcamp/bootcamp-list-item-dto';

@Component({
  selector: 'app-bootcamp-state-list-group',
  standalone: true,
  imports: [],
  templateUrl: './bootcamp-state-list-group.component.html',
  styleUrl: './bootcamp-state-list-group.component.scss'
})
export class BootcampStateListGroupComponent  {
//   bootcampStates!: GetlistBootcampStateResponse[];
//   filterText = "";
//   currentBootcampState!: GetlistBootcampStateResponse;

//   constructor(private bootcampStateService: BootcampStateService) { }

//   ngOnInit(): void { }

//   onBrandAdded(brandId: string): void {
//     if (brandId) {
//       this.bootcampStateService.getListByInstructorId(brandId).subscribe(bootcampStates => {
//         this.bootcampStates = bootcampStates;
//       });
//     }
//   }
// //npm install @auth0/angular-jwt***********************************************
//   getBootcampStates(instructorId: string): void {
//     this.bootcampStateService.(instructorId).subscribe((response:any[]) => {
//       this.bootcampStates = response;
//     });
//   }

//   setCurrentBootcampState(bootcampState: GetlistBootcampStateResponse): void {
//     this.currentBootcampState = bootcampState;
//   }

//   getCurrentBootcampStateClass(bootcampState: GetlistBootcampStateResponse): string {
//     return bootcampState === this.currentBootcampState ? "list-group-item active" : "list-group-item";
//   }

//   getDefaultBootcampStateClass(): string {
//     return !this.currentBootcampState ? "list-group-item list-group-item-info" : instructorId + "/institutions/createst-group-item";
//   }
}
