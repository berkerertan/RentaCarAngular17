import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { MenubarModule } from "primeng/menubar";
import { FilterInstructorPipe } from "./pipes/filter-instructor-pipe.pipe";


@NgModule({
    declarations:[FilterInstructorPipe],
    exports:[FilterInstructorPipe],
    imports:[MenubarModule,CommonModule]

})
export class SharedModule{}