# vue-firebase
This is a VueJs App with Firebase.<br>
A simple but functional app  the front-end with VueJs<br>
The backend is done trough a api from firebase

# In this project:
- firebase authentication trough e-mail 
- User data is fetched from firestore and stored in Vuex
- VueJs transitons trough pages and some components

# There will be more
There are coming some new features soon like:
- Add and see products
- Add products to cart
- An Order dashboard
- An Account dashboard

And mayby more...

# Setup
Needed for this project:
- node.js
- vuejs cli 3.x or above
- Firebase account (google account)

# Get started
First get the project code and install.
- Download/clone the repo.
- Install all packeges with: npm i (must be in the root of your project)
- Run project with: npm run serve (or npm run build BUT this app is not debugged yet)

Then go to firebase.google.com and go to:
- right in the top coner: Console
- Click on Add Project
- When project created go to authentication > Sign-in method and enable e-mail with password
- Then go to Firestore and create a database, after that go to the rules tab and change the rule like:<br>

// below are the basic rules <br>
service cloud.firestore { <br>
  match /databases/{database}/documents { <br>
    match /{document=**} { <br>
      allow read, write: if false; <br>
    } } } <br>
You only need to change the line: allow read, write: if false; <br>
To: allow read; allow write: if request.auth.uid != null <br>

When that is done click on project overview, then on +Add app and create a app.
When the app is created:
- Go to app settings and scroll down to forebase sdk snippet
- Copy the code and paste it in src/firebaseConfig.js
 
