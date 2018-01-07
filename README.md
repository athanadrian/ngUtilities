

***********
github pages deploy
//create github repo
ng build --prod --base-href='https://**********.github.io/ngUtilities/'
sudo ngh
or
npm run 'custom comand' -> deploy:gh

***********
firebase deploy
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