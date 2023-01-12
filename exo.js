
function findLargestNumber() {
    const numberList = [2, 5, 6]
    Math.max(...numberList)
    console.log(" ")
    console.log ("voici votre liste avant le la sélection : " , numberList)
    console.log(" ")
    console.log("voici le nombre le plus grand de cette dernière " ,Math.max(...numberList))
    console.log(" ")
    return numberList
}
findLargestNumber()
console.log(" ")

function sortWords() {
    const stringList = ["alpha", "omega", "charlie", "beta"]
    console.log("voici votre liste non-trier ", stringList)
    console.log(" ")
    console.log("voici votre liste trier ", stringList.sort())
    console.log(" ")
    return stringList.sort();
}
sortWords();
console.log(" ")

function countOccurences() {
    const monMot = "Bonjour"
    const letter =  "o"
    let cpt = 0
    for (const element of monMot) {
        if (element == letter) {
            cpt++
        }
    }
    console.log("ma lettre est : " ,letter , " elle est présente : ",cpt, "Dans mon le mot : ", monMot)
}
    countOccurences()


function flattenArray() {
const newArray = [2,5,6,[3,9]]
console.log("notre tableau avant le flat " , newArray)
console.log(" ")
console.log("notre tableau après le flat : ", newArray.flat());
}
flattenArray()

function removeDupes () {

    const newArray = [3,4,1,4,1]
    console.log("notre tableau avant la suppresion : ", newArray)
    console.log(" ")
    const monSet = new Set(newArray)
    console.log("mon tableau apres la suppresion" , monSet)
    console.log(" ")
}
removeDupes()

function swapVariables () {
    let x,y,swap ;
    [x,y] = [1,2];
    console.log("Voici la valeur initial de X : ", x)
    console.log(" ")
    console.log("Voici la valeur initial de Y : ", y)
    console.log(" ")
    const changes = { y : x, ...swap, x:y}
    console.log("Voici leur valeur suite au swap : ",changes)
}
swapVariables()

function parseObject(){
    monObjet = {a:1,b:2,c:3}
    console.log("Voici notre objet sans modification : ", monObjet)
    const monTableau = Object.values(monObjet)
    console.log(" ")
    console.log("Voici notre objet apres modification : ", monTableau)
}
parseObject();

function mergerObject () {
    mergeObjet = {a:1,b:2,c:3}
    console.log("Voici mon objet n°1 : ", mergeObjet)
    console.log(" ")
    mergeObjet2 = {d:4,e:5,f:6}
    console.log("Voici mon objet n°2 : ", mergeObjet2)
    console.log(" ")
    mergeObjet3 = Object.assign(mergeObjet, mergeObjet2)
    console.log("Voici mes deux objet combiné  : ", mergeObjet3)
}
mergerObject()

function sumArray () {
    monTableau = [1,2,3,4]
    console.log(" ")
    console.log("voici votre tableau", monTableau)
    const sum = monTableau.reduce(
        (add , currentValue) => add + currentValue);
    console.log("voici la somme des valeur de votre tableau : ", sum)
    console.log(" ")
}
sumArray()

function sortObject () {
    sortObjet = {b: 1, d: 2 , a: 3}
    console.log("voici notre tableau avant d'être trier dans l'ordre", sortObjet)
    console.log(" ")
    const sortTab =(montab) => montab.sort()
    console.log(sortTab([...Object.entries(sortObjet)]));
}
sortObject()