 import { Pipe ,PipeTransform} from '@angular/core';

@Pipe({
    name:'summary'
})


 export class SummmaryPipe implements PipeTransform{
   transform(value:string,limit?:number){
if(!value)
return null;
let actuallimit=(limit)?limit:10;
return value.substr(0,actuallimit)+'....';
   } 
 }