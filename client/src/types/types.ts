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
    instituationAdress:string
}

type BooleanObject Record<string, boolean>
