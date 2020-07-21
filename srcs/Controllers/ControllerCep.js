class ControllerCep{

    constructor(){

        throw new Error (" Class without instancies");

    }

    static getAdress(urlZip){

        let requestZip= new XMLHttpRequest();
        requestZip.open("GET",urlZip);

        requestZip.addEventListener("load", () =>{

            if (requestZip.status!=200)
            {
                throw new Error ("Request not found");
            }

            let requestZipObj=JSON.parse(requestZip.responseText);
            
            let completeAdress= new ModelCep(requestZipObj.logradouro,
                                             requestZipObj.complemento,
                                             requestZipObj.localidade,
                                             requestZipObj.uf,
                                             requestZipObj.bairro)
            
            ViewCep.displayAdress(completeAdress.returnZip());           
        

        });

        requestZip.send();

    }

}