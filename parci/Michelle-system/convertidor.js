medidaTot = 0;
var convertor = {
    
    convertir(medida, medidaActual, medidaPosterior, tipoMedida) {

        switch (tipoMedida) {
            case "l":
                if (medidaActual == "m" && medidaPosterior == "cm") {
                    medidaTot = medida * 100
                } else if (medidaActual == "km" && medidaPosterior == "m") {
                    medidaTot = medida * 1000;
                } else if (medidaActual == "ft" && medidaPosterior == "m") {
                    medidaTot = medida * 0.3048;
                }
                break;
                

            case "t":
                if (medidaActual == "c" && medidaPosterior == "f"){
                    medidaTot = medida * 9 / 5 + 32;
                }else if(medidaActual == "k" && medidaPosterior == "f"){
                    medidaTot = (medida - 273.15)*1.8000 + 32;
                }else if (medidaActual == "k" && medidaPosterior == "c"){
                    medidaTot = medida - 273;
                }
                break;
            default: console.log("Escriba una letra correcta l/t");
        }
        console.log(medidaTot + medidaPosterior);
    }
}