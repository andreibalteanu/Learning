import { readdir, unlink } from "fs/promises";
import inquirer from "inquirer";

const args = process.argv.slice(2);
const fullPath = args[0];

if (!fullPath) {
  console.log("Path missing!");
  process.exit(1);
}

function listFiles(path) {
  readdir(path)
    .then((files) => {
      if (files.length === 0) {
        console.log("No files found in the directory.");
        return;
      }

      console.log(`Files in ${path}:`);

      inquirer
        .prompt([
          {
            type: "list",
            name: "file",
            message: "Select a file to view:",
            choices: files,
          },
        ])
        .then((answers) => {
          const fileToDelete = `${path}/${answers.file}`;

          // Delete the selected file
          unlink(fileToDelete)
            .then(() => {
              console.log(`File deleted: ${answers.file}`);
            })
            .catch((error) => {
              console.error(`Error deleting file: ${error.message}`);
            });
        })
        .catch((error) => {
          console.error(`Error selecting file: ${error.message}`);
        });
    })
    .catch((error) => {
      console.error(`Error reading folder: ${error.message}`);
    });
}

listFiles(fullPath);
