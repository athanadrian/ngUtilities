

***********
-----------github pages deploy
//create github repo
ng build --prod --base-href='https://**********.github.io/ngUtilities/'
sudo ngh
or
npm run 'custom comand' -> deploy:gh

***********
-----------firebase deploy
sudo npm i -g firebase-tools
firebase init
//create firebase project
//choose firebase project
//edit firebase.json 
//{
//  "hosting":{
//      "public":"dist",
//      "rewrites": [
//             {
//              "source": "**",
//              "destination": "/index.html"
//        }
//      ]
//  }
//}
ng build --prod
firebase deploy
https://ngutilities.firebaseapp.com/signup
or
npm run 'custom comand' -> deploy:firebase

************
------------heroku deploy
heroku create
npm install express //back-end
add server.js
change package.json
 1) "start": "node server.js",
 2) "postinstall": "ng build --env=prod",
 3) ADD TO DEPENDECIES
"dependencies": {
    "@angular/cli": "1.1.2",
    "@angular/compiler-cli": "^4.0.0",
    "typescript": "~2.3.3",
  },
 4) ADD ENGINES //for compatibility
 "engines": {
    "node": "7.10.0",
    "npm": "4.2.0"
  } 
  git add .
  git commit -m "message"
  git remote //check for both github & heroku remotes
  git push heroku master //push it to heroku remote
  https://polar-lowlands-99052.herokuapp.com/

