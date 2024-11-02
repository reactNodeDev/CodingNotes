// prettier-ignore

// ------------------------- How to deploy a react-app to GITHUB -------------------------------- //

// 1- first create a repository in github. lets assume your usename is 'reactNodeDev' repository name is 'my-react-app'
username: reactNodeDev;
repository: my-react-app;

// 1.1- now, enter this command in terminal to select the repository as the focus of deploying/updating/pushing
("git remote add origin https://github.com/reactNodeDev/tata-cars-repo.git");

// 2- now in the 'package.json' file of your project , add the following key and property right at the top of the object
('"homepage": "https://reactNodeDev.github.io/tata-cars-repo"');

// 3- now, install 'gh-pages' as a dev dependency with npm using npm with the following cmd
("npm install gh-pages --save-dev");

// 4- now, back in 'package.json', in the 'scripts' object, add the following keys and properties
('"predeploy": "npm run build"');
('"deploy": "gh-pages -d build"');

// 4.1- now, type
("git push -u origin master");

// 5- now, lets deploy our project
("npm run deploy");

// 6- now, type the following commands
("git add -A"); // this adds all our files to git repository
('git commit -m "our first commit"'); //commit all our files into git

// 7- after adding and committing, we have to push our app again with
("git push origin master");

// -------------------------------- How To clone a github repo ----------------------------------------- //
// 1- copy the repo link from github. go to repository's page, click on 'Code' and copy the repo link
// 2- in the CL, type
("git clone *repo-link* cloned-repo");
// 3- a folder named cloned-repo will be added to your project folder. all of your current project files will be in that
// 4- now you gotta remove the 'origin' from 'remote' and change it to the 'cloned-repo' so that future changes will be pushed to the 'cloned-repo' and not the original project
// a) first check the 'remote'
("git remote");
// b) if remote is origin, remove it with
("git remote remove origin");
// c) now to create the cloned-repo repository, go to right-top corner, click on '+' button and click add repository
// d) choose a name                   eg cloned-repo-tataCars) and click create repository
// e) now go to the cloned-repo-tataCars page and copy its url from the 'Code' button
// f) now in the CL, add cloned-repo-tataCars to the origin with
("git remote add origin https://github.com/reactNodeDev/cloned-repo-tataCars.git");
// g) then, push the code to the cloned-repo with
("git push origin master");

// after CRA v4.0.0+ and React 17+. Create React App and the React team no longer ships with a service-worker.js file. in order to get the service-worker.js file, you will need to change it to:
("npx create-react-app crwn-clothing --template cra-template-pwa");
// All that changed is that you are saying you want to run create-react-app with the PWA (progressive web app) template which adds the 'service-worker.js' file.

// -------------------------------- Update All The Dependencies in a Project --------------------------- //
// go to the project folder and type in the CL. if there is a 'yarn.lock' file in the folder, delete it with 'rm yarn.lock' before updating the dependencies
("npm update -D");

// remove a file
(" rm *filename* ");
