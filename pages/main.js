//Se solicita año, mes y dia de nacimiento. Se restan los valores en ese orden, se llega a una cifra de cuatro digitos.
//luego debe separarse esa cifra en digitos y sumarse hasta obtener un solo dígito. Y con ese valor se devuelve una interpretación segun el número. 
let año = parseInt(promp("Ingresa tu año de nacimiento con números"));
if (año >= 1900 && año <= 2023)
alert (`año de nacimiento ${año}`);
else {"Ingresa un año entre 1900 y 2023"}

let mes = parseInt(promp("Ingresa tu mes de nacimiento con números"));
if (mes >= 1 && mes <= 12)
alert (`mes de nacimiento ${mes}`);
else {"Ingresa un mes entre 1 y 12"}

let dia = parseInt(promp("Ingresa tu dia de nacimiento con números"));
if (dia >= 1 && dia <= 31)
alert (`dia de nacimiento ${dia}`);
else {"Ingresa un dia entre 1 y 31"}
