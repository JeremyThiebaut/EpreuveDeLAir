/**
 * Sur chacun d’entre eux
 
Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.

Exemples d’utilisation :
$> ruby exo.rb 1 2 3 4 5 “+2”
3 4 5 6 7

$> ruby exo.rb 10 11 12 20 “-5”
5 6 7 15

L’opération à appliquer sera toujours le dernier élément.

Afficher error et quitter le programme en cas de problèmes d’arguments.
 */

/********************
 *     Functions     *
 ********************/
// Allows to calculate each element of the array with the calculator at the end of the array
const calculate = (num, calc) => {
  const newArray = new Array();
  for (let i = 0; i < num.length - 1; i++) {
    newArray.push(Number(num[i]) + Number(calc));
  }

  return newArray;
};

/**********************
 *   Error management  *
 **********************/
// Return errors
const error = () => {
  console.log("error");
  process.exit();
};

/********************
 *      Parsing      *
 ********************/
// Retrieves the elements and checks if they are indeed numbers before sending them in function
const parsing = () => {
  const num = process.argv;
  num.splice(0, 2);
  if (num.length < 2) {
    return error();
  } else {
    for (let i = 0; i < num.length; i++) {
      if (isNaN(num[i])) {
        return error();
      }
    }
    const calc = num[num.length - 1];
    return calculate(num, calc);
  }
};

/****************
 *   Formatting  *
 ****************/
// Formats the result and displays it in console
const displayArray = (result) => {
  let newString = "";
  for (let i = 0; i < result.length; i++) {
    newString += `${result[i]} `;
  }
  console.log(newString);
};

/********************
 *        Main       *
 ********************/
// Get the result
const result = parsing();

/********************
 *       Result      *
 ********************/
// Execute the function
displayArray(result);
