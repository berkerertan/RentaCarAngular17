//import { GetModelListResponse } from './../../features/models/responses/get-model-list-response';
import { Pipe, PipeTransform } from "@angular/core";
import { GetlistBootcampResponse } from "../../features/models/responses/bootcamp/getlist-bootcamp-response";

@Pipe({
    name:'filterPipe'
})
export class FilterBootcampPipe implements PipeTransform{

    transform(value: GetlistBootcampResponse[],filterText:string):GetlistBootcampResponse[] {
        filterText=filterText?filterText.toLocaleLowerCase():""
        return filterText?value.filter((m:GetlistBootcampResponse)=>m.name.toLocaleLowerCase()
        .indexOf(filterText)!==-1):value;
    }

}