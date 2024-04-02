import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetlistInstructorResponse } from '../../../models/responses/instructor/getlist-instructor-response';
import { InstructorService } from '../../../services/concretes/instructor.service';

@Component({
  selector: 'app-instructor-list-group',
  standalone: true,
  imports: [],
  templateUrl: './instructor-list-group.component.html',
  styleUrl: './instructor-list-group.component.scss'
})
export class InstructorListGroupComponent implements OnInit {
  @Input() selectedInstructorId!: string;
  @Output() instructorSelected = new EventEmitter<string>();
  instructors: GetlistInstructorResponse[] = [];
  currentInstructor: GetlistInstructorResponse | undefined;
  filterText = "";

  constructor(private instructorService: InstructorService) {}

  ngOnInit(): void {
    this.getInstructor();
    console.log(this.instructorSelected)
  }

  onSelectedInstructor(instructorId: string): void {
    this.selectedInstructorId = instructorId;
    this.instructorSelected.emit(this.selectedInstructorId);
  }

  getInstructor(){
    this.instructorService.getList().subscribe((response)=>{
     this.instructors=response;
    })
 }
  setCurrentInstructor(instructor: GetlistInstructorResponse): void {
    this.currentInstructor = instructor;
  }

  getCurrentInstructorClass(instructor: GetlistInstructorResponse): string {
    return instructor === this.currentInstructor ? "list-group-item active" : "list-group-item";
  }

  getDefaultInstructorClass(): string {
    return !this.currentInstructor ? "list-group-item list-group-item-info" : "list-group-item";
  }
}
