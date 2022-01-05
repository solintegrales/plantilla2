export class Usuarios{
    constructor(
        public nombre : string,
        public email  : string,
        public clave  : string,
        public rol    : string,
        public estado : string,
        public google? : boolean,
        public img?    : string,
        public id?     : string,
    ){}
}