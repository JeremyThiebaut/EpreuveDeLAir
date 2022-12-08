/**
 * Meta exercice

Créez un programme qui vérifie si les exercices de votre épreuve de l’air sont présents dans le répertoire et qu’ils fonctionnent (sauf celui là). Créez au moins un test pour chaque exercice.

Exemples d’utilisation :
$> python exo.py
air00 (1/3) : success
air00 (2/3) : success
air00 (3/3) : success
air01 (1/2) : success
air01 (2/2) : failure
air02 (1/1) : success
... 
Total success: (56/62)

Bonus : trouvez le moyen d’utiliser du vert et du rouge pour rendre réussites et échecs plus visibles.
 */

/****************
 *   Formatting  *
 ****************/
// Executes all the tests and puts them in an array with the result then returns the array
const tests = () => {
  const result = new Array();
  let success = 0;
  let all = 0;
  for (let i = 0; i < script.length; i++) {
    const file = script[i];
    // if the file exist
    if (fs.existsSync(file[0])) {
      for (let j = 0; j < file[1].length; j++) {
        const resultTest = useTest(file[0], file[1][j]);

        // if the file return an error
        if (resultTest.slice(0, -1).localeCompare("error") == 0) {
          result.push(
            `${file[0].slice(0, -3)} (${j + 1}/${file[1].length}) : ` +
              "\033[31m failure \033[0m \n"
          );
        } else {
          success++;
          result.push(
            `${file[0].slice(0, -3)} (${j + 1}/${file[1].length}) : ` +
              "\033[32m success \033[0m \n"
          );
        }
        all++;
      }
    }
  }
  result.push(`Total success: (${success}/${all})`);
  return result;
};

// Get the file name and the argument and create the command to execute and return the result
const useTest = (name, argument) => {
  const execSync = require("child_process").execSync;
  const cmdLine = `node ${name} ${argument.join(" ")}`;
  const result = execSync(cmdLine, { encoding: "utf-8" });
  return result;
};

/********************
 *      Parsing      *
 ********************/
// Initiates all tests
const fs = require("fs");
const script = [
  ["air00.js", [['"Bonjour les gars"']]],
  ["air01.js", [['"Crevette magique dans la mer des étoiles"', '"la"']]],
  ["air02.js", [["Je", "teste", "des", "trucs", " "]]],
  [
    "air03.js",
    [
      [1, 2, 3, 4, 5, 4, 3, 2, 1],
      ["monsieur", "bonjour", "monsieur"],
    ],
  ],
  ["air04.js", [['"Hello milady,   bien ou quoi ??"']]],
  [
    "air05.js",
    [
      [1, 2, 3, 4, 5, "+2"],
      [10, 11, 12, 20, "-5"],
    ],
  ],
  [
    "air06.js",
    [
      ["Michel", "Albert", "Therese", "Benoit", "t"],
      ["Michel", "Albert", "Therese", "Benoit", "a"],
    ],
  ],
  [
    "air07.js",
    [
      [1, 3, 4, 2],
      [10, 20, 30, 40, 50, 60, 70, 90, 33],
    ],
  ],
  ["air08.js", [[10, 20, 30, "fusion", 15, 25, 35]]],
  ["air09.js", [["Michel", "Albert", "Therese", "Benoit"]]],
  ["air10.js", [["a.txt"]]],
  ["air11.js", [["O", 5]]],
  ["air12.js", [[6, 5, 4, 3, 2, 1]]],
];

/********************
 *        Main       *
 ********************/
// Get the result
const result = tests();

/****************
 *   Formatting  *
 ****************/
// Formats the result and displays it in console
const displayArray = (result) => {
  let newString = "";
  for (let i = 0; i < result.length; i++) {
    newString += `${result[i]}`;
  }
  console.log(newString);
};

/********************
 *       Result      *
 ********************/
// Execute the function
displayArray(result);
