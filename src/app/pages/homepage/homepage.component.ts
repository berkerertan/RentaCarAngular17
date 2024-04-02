import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BootcampListGroupComponent } from "../../features/components/bootcamps/bootcamp-list-group/bootcamp-list-group.component";


@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    imports: [RouterModule, CommonModule, BootcampListGroupComponent]
})
export class HomepageComponent {

}