let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};

for (let prop in info) {
  if (prop == 'recorrente' && info[prop] == "Sim" && info2[prop] == "Sim") {
      console.log("Ambos recorrentes");
      continue;
  } 
  console.log(`${info[prop]} e ${info2[prop]}`);
}