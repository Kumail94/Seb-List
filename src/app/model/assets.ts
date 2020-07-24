export class Assets{
    public title : any;
    public fileName :any;
    public fileSize : any;
    public fileModifiedDate :any;
    constructor(t , fN , fS , fD){
        this.title = t;
        this.fileName = fN;
        this.fileSize = fS;
        this.fileModifiedDate = fD;
    }
}