    //oppgave 1
    // Define the testTall function
    function testTall() {
        let tall = document.getElementById("tall").value;
        let utdata = document.getElementById('utdata');
  
        // Promise definition
        let verdi = new Promise(function(resolve, reject) {
          if (parseInt(tall) === 10) {
            resolve("Tallet har verdien 10");
          } else if (parseInt(tall) > 10) {
            resolve("Tallet er større enn 10");
          } else if (parseInt(tall) < 10) {
            resolve("Tallet er mindre enn 10");
          } else {
            reject(new Error('Dette er ikke et tall'));
          }
        });
  
        // Call our promise
        verdi
          .then(function (fulfilled) {
            // Display the resolved value
            utdata.innerHTML = fulfilled; // Clear previous content
          })
          .catch(function (error) {
            // Display the rejected error message
            utdata.innerHTML = "Dette er ikke et tall: " + error.message; // Clear previous content
          });
      }


//oppgave 2

function endreOrd() {
    // Funksjon for å gjøre om ord til store bokstaver
    let ord1 = document.getElementById("ord1").value;
    let ord2 = document.getElementById("ord2").value;
    let ord3 = document.getElementById("ord3").value;

    const ordArray = [ord1, ord2, ord3];
    let utsend = "";


    function lagStoreBokstaver(ordArray) {
    return new Promise((resolve, reject) => {
        // Sjekk om alle elementer i array-en er tekststrenger
        if (ordArray.every(word => typeof word === 'string')) {
            // Gjør om alle ord til store bokstaver
            const storeBokstaverArray = ordArray.map(word => word.toUpperCase());
            resolve(storeBokstaverArray);
        } else {
            reject(new Error('Array-en inneholder noe annet enn tekststrenger'));
        }
    });
    }

    // Funksjon for å sortere ordene alfabetisk
    function sorterAlfabetisk(ordArray) {
    return new Promise((resolve, reject) => {
        // Sjekk om alle elementer i array-en er tekststrenger
        if (ordArray.every(word => typeof word === 'string')) {
            // Sorter ordene alfabetisk
            const sortertArray = ordArray.sort((a, b) => a.localeCompare(b));
            resolve(sortertArray);
        } else {
            reject(new Error('Array-en inneholder noe annet enn tekststrenger'));
        }
    });
    }

    // Kjører lagStoreBokstaver-funksjonen først
    lagStoreBokstaver(ordArray)
    .then(storeBokstaverArray => {
        utsend += ("Ordene gjort om til store bokstaver: " + storeBokstaverArray.join(', ')) + "<br>";
        // Deretter kjører vi sorterAlfabetisk-funksjonen med resultatet fra forrige steg
        return sorterAlfabetisk(storeBokstaverArray);
    })
    .then(sortertArray => {
        utsend += ("Ordene sortert alfabetisk: " + sortertArray.join(', '));
        document.getElementById("utsend").innerHTML = utsend;
    })
    .catch(error => {
        console.error("Feil oppstod:", error.message);
        document.getElementById("utsend").innerHTML = "En feil oppstod " + error.message;
    });
}

//oppgave 3

