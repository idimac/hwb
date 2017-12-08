var elems = document.getElementsByTagName('input');

for (var i =0; i < elems.length; i++) { //add eventlistener to clicked button
elems[i].addEventListener('click', handler);
};

var globalRepository = {};



function handler() { // function of summing clicks and adding new keys to globalRepository object
    for(var key in globalRepository) {
        if(key == this.name){
            globalRepository[this.name]++;
        }
    };
    
    if(!(globalRepository[this.name])) {
        globalRepository[this.name] = 1;
    };
};
  
var a = setInterval(logger, 3000);



function logger() {
    var string = "";
    for( var i in globalRepository) {
    string = string + "Button " + i + " was pushed "+ globalRepository[i] + 'times' + '\n';
    }
    console.log(string)
}

