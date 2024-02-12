import {ChangeEvent} from 'react'

export interface jobsInterface {
    company:string,
    position:string,
    phoneCompany:string,
    cepCompany:string,
    country:string,
    state:string,
    city:string,
    street:string,
    postalCode:string,
    about:string
}

export interface CoursesInterface {
    instituationName:string,
    course:string,
    instituationPhone:string,
    instituationCountry: string,
    instituationState: string,
    instituationCity: string,
    instituationAdress:string
}

export type BooleanObject = Record<string, boolean>

export interface InputExtendChangeEvent extends ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & {
        data_group: string;
    };
}

export type stringObject = Record<string, string>
