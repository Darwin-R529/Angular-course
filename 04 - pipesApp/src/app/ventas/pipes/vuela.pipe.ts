import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform {

    transform(valor: boolean): string {      

        let resp: string

        if (valor === true) {
            return resp = 'Vuela'
        } else {
            return resp = 'No vuela'
        }

        //Are the same

        //return (valor) ? 'vuela': 'No vuela';
    }
}