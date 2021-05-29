export class ZipLocation {
    zipCode: number;
    constructor(zip: number) {
        this.zipCode = zip;
    }

    getZipCode():number{return this.zipCode;}

    setZipCode(zip:number){this.zipCode=zip;}

}