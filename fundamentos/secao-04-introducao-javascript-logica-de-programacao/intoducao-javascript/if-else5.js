const nota = 52;

if (nota < 0 || nota > 100 ) {
  console.log("nota inválida");
}
else if (nota >= 90) {
  console.log("Você tirou A");
}
else if (nota >= 80) {
  console.log("Você tirou B");
}
else if (nota >= 70) {
  console.log("Você tirou C");
}
else if (nota >= 60) {
  console.log("Você tirou D");
}
else if (nota >= 50) {
  console.log("Você tirou E");
}
else {
  console.log("Você tirou F");
}
