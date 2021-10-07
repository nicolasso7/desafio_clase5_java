function Cortina(tipo, tela, ancho, alto) 
{
    this.tipo = tipo;
    this.tela  = tela;
    this.ancho  = parseFloat(ancho);
    this.alto = parseFloat(alto);
    this.eleccionTipo = function(){ alert("Usted eligió una cortina tipo "+ this.tipo +" con tela "+ this.tela)}
}

let cortinaTipo = prompt("Ingrese tipo de cortina")
let telaTipo = prompt ("Ingrese tela")


const cortina1 = new Cortina(cortinaTipo , telaTipo, 2.52, 1.95);
const cortina2 = new Cortina("Roller", "Sunscreen", 2.10, 1.50);
cortina1.eleccionTipo();
cortina2.eleccionTipo();
