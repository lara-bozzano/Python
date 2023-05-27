
const APIURL = "https://jsonplaceholder.typicode.com/users";

fetch(APIURL)
    .then((datos) => datos.json())
    .catch( error => console.log(error) )
    .then((datos) => {
        let start = "<";
        let finish = "</";
        let center = "center>";

        var values = "";
        console.log(datos);

        datos.forEach((usr) => {
            values += `
            <h3> Hola, ${usr.name} </h3>
            <h3>  ${usr.username} </h3>
            <h2> Phone number:  ${usr.phone} </h2>
           
        

            `;
        });

        let result = start + center + values + finish + center;
        document.write(result);
    });
