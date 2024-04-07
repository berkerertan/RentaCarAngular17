import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetlistInstructorResponse } from '../../../models/responses/instructor/getlist-instructor-response';
import { InstructorService } from '../../../services/concretes/instructor.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FilterInstructorPipe } from '../../../../shared/pipes/filter-instructor-pipe.pipe';



@Component({
  selector: 'app-instructor-list-group',
  standalone: true,
  imports: [FormsModule, SharedModule,RouterModule,CommonModule],
  templateUrl: './instructor-list-group.component.html',
  styleUrl: './instructor-list-group.component.scss'
})
export class InstructorListGroupComponent implements OnInit {
  @Input() selectedInstructorId!: string;
  @Output() instructorSelected = new EventEmitter<string>();
  instructors!: GetlistInstructorResponse[];
  currentInstructor!: GetlistInstructorResponse;
  filterText = "";

  constructor(private instructorService: InstructorService) {}

  ngOnInit(): void {
    this.getInstructors();
    console.log(this.instructorSelected)
  }

  onSelectedInstructor(instructorId: string): void {
    this.selectedInstructorId = instructorId;
    this.instructorSelected.emit(this.selectedInstructorId);
  }

  getInstructors(){
    this.instructorService.getList().subscribe((response)=>{
     this.instructors=Object.values(response);;
    })
 }
  setCurrentInstructor(instructor: GetlistInstructorResponse){
    this.currentInstructor = instructor;
  }

  getCurrentInstructorClass(instructor: GetlistInstructorResponse){
    return instructor === this.currentInstructor ? "list-group-item active" : "list-group-item";
  }

  getDefaultInstructorClass(){
    return !this.currentInstructor ? "list-group-item list-group-item-info" : "list-group-item";
  }
}
