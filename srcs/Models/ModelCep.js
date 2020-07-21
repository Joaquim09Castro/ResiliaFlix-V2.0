class ModelCep {

    constructor(street,complement,city,state,district){

        this._street=street;
        this._complement=complement;
        this._city=city;
        this._state=state;
        this._district=district;

    }

    returnZip(){

        return{

            street:this._street,
            complement:this._complement,
            city:this._city,
            state:this._state,
            district:this._district

        }
    }
}