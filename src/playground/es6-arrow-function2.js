//argument object no longer bound with arrow functions
const add = function(a, b) {
  console.log(arguments); //a ve b dışında gönderilen parametre olursa a ve b gibi onu da console da gösterecek
  return a + b;
};
console.log(3, 4, 13);

const addArrow = (a, b) => {
  console.log(arguments); //burada uygulama hata verecek
  return a + b;
};

//this keyword no longer bound
const user = {
  name: 'Ramazan',
  city: ['nevşehir', 'istanbul'],
  printPlacesLived() {
    //burada this.name erişilebilirdir.
    //this.city.forEach(function(city) { //bu kullanımda hata oluşacaktır. workaround olarak that = this kullanılır.
    this.city.forEach(() => { // bu kullanımda that = this atamasına gerek yoktur. bu şekilde kullanılabilir.
      console.log(this.city);
    });
  }
};
