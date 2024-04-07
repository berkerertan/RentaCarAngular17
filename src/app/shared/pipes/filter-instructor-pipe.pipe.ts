import { Pipe, PipeTransform } from "@angular/core";
import { GetlistInstructorResponse } from "../../features/models/responses/instructor/getlist-instructor-response";

@Pipe({
    name:'filterInstructorPipe'
})
export class FilterInstructorPipe implements PipeTransform{

    transform(value: GetlistInstructorResponse[], filterText: string): GetlistInstructorResponse[] {
        filterText = filterText ? filterText.toLocaleLowerCase() : "";
        if (filterText) {
            return value.filter((m: GetlistInstructorResponse) =>
                m.firstName && m.firstName.toLocaleLowerCase().indexOf(filterText) !== -1
            );
        } else {
            return value;
        }
    }



    // transform(value: GetlistInstructorResponse[],filterText:string):GetlistInstructorResponse[] {
    //     filterText=filterText?filterText.toLocaleLowerCase():""
    //     return filterText?value.filter((m:GetlistInstructorResponse)=>m.firstName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
    // }

}