//Gen
let Gens = "qazwsxedcrfvtgbyhnujmikolp QAZWSXEDCRFVTGBYHNUJMIKOLP!";
let Target = "Hello World!";
let generate = "";

//make genration text
for (let i = 0; i < Target.length; i++) {
  generate += Gens[Math.floor((Math.random() * 54))]
}

//fitness
String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement
    + this.substr(index + replacement.length);
}
let fitness = 0;

//crossover
for (let i = 0; i < Target.length; i++) {
  if (generate[i] == Target[i]) {
    fitness++;
    generate = generate.replaceAt(i, Target[i]);
  }
  else {
    fitness++;
    generate = generate.replaceAt(i, Target[i]);
  }
  console.log(fitness);
  console.log(generate);
}