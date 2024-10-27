- to install the latest versions of the package/packages, use 'npm install --save'

```jsx
import { Component, useEffect, useState } from "react";
"import Searchbox from ./src/components/search-box/search-box.component;"

 import styled from "styled-components"; 
```

# --- how to change directory in cmd prompt --- //
- to go to a different drive just enter the drive name. for ex 'D:'
- now type the folder name you wanna go to


# --- how to install react ---
- once you are in the desired folder in command prompt, type 'npx create-react-app *desired-app-name*'
- now type 'npm start' to start the app development server in browser


- jsx - html code inside javascript. 'jsx' stands for 'javascript xml'


# ---------------------------------------- COMPONENTS ----------------------------------------------- 
- Components are functions which define a necessary part of the react code
- Components' names must be declared with a capitalized letter so that react knows its a component
- JSX - HTML code block inside a javascript function (which can also be returned by the functn) is called a JSX


# -------------------------------- HOW TO ENABLE EMMET ABBREVIATION ------------------------------- 
- to enable Emmet Abbreviation in '.js' files, go to 'settings.json' and add the following key and value to the parent object
```json
     "emmet.includeLanguages": {
      "javascript": "javascriptreact"
      }
```

 We must always return JSX (or anything) from a component or else we will get an error


# --------------------------------------- Virtual DOM ------------------------------------ #
- React helps us to build a 'virtual DOM', which means it enables us to use javascript functions (aka components) inside the DOM of our webpages
- Virtual DOM gives react a blueprint of how it should update the actual DOM


- **One Way Data Flow** - Data flows only one way in the 'virtual DOM', which means data travels only down in a virtual DOM


#  --- Great React Developers do 3 things ---
- Decide on Components - decide how to break down an app into components
- Decide the state and where it lives


# ---- BABEL ---- #  
Mostly, the browsers today do not understand the encoded javascript and html we use in react. So, babel bundles our code in old school javascript version that can be understood by the browsers


# ---- WEBPACK ---- #  
Webpack makes our code more efficient. It `splits our code into small chunks/modules` of files which are used/leveraged at their respective, relevant time


# NPM BUILD ("build": "react-scripts build")- 
This command leverages Babel and Webpack to prepare our app for publishing/deployment


# ------------------------------------- Class Based Components ----------------------------------- #
- to build a 'class based component', define a class which extends 'Component' class of react. then, inside of it use the render method and make it return the jsx
```jsx
class App extends Component {
  render() {
    return <h1>This is class based component</h1>;
  }
}
```


# ------------------------------------- Functional Components ----------------------------------- #
- Components defined with a function
- They dont have access to 'state' because they dont have access to 'constructor' which is a class exclusive method
- They also dont have access to 'lifecycle methods'
- they are just components which have access to 'props' and return 'html'


# ------------------------------------- State ----------------------------------------- #
- By using a class based component, we get access to state.
- State - State is a JS object which we can access anywhere inside our class
- to define a state, we call the 'constructor' method inside our class
- inside the constructor method, we call the 'super()' method which calls the constructor method on the super class 'Component'

- super functn gives us access to 'this.state'. the state property now exists on our class app and we can set it to something
```jsx
this.state = {
  welcomeMsg: "Hello Tushar Ghildiyal"
};
```

- then we can access the state object values inside our jsx using the state object keys.
```jsx
<p> {this.state.welcomeMsg} </p>;
```

- we can use attributes predefined in the 'Component' in the html tags of jsx
```jsx
<button
  onClick={() =>
    this.setState({ welcomeMsg: "Hello Tushar, MERN Stack Developer" })
  }
>
  Change Name
</button>;
```

- when the state is updated in the JSX, the render method is called again. the whole DOM is rendered again. because data flows only one way (downwards) in a virtualDOM

- we can add arrays in the state object and then we can access those arrays in the render method using 'map'
- we should always add a 'unique key' to every array element to help react determine exactly which array element it is accessing
- the unique key of the element is accessed with the 'key' attribute in jsx

```jsx
{
  this.state.tataCars.map((car) => {
    <h1 key={car.id}> {car.name} </h1>;
  });
}
```

- Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and Console will warn you about it if you miss it)

# --------------------------------- Single Page Applications -------------------------------- #
- The idea behind SPA is that whenever the user makes a request to the server, instead of sending back a new webpage, the server sends back data which gets recieved/updated on the same page

# ---------------------------------- Life Cycle Methods ------------------------------------ #
- Life cycle methods are methods inside a component that are called automatically by react a-different stages when the particular concerned component is rendered

## ---------------------------------- CommponentDidMount ------------------------------------ #
- its a lifecycle component which is declared inside our component and it is called/executed when our component is rendered by react. the code inside 'CommponentDidMount' function is executed when the component is rendered by react
```jsx
 componentDidMount() {
     fetch("https:jsonplaceholder.typicode.com/users")
       .then(res => res.json())
       .then(usersDetails => {
         this.setState({ users: usersDetails })
       });
   }
```

# ---------------------------------------- PROPS --------------------------------------------- #
```jsx
  //'props' is passed as a parameter in this functional component
export const CardList1 = (props) => {
  console.log(props);
  return <div>Hello Tushar</div>;
};

//now when the component is leveraged, we can pass pass props in any attribute of the component jsx tag
<Cardlist1 name="tushar" />;

// 'props.children'- everything between the component html tags (<ComponentName></ComponentName>) comes under props.children
export const CardList2 = (props) => {
  // console.log(props);
  return <div>{props.children}</div>; // everything in between <CardList2> and </CardList2> will be placed inside the 'div'
};

<CardList2>
  {/* // below line of code is 'props.children' */}
  <h1>Tushar</h1>
</CardList2>;

<CardList2 cars={this.state.tataCars} />; // we are passing 'this.state.tataCars' as 'props' named 'cars' inside our component call, so that we have access to 'this.state.tataCars' where we have defined the component

// Now, to access this 'cars' property of 'props' in our component definition, we use 'props.cars'
export const CardList3 = (props) => {
  return (
    <div className="card-list">
      {props.cars.map((car) => (
        <h4 key={car.id}> {car.name} </h4>
      ))}
    </div>
  );
};

<h4 key={car.id}> {car.name} </h4>; // in this line of code, we are passing 'car.id' as the 'key' attribute, so that react knows which particular element we are at.

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.cars.map((car) => (
        <Card car={car} />
      ))}
    </div>
  );
};

// Card Component
export const Card = (props) => (
  <div className="card-container" key={props.car.id}>
    <img
      src={`https://robohash.org/${props.car.id}?set=set2&size=180x180`}
      alt=""
    />
    <h2> {props.car.name} </h2>
    <p> {props.car.category} </p>
  </div>
);

{
  props.cars.map(
    (car) => <Card car={car} /> //we pass each car as a 'prop' to the component 'Card'
  );
}
// now, in the 'Card' component, we can access each 'car' with 'props.car'
```

# -------- input and onChange --------- #
- the below method is used to access the value of an input and if any change occurs on the input, the eventlistener runs a function which we define ourself
- we have used that function to change the value of 'searchfield' property of 'state' to be updated whenever there is a change detected in the input
```jsx
<input
  type="search"
  placeholder="Search cars"
  onChange={(e) => {
    this.setState({ searchField: e.target.value });
  }}
/>
```

- if we output the value of 'state' like below, the state will always be updated later than the change in the input field and not at the same time. thats because, setState is an async functn
```jsx
<input
  onChange={(e) => {
    this.setState({ searchField: e.target.value });
    console.log(this.state);
  }}
/>
```

- to solve the above problem, we pass the console.log in a callback functn i.e., the 2nd argument in the 'setState' function
```jsx
<input
  onChange={(e) => {
    this.setState({ searchField: e.target.value }, console.log(this.state));
  }}
/>
```

# --------------------------------------- Synthetic Event ------------------------------------- #
- Its like a event tracker which tracks a real event in DOM and then a react/javascript function runs
- basically, our virtualDOM tracks the event and we define functions with react to decide what happens when that event occurs
- below, 'onChange' is a synthetic functn. its not a native html/jquery attribute. it tracks a change in the input field and performs the subsequent functions. its something defined in react library
```jsx
<input
  onChange={(e) => {
    this.setState({ searchField: e.target.value }, console.log(this.state));
  }}
></input>;
```

# Functional Components do not have access to 'constructor' functn and lifecycle methods

## --- why state only in app.js ---
- we define a state only for the 'app.js' and not for individual components because of one-way-data-flow. 
- 'app.js' sits on top of the hierarchy. so, data flows down from 'app.js' to all the individual components. 
- individual components have no way of communicating with each other's states directly because data will have to flow up  in that
- so, in a way 'app.js' acts like a powerhouse sitting at the top from which data flows down to all the individual components. it also acts like a medium for 2 components to communicate within.
 - 1- app.js
 - 2- Component-1
 - 3- Component-2

- if `component-1` wants to let 'component-2' know that there has been a change in the state, it will have to go through 'app.js' because its the only component which has the state

# ----------------------------------- This Keyword in React ----------------------------------- #
- In the methods defined already by react in 'Component' library, the this keyword is already bound to the class's 'constructor' method in which they are declared. examples of already defined methods in react are 'lifecycle methods', 'render' etc. they are already programmed/bound so that the this keyword within them points to the class's constructor method.

- example below
```js
class ReactApp extends Component {
    constructor() {
      super()

      this.state = []
    }

  componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((usersDetails) => this.setState({ users: usersDetails }));
    }
}
```
- in the above class definition, 'componentDidMount()' is already a defined method in react's component library. it is already bound to point 'this.state()' inside it to point to the 'state' object in class's constructor method

## ---- user's custom defined methods in class ---- //

- using function declaration (not recommended)
```jsx
class complexApp extends Component {
     constructor() {
      super()

      this.state = []

      this.handleChange = this.handleChange.bind(this) // we bind the 'this' of "handleChange" function to the this of the 'ComplexApp' constructor, so that the 'this' in "handleChange" points to the 'constructor' of 'ComplexApp' class
    }

    handleChange(e) {
    this.setState({ searchField: e.target.value });
  }
}
```

- the 'this' keyword in a function declaration points to the window object, as it doesnt get its own 'this' keyword
- therefore, the this inside "handleChange" function points to the window object. the window doesnt have a variable named 'setState' and thats why we get an error
- the "handleChange" function is placed inside the 'ComplexApp' class, and we want the 'this' in "handleChange" to point to the 'constructor' method which in turn points it to the 'ComplexApp' class
- and to make this happen we bind the 'this' of "handleChange" function to the this of the 'ComplexApp' constructor
this.handleChange = this.handleChange.bind(this)

  ## ----------- using arrow functions ------------- ## 
- an arrow function's 'this' points to the parent object of that arrow functn
- so with the arrow function, we dont need to bind the 'this' of user defined method to the constructor's 'this'. as that user defined method's 'this' is already pointing to the 'class component'
```jsx
class complexApp extends Component {
     constructor() {
      super()

      this.state = []
    }

    handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
}
```

**--- Important ---**
-  A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).
```js
 const obj1 = { name : 'Taylor Sander' }

 const obj2 = obj1 ; // 'obj2' is set equal to 'obj1'. they both are referring to the same point in memory. so they are exact 2 same objects.
// any change made to either obj will be reflected on both objects. because objects are of reference data type

// to solve this, we use 'Object.assign()'
const obj3 = Object.assign({}, obj1)
```

# ------------- chronology of class based components ------------------ #
- `constructor` - constructor method runs first.
- `render` - render method runs after that
- `componentDidMount` - componentDidMount runs after that. if some api call is made and the state is updated, render method will run again
- whenever the state updates, render method runs. 

# --------------------- Re-rendering of Components #
- Components get re-rendered on 2 conditions
  - 1. when 'setState' gets called
  - 2. when 'props' are updated


# ----------------------- Functional Components #

- `Pure Functions` - A pure function is a function which returns the same exact thing when it is passed the same exact arguments, no matter how many times it is called. because what it returns is solely dependent upon the arguments passed into it.

- `Impure Functions` - A Impure function is a function which doesnt necessarily return the same exact thing when it is passed the same exact arguments, because what it returns is also dependent upon external variables other than the arguments passed
- below function is an impure function because what it returns is also dependent upon value of 'c'
```jsx
const c = 5

function addThis(a,b) {
  return a+b+c;
}
```


# ---- useState()  #
```jsx
 const [stateValue, setStateValue] = useState('')
```
// 'useState' can be used to track any data that we might have entered or updated through our browser/code. examples - search bars, input fields of a form etc.
// 'useState()' gives us back an array with two values [stateValue, setStateValue]
// 'stateValue' is the name of value we want to store/address 
// 'setStateValue' is the function which defines what we want to set set state value to. it is like functional components' version of 'this.setState()'
// useState('') means the initial value of 'stateValue' is an empty string
const [tataCars, setTataCars] = useState([]) // initial value of 'tataCars' is [](empty array)

const [searchField, setSearchField] = useState('') //'searchField' is declared here and its initial value is ''. and 'setSearchField' is the function which updates its value 
const handleSearchChange = (e) => {
  const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
}
<Searchbox onChangeHandler={handleSearchChange} />

//------------------------------ Functional Components Re-rendering ---------------------------- //
// 1- Functional components, just like class components re-render when 'props' (arguments in functional component) or 'state' value changes
// note that re-render happens only when 'state value' changes and not the 'setstate'. so, when the first argument of 'useState()'

// in the below function, the initial value of 'searchField1' is set to 'a', so when 'a' is typed in the 'searchFieldString', 'searchField1' value will still be 'a' and not 'aa' and the component will not re-render
const [searchField1, setSearchField1] = useState("a");
  console.log({ searchField1 }); // we are logging 'searchField' after 'useState()' is called i.e., after 'searchField' is being updated

  const searchChangehandler = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField1(searchFieldString);
  };

// ----------------------------------- Infinite Rendering ---------------------------------------- //
// when a certain piece of code triggers infinite rendering
// the functional component gets rendered again and again causing an infinite loop

//in the below functional component, fetch will cause infinite rendering because the array 'usersDetails' that is returned from the external API and the array 'users' set by 'this.setState({ users: usersDetails })' in our state will always point to a different location in memory. now becuase the equality operator will always fail, 'users' araay will keep updating infinitely causing infinite loop
const APP1 = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((usersDetails) => this.setState({ users: usersDetails }));
}

// ---------------------------------------- useEffect() --------------------------------------- //
// side-effects are achieved when our functional component's return statement or rendering is dependent upon external factors/variables/functions/objects
// 'useEffect()' helps us in preventing infinite loop by causing side-effects in our component.

useEffect(()=>{}, [])
// 'useEffect' takes 2 arguments.
// 1- its a callback function that has the code/effect that we want to have inside our component
// 2- contains different dependencies ie. values that our callback function will depend upon e.g., state values, props passed in the component
// when the values in the array (2nd argument) will change, only then will the callback function(1st argument) run

const APP2 = () => {
 useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((usersDetails) => this.setState({ users: usersDetails }));
 }, [])
}
// in the above component, we are fetching values from an external API
// it causes an infinite loop so we want it to run only once when the component's first render happens and never again
// thats why there is an 'empty array' as the 2nd argument. it means there are no dependencies for that functn
// as there are no dependencies, the callback function's re-calling doesnt depend upon anything and hence it would never be called again after the first mount of the component

// if we add a search bar to our page which doesnt do anything, it would cause our state to update everytime there is a change made to the input field of the search bar due to the 'newFilteredUsers' function that updates the users array, even if there is no change made to the state. this would hinder our page's performance big time

// so we add the 'newFilteredUsers' method inside 'useEffect' method, and add 'users' array & 'searchField' to dependencies, so that filtering of users happens only if 'users' array or 'searchField' changes
 useEffect(() => {
    const newfilteredUsers = users.filter((user) => {
      return user.name.toLowerCase().startsWith(searchField.toLowerCase());
    });

    setFilteredUsers(newfilteredUsers);
  }, [users, searchField]);

// --------------------------------- Props in Functional Components -------------------------------- //
// first, we need to pass 'props' as arguments in the component
// then, we can destructure the props at the top of the component body
 const { usernames, placeholder } = props;

// we can also destructure the props right at the argument passing
const greatReactApp = ({usernames, placeholder}) => {

};

// ---------------------------------- DOM Paint Flashing ---------------------------------- //
// DOM paint flashing helps us to physically see changes in our app in our browser in real time

  const [title, setTitle] = useState("Tata Cars");

  const appTitleHandler = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setTitle(searchString);
  };

  <div class="App">
    <h1 className="brand-heading"> {title} </h1>
   <Searchbox placeholder="change Title" handleChange={appTitleHandler} />
  </div>
// above, 'appTitleHandler' which sets the 'title' variable is a callback on 'Searchbox'. the 'title' set is being rendered in the 'h1' in real time

// -------------------------------------- Inline Style in React ------------------------------------ //
// React also lets us use inline-style in jsx html
// below we are dynamically setting 'background-image' using inline-styling
const MenuItem = ({ title, imageurl }) => {
  return (
    <div style={{ backgroundImage: `url(${imageurl})` }} className="menu-item"> 
      <div className="content">
        <div className="title">{title}</div>
        {/* <span className="subtitle">{subtitle}</span> */}
      </div>
    </div>
  );
};
// background-position: center
// background-size: cover

// ---------------------------------- Specific properties in state ------------------------------------ //
// if we want an item in the state to have specific properties, we can add key and values to it to do that
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
          size: 'large' // special key-value added to define specific property 
        }
      ]}
    }
}

// ------------------------------------- React Router ------------------------------------------- //
// 1- install 'React Router DOM v6' with
                    'npm install react-router-dom@6'

// 2- go to 'index.js' of 'src' folder and import 'Browser Router' from router-dom library
    'import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";'

// 3- then wrap the <App /> jsx inside <BrowserRouter></BrowserRouter>
    ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById("root")
  );

// 4- now go to 'App.js' and import 'Route' and 'Switch' from router-dom library
    'import { Switch, Route, Routes, Outlet } from "react-router-dom";'
    'import Homepage from "./src/components/pages/homepage/homepage.component";'

// 5- now in the jsx of our app, we define the routes
  class App extends React.Component {
    render() {
      return (
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/hats"} component={<Hatspage />} />
        </Routes>
      </div>
    );
  }
}

# ------------------------------- Nested routing ---------------------------- #
// 1- when we declare one route inside another route, its called nested routing
 class App extends React.Component {
    render() {
      return (
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Homepage />}>
              <Route path={"/hats"} component={<Hatspage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

// 2- Route with path "/hats" is nested inside the route with path "/"

// -------------------------------------------- Outlet ------------------------------------------------ //
// 3- Nested routing wont work until we define in the parent route where we want to render the nested route.
// 4- so, first we have to specify where we want to render the nested route
const Homepage = () => {
  return (
    <div>
    <Outlet />
    <Directory categories={categories} />
    </div>
  )
}    
// 5- so, now 'Outlet' wil render before 'Directory' component inside 'Homepage' component. 'Outlet' acts as a palceholder for all the rested routes 

// ------------------- More on Outlet ------------------ //
const NavigationBar = () => {
    return (
      <div>
        <div>
          <h1>This is a Navbar</h1>
        </div>
        <Outlet />
      </div>
    )
}
// 1- in the above component, 'Outlet' will render after the navbar
// 2- Now, lets define the routing
const CrazyApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
            <Route path="home" element={<Home />} /> 
        </Route>
      </Routes>
    </div>
  )
}
// 3- in the above compoent 'CrazyApp', route of the path "/home" takes place of 'outlet'
// 4- '/' path in url will render 'NavigationBar'
// 5- "/home" path in url will render both 'NavigationBar' and 'Home'

// --- index attribute in Route ---- //
const CraziestApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
            <Route index element={<Home />} /> 
            <Route path="shop" element={<ShopPage />} /> 
        </Route>
      </Routes>
    </div>
  )
}
// 1- due to the 'index' attribute, 'Home' will always be rendered along with 'NavigationBar', whenever '/' path is entered in url
// 2- when some other path like "shop" is entered, "Home" wont render and "ShopPage" will be rendered with "NavigationBar" as the 'Outlet'
// 3- "Home" will render with "NavigationBar" only with "/" path, as it is like a default component to be rendered with "NavigationBar" when path is "/"

// ----------------------- Fragment --------------------------- //
// 1- React mandates us to wrap elements around 'div' in our jsx templates
// 2- 'Fragment' helps to prevent the error which is caused when we dont wrap our jsx inside 'div'
// 3- 'Fragment' prevents that by wrapping our jsx code inside 'Fragment' tags

" import { Fragment } from 'react' "

const RandomJsx = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div>Logo</div>
      <a href="">A link</a>
      <h2>Heading awesome</h2>
      <p>What a great link</p>
      </div>
    </Fragment>
  )
}
// 4- in the above component, no error will be shown as our jsx is wrapped inside 'Fragment' tags
// 5- when we'll check out the html on the webpage, we'll see that only the code inside 'Fragment' tags is rendered. only the below code is rendered in the html
   "<a href=``>A link</a>"
   "<h2>Heading awesome</h2>"
   "<p>What a great link</p>"

// -------------------------------------- Firebase Fundamentals --------------------------------- //
// 1- Install firebase with
                      "npm install firebase"

// 2- Add a new project and select a name for it
// 3- initiate add a web app and give it a name and then 'Add firebase SDK' section will open up. copy all the 'initialise Firebase' peice of code provided by firebase (below)
' import { initializeApp } from "firebase/app"; '

const firebaseConfig = {
  apiKey: "AIzaSyAgPjWedK8mXaxjPsMq4JRWWJnWBMTUnGY",
  authDomain: "fleepcart.firebaseapp.com",
  projectId: "fleepcart",
  storageBucket: "fleepcart.appspot.com",
  messagingSenderId: "535791958284",
  appId: "1:535791958284:web:694ea860a3aec01706f129"
};

const firebaseapp = initializeApp(firebaseConfig);

// 4- in the src folder, create a folder utils -> firebase and create a file 'firebase.utils.js' in it
// 5- copy the above 'initialise Firebase' code in 'firebase.utils.js'
// 6- import the following libraries from 'firebase/auth' and "firebase/firestore"
'import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth"; '
'import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; '

// 7- press 'continue to the console'
// 8- we can use this new instance of 'GoogleAuthProvider' anywhere we want to integrate a google sign-in
  const googleprovider = new GoogleAuthProvider(); // we can use 'googleprovider' as the provider for google sign in anywhere we want
  googleprovider.setCustomParameters({
  prompt: "select_account",
});
// 9- getAuth() gives us access to authorization by google 
  export const auth = getAuth();

// 10- next, we use 'signInWithPopup' and 'signInWithRedirect' methods to use popup-sign-in
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleprovider); // 'auth' and 'googleProvider' are entered as parameters

// 11- after the google login, we want to add the logged in user to the firebase database 'firestore'
export const db = getFirestore();

export const createUserDataFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef); //if the logged in user's data already exists in the DB, we are getting it

  //if user data does not exist
  if (!userSnapshot.exists()) { 
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("Error creating the document", error.message);
    }
  }

  //if user data exists
  return userDocRef;
};

// 12- then in the sign-in component, 
const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDataFromAuth(user);
  };

 <button onClick={logGoogleUser}>Sign in with Google Popup</button>

// Sign In With Redirect
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleprovider);
}

// then, inside of sign-in component
'import {signInWithGoogleRedirect} from "./../../utils/Firebase/firebase.utils";'
'import { getRedirectResult } from "firebase/auth";'
'import { useEffect } from "react";'

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(); // as after a redirect, the page reloads and response from the redirect login is lost. so we are using a 'useEffect' to make sure that it happens only once and we get the redirect response

    if(response) {
      const userDocRef = await createUserDataFromAuth(response.user);
    }
  }, [])

  return (
     <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
  )
}

// ------------------------------ Sign Up With Firebase with Email/Password -------------------------------- //

// default values for the form fields
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => { 
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword}  = formFields;

  const handleChange = (e) => {
    const {name} = e.target
  }

  return (
    <div>
      <h1>Create an Account and Sign up Now</h1>
      <form action="" onSubmit={() => { handleSubmit }} >
        <label>Name</label>
        <input type="text" required name="displayName" value={displayName} onChange={handleChange} />

        <label>Email</label>
        <input type="email" required name="email" value={email} />

        <label>Password</label>
        <input type="password" required name="password" value={password} />

        <label>Confirm Password</label>
        <input type="password" required name="confirmPassword" value={confirmPassword} />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

// 1- input values of the sign up form have their 'name' and 'value' set to matching with the form fields, so that we can exactly tell our browser which form field we are targetting
 'name="displayName" value={displayName}'
 'name="email" value={email}'

// 2-  then inside of the SignUp component, we are using the 'useState' to define and set the form field values. by default, it is set to 'defaultFormFields' which sets all form inputs to empty string
let [formFields, setFormFields] = useState(defaultFormFields)

// 3- then again inside SignUp, we are destructuing 'formFields' object so that we can have individual access to all its properties and we can use them inside our html form. this would help us to update our state according to changes in the html inputs
    const {displayName, email, password, confirmPassword}  = formFields;

// 4- then we use 'e.target' to access 'name' and 'value' attribute to tell our state which form property to update. note that 'name' and 'value' attribute has been set to matching with the form fields eg displayName, email. so input with name="displayName" and value={displayName} will update the 'displayName' property of the state
// Note: the visual aspect of what the user sees in an input is determined with the 'value' attribute
<input type="text" name="displayName" value={displayName} />
// the text entered by the user in the input is the 'value' of that input. that value has been set to 'displayName' value in the formField object. so that 'displayName' gets updated whenever text inside the input is changed.
// when the page loads, the value inside the html input is determined by the displayName's value in the formField

let handleChange = (e) => {
    const {name, value} = e.target
}

// 5- then we set the formField's values according to the input values which we access with 'name' and 'value' attributes
// 6- As at a time, we are updating only one property of the state, so all the other properties are spread on with '...' as we do not need to touch them and only the targeted property is updated
handleChange = (e) => {
    const {name, value} = e.target

    setFormFields({...formFields, [name]:value})
}
// 'name' attribute (eg. name="displayName") accesses the key 'displayName' of the 'formFields' object and sets its value equal to the 'value' of the input which has been entered by the user
'<input type="text" name="displayName" value={displayName} />';

// 7- now we import the 'createUserWithEmailAndPassword' in 'firebase.utils.js' from Firebase/app
"import { createUserWithEmailAndPassword } from 'firebase/app';"

// 8- we create a new function to authenticate email and password login
const createAuthUserWithEmailAndPassword = async (email,password) => {
if (!email || !password) return;
return await createUserWithEmailAndPassword(auth, email, password);
}

// in the 'createUserDataFromAuth' function declaration , we have passed another parameter which is a placeholder for additional information we want to store in the user's data in  the database
const createUserDataFromAuth = async (userAuth, additionalInfo = {}) => {
  // 'userAuth' is the details of the user authenticated by firebase
  // in email and password login method, firebase does not let us input 'displayName', so we are passing this 'additionalInfo' object so that we can pass 'displayName' in it and store it in our database

  //in the below setting the doc method, 'additionalInfo' will accept other additional info of the user
  setDoc(userDocRef, {displayName, email, createdAt, ...additionalInfo});
};

// then inside of our signup component, on submitting the form, we call 'handleSubmit' functn. 'email' and 'password' were already variables inside 'SignUpForm' which it takes as arguments. '{displayName}' is the argument for the parameter 'additionalInfo={}'
const SignUpFormm = () => {
  let [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword}  = formFields;

   const handleSubmit = async (e) => {
    e.preventDefault();

     if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

     try {
      const { user } = await createAuthUserWithEmailAndPassword(email,password);

      await createUserDataFromAuth(user, { displayName }); // 'displayName' is passed as a property for the 'additionalInfo' obj which was passed as a parameter in 'createUserDataFromAuth'. 'additionalInfo' parameter was passed there bcz we wanted to pass 'displayName' too inside 'createUserDataFromAuth' here
    } catch (err) {
      // if(err.code === )
      console.error(err);
    }
}
      return (
        <div>
          <form action="" onSubmit={handleSubmit}></form>
        </div>
      )
}

// ------------------- Fetching Firebase's Error Message --------------------- //
  {
        if (err.code === "auth/email-already-in-use") {
          setErrorMsgDiv({ msg: "Email Already In Use", displayProp: "block" });
        }
        console.error(err);
  }

// ------------------- passing an html element's attributes as they are -------------- //
// suppose we have an html element like 'input' with a lot of attributes
<div>
  <label>Email</label>
  <input type="email" required name="email" value={email} onChange={handleChange}/>  
</div>

// if we want to create a component for that input, we'll generally have to pass a lot of props inside of it
// but we can pass the attributes as they are as props inside of the component

// then while declaring the component, we can spread the props to pass the attributes in the component
const FormInput = ({label, ...otherProps}) => {
  return (
  <div>
     {label && ( //if label exists
    <label className={`${ otherProps.value.length ? "shrink" : ""} form-input-label`}> {label} </label>
     )}
    <input {...otherProps} />
  </div>
  )
}

// now as we use the component, we can just replace 'input' with 'FormInput'
<div>
  <FormInput label="DisplayName" type="email" required name="email" value={email} onChange={handleChange}/>
</div>

// ----------- Dynamically Add Classes or any attribute ------------------ //

// First we store all different class names inside an object
const BUTTON_CLASSS_NAMES = {
  google: 'google-sign-in',
  signIn: 'sign-in',
  signOut: 'sign-out',
  buyNow: 'buy-now'
}

// then we use props to trigger which property of the object we want to leverage
const button = (buttonType) => {
  return (
    <div>
      <button className={`button-container ${BUTTON_CLASSS_NAMES[buttonType]}`}></button>
    </div>
  )
}

// --------------------------- Conditional JSX Rendering -------------------------- //
// we can put javascript conditions inside JSX templates to apply conditions in JSX tags' rendering

const SignInForm = () => {
  const errorMessage = {
    msg: "Email already in Use"
  }

  return (
    <div>
      { errorMessage.msg.includes("Email") &&
          <span> Email is already Taken </span>
      }
    </div>
  )
}

// -------------------------------- React Context --------------------------------- //
// 1- The basic idea behind react context is to store all of the accessible data like data in 'states' inside an external storage so that all of the 'children components' have access to that data
// 2- Storing data in any child component becomes cumbersome as we have to export that data from that child all the way up to the 'main parent component' and then down to the target child component. this is rather hard to do

// 1- first we need to import the 'createContext' method from react
" import {createContext} from 'react'; "

// 2- then we declare the context that will store the data for us. components can later access this data using this context. here we setthe initial values of the context's properties
const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,

});

// 3- then we declare a component for this context that will actually wrap around the components that will need access to the data stored in this context. it acts as the 'provider' of the context's data to the components
// 4- a 'value' attribute is passed inside the 'UserContext.provider' which holds the context's value or data
let UserProvider = ({children}) => {
  return (
    <UserContext.Provider value>
      {children}
    </UserContext.Provider>
  )
}
// NOTE: usually the empty state of an object is null
// 5- then we provide a 'useState' inside the Provider and the provider allows the its 'children' to access the data inside its 'useState'
UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser} // in order to let the children inside the provider access the 'currentUser' and 'setCurrentUser', we are storing them inside this 'value' object and then passing this object in the Provider's jsx 

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

// 6- then go to 'index.js' and wrap the '<App />' component inside this '<UserProvider>' component, so that any component nested deeper inside '<App />' can access the context value which is inside 'UserProvider' component.
const App = () => {
  return (
    <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
    </BrowserRouter>
  )
}
// as all of our app's components are nested inside '<App />', so all of those components will have access to the context data of <UserProvider>

// 7- then we go to sign in component file import 'useContext' and 'UserContext'. 'UserContext' gives us access to 'currentUser' and 'setCurrentUser'. then we store the logged in user's data inside the 'UserContext'
const SignInFormm = () => {

  const {setCurrentUser} = useContext(UserContext) // accessing the 'setCurrentUser' method of 'UserContext'

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const {user} = await signInUserWithEmailAndPassword(email, password);

      setCurrentUser(user) // the current user has been set to the logged in user. so, now the 'currentUser' has been set to 'user'
      
      resetFormFields();

    } catch (err) {
      console.error(err)
    }
  }
}

// now we can go to 'navigation.component.jsx' and leverage our logged-in user's details
const Navigation = () => {
  const { currentUser } = useContext(UserContext); 
}
// 'Navigation' will re-render everytime 'currentUser' will update. Thats because we will be using 'currentUser' inside Navigation's jsx.


// ---------------------------------- Re-rendering From Context ------------------------------------- //
// even if we declare a variable inside a component which leverages the 'UserContext', but dont intergrate that variable in that component's jsx, that component will re-render everytime there is an update in 'UserContext'
const genericComponent = () => {
  const value = useContext(UserContext)

  return (
    <div></div>
  )
}
//in the above component 'genericComponent', we didnt actually integrate the 'value' variable in the jsx, 'genericComponent' will stil re-render everytime there is an update in the 'UserContext'

// NOTE - a component re-renders whenever its 'state' or 'props' update any component listening for a variable which can either be in its state, props or externally imported, will re-render anytime that variable is updated

// after we have signed in, we want to change the sign-in button in navigation to sign-out. we conditionalize it on whether there is a 'currentUser' in 'UserContext' or not
Navigation = () => {
  const { currentUser } = useContext(UserContext); 

  return (
    <div>
       {
       currentUser ? 
       (<span className="nav-link">SIGN OUT</span>) : 
       (<Link className="nav-link" to={"/auth"}>Sign In</Link>)
       }
    </div>
  )
} 


// ------------------- SIGNING OUT -------------------- //
// 1- inside firebase.utils.js, we import the 'singOut' library from 'firebase/auth'
" import {signOut} from 'firebase/auth' "

// 2- then we define a new method to initiate sign out in firebase
export const signOutUser = async () => signOut(auth)

// 3- now we'll go to our navigation component and  attach an 'onClick' method to Sign Out button to use this 'signOutUser' method
// 4- after using the 'signOutUser' method, we'll set the 'currentUser' to 'null' using 'setcurrentUser'
Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext); 

  const signOutHandler = async () => {
      await signOutUser()
      
      setCurrentUser(null)
  }

  return (
    <div>
       { currentUser ? 
       (<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>) : 
       (<Link className="nav-link" to={"/auth"}>Sign In</Link>)
       }
    </div>
  )
} 

// ------------------------------ Observer: onAuthStateChange -------------------------------------- //
// 1- 'onAuthStateChange' is a method provided by firebase
// 2- it tracks any authentication changes in our app
// 3- if we try to console log the user after we have signed in and before signing out, the 'user object' will be printed to the console
// 4- and if we try to console log the user after we have logged-out, 'null' will be printed

// 5- to instantiate, go to firebase.utils.js
' import {onAuthStateChanged} from "firebase/auth"; '

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

// 6- then in UserContext.context.jsx
" import {onAuthStateChangedListener} from '../src/utils/Firebase/firebase.utils' "

UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(()=>{
    onAuthStateChangedListener((user)=>{ 
      console.log(user) 
      setCurrentUser(user)
    })
  },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// the 'useEffect' function above just runs once when the component mounts. it listens to auth changes. if we had logged-in before and didnt log-out, user will be printed to the console.
// but if we logged-out before reloading the page, 'null' will be printed as there is no current user
// if we keep this console.log, user will be printed on every sign-in and null will bre printed on every sign-out. thats because the 'onAuthStateChangedListener' function is listening to every auth state change

// now first we'll go to 'navigation.component.jsx' and make the following changes
const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
// we were calling the above 'signOutHandler' function on the signOut button before. because we wanted to signout the user first and the set the Current User to null

// but now we are using the 'onAuthStateChanged' method of firebase , we dont need to set the current user to null manually anymore as 'onAuthStateChanged' is doing that for us now. it is telling us now if there is a user object or user is null. it sets the user object to an object on sign-in and to null on sign-out. so we just need to call the 'signOutUser' method on sign-out button now, we dont need the above 'signOutHandler' functn anymore

// now we just need to call the 'signOutUser' method on the signOut button
Navigation = () => {
  return (
    <div>
        {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
    </div>
  )
}
// but we still need the 'currentUser' variable to apply the conditions

// --- now in our sign-in and sign-up component, we can get rid of the 'setCurrentUser' calls which were done to set the user
// 1- first go to sign-in component and look for 'logGoogleUser' function

logGoogleUser = async (e) => {
  e.preventDefault();
  // const {user} = await signInWithGooglePopup();
  // setCurrentUser(user)
  createUserDataFromAuth(user)

  await signInWithGooglePopup()
};
    <Button
    type="button"
    onClick={logGoogleUser}
    buttonType="google"
    children="Login with Google"
    />
// 1.1- we dont need to call the 'setCurrentUser' anymore so we just call the 'signInWithGooglePopup' method.
// 1.2- then we need to call 'createUserDataFromAuth' method but it needs user object as argument
// 1.3- so go to UserContext file, and inside our 'useEffect', add that method
useEffect(() => {
  onAuthStateChangedListener((user) => {
    if (user) createUserDataFromAuth(user); // 1.4- Note that only when the 'user' object is not 'null', we call the 'createUserDataFromAuth' method. thats because we cant send a null object to firebase
  });
}, []);

// 2-   then, move on to 'handleSubmit' method which logs a user in with email and password
// 2.1- here too get rid of the 'setCurrentUser' method and just call the 'signInUserWithEmailAndPassword' method

handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // const { user } = await signInUserWithEmailAndPassword(email, password);
    // setCurrentUser(user); // here using the 'setCurrentUser' method of 'UserContext', we have set and stored the logged-in user into the 'currentUser' property of 'UseContext', so that it can be accessible to all the components

    await signInUserWithEmailAndPassword(email,password)

    resetFormFields();
  } catch (err) {
    console.error(err)
  }
}; 

// 2.2- now to set the current user to 'user', go to 'UserContext.context.js' file and call the 'setCurrentUser' method inside our 'useEffect'. we are doing this because our 'onAuthStateChangedListener' method detects the logged in 'user' and then we can set it to current user
useEffect(() => {
  onAuthStateChangedListener((user) => {
    if (user) createUserDataFromAuth(user);

    setCurrentUser(user)
  });
}, []);

// --- NOTE --- 
// Only 'objects' can be passed as 'props' inside a 'context provider'. 
// suppose we want to pass an 'array' inside a 'context provider' of a context. 
// we will first have to 'destructure' that 'array' to an 'object' and then pass it as a 'prop'

const SimpleContext = createContext({
  genericArray: []
})

const AnotherGenericComponent = ({children}) => {
  const [genericArray, setGenericArray ] = useState([]) // if we want to pass this array inside this 'context's provider' as a prop, we will first 'destructure' it to an object

  const value = { genericArray } // destrucuturing of array to an object

  return (
      <SimpleContext.Provider value={value} > 
      {children}
      </SimpleContext.Provider>
  )
}





























// ---------------------------------------- Old Notes ---------------------------------------------- //

// ----------------------------------- (OLD) React Router v5 notes --------------------------------------- //
// 5.1- first Route, when the exact '/' path is entered in the browser, only then the component 'Homepage' will render'
    // 5.2- second route, the path entered in the browser is not exactly '/' but '/mobiles', so the component 'Hatspage' will render'. this happens due to 'exact'

    //    a) exact - exact takes two values, 'true' or 'false'. just 'exact' signifies its true. exact means that when the exact 'path' defined in Route is entered in the browser, only then the entered 'component' in Route will render
    //    if there is no 'exact' or 'exact={false}' and we go to a path other than '/' like '/hats', then first 'Homepage' will be rendered because of '/' and then 'hatspage' will be rendered right below 'Homepage' in the same page because of '/hats' 
    //    b) path - the url path entered in the browser
    //    c) component - the component which will be rendered when the path is entered 

// ------- Switch --------- //
// 'Switch' encloses 'Route' tags
      class App extends React.Component {
        render() {
          return (
          <div className="App">
            <Switch>
              <Route path={"/"} component={Homepage} />
              <Route path={"/hats"} component={Hatspage} />
            </Switch>
        </div>
         );
        }
      }
// without exact, Switch sees the '/' path and renders the 'Homepage' component in that Route. 
// now, even If in the browser we go to the '/hats' path, Switch will only detect '/' from '/hats' and will render 'Homepage' only again 
// if we use exact, then 'Route' will work as expected

// ----------------------------------- React Router DOM -------------------------------------- //
const Home = () => {
  return (
    <div> Home </div>
  )
}    
    
const clothing = () => {
  return (
    <div> Clothing </div>
  )
}  

const footwear = () => {
  return (
    <div> Clothing </div>
  )
}  

const MyApp = () => {
    return (
      <div>
        <Route exact path={'/'} component={Home} />
        <Route path={'/clothing'} component={clothing} />
        <Route path={'/footwear'} component={footwear} />
      </div>
    )
}

// --------- without exact ------------- //
// we have 'console.log(props)' in each component
// if we navigate to '/', 'Homepage' will be rendered. 'isExact' property in 'props' of Homepage will be true and false for every else component because '/' matches its path
// if we navigate to '/clothing', 'homepage' and 'clothing' will be rendered. 'isExact' property in 'props' of "clothing" will be true and false for every else component because '/clothing' matches its path

props.match.isExact = true

// ---- url parameter ---- //
// 1- it is something added to the url of a 'Route'
const AmazeApp = () => {
    return (
       <div>
        <Route path={'/cloting/:clothID'} component={Home} /> 
      </div>
    )
  }
// 2- above code, 'clothID' is a url parameter
// 3- it can be accessed in 'props' using 'props.match.params.clothID'
'/cloting/:clothID'
'clothing/13' 
props.match.params.clothID = 13 // since clothID === 13

// -- using 'props.params.id'
const AmazeComponent = (props) => {
    return (
       <div>
         <h2> { props.params.clothID } </h2>
      </div>
    )
  }

 ' import { Link } from "react-router-dom"; '

// -------- Link Component ------ //
const Whatanapp = () => {
  return (
    <div>
      <Link to={'/footwear'}> Clothing </Link>
    </div>
  )
}

// React is a SPA. so using React-Router-DOM, we arent re-rendering the whole application when a url request is made. Insted, we are telling our DOM which component to render. we arent redirecting the browser, we are just rendering components

// ------- History Component ------ //
// 'History' component is like 'Link' but it helps us to access routing dynamically. we can program it to perform routing according to our needs
const Wowanapp = (props) => {
  return (
    <div>
      <button onClick={()=> props.history.push('/footwear') }>Footwear</button>
    </div>
  )
}

// ------- Location Component ------ //
// 1- location component tells us where exactly is our app url at right now
// 2- it tells the full url pathname 

const Hmmanapp = (props) => {
  return (
    <div>
      {props.location.pathname}
    </div>
  )
}

// ----- Match Component ----- //
// 1- match component has 'isExact', 'path' and 'url' properties
// 2- 'match.url' can help us get the url of the current page
// 3- IMPORTANT - it can help us to redirect to any 'url' path we want
 <button onClick={() => props.history.push(`${props.match.url}/14`)}>Go to button 14</button>

 const Specifichatpage = (props) => {
  console.log(props);
  return <h1> This is hat number {props.match.params.hatsID} </h1>;
};

// ------ Nested Routing ------- //
// 1- no matter what the url is, as long as our url path ends with the 'path' defined in a 'Route', React DOM will take us to the component defined in that route

<Route exact path={"/hats"} component={Hatspage} />
const urlPath = `/blog.hotspot/afjioan/hats`
// suppose url's path is the above defined url. as it ends with '/hats', our browser will go to 'Hatspage' because our url matched at '/hats'

// ------------------------------- Prop Tunnelling/Drilling --------------------------------- //
// 1- the Route is passed first in the 'homepage' component
// 2- so, only 'Homepage' has access to "props.history" because the route begins from there
// 3- one solution is to pass 'history' from 'Homepage' to 'Hats' and then from 'hats' to individual hat pages, as 'Hats' and individual hat pages are children to 'Homepage'
// 4- this is called 'prop Tunnelling/drilling' and its a bad practice

// the elegant solution to this is 'withRouter()' component

// ------------------------------- withRouter() --------------------------------- //
// 1- withRouter() is a higher order component which takes another component as an argument
// 2- it takes a component as argument, modifies it and returns the modified component 

const TheComponent = (history, match, linkUrl) => {
  return (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)}></div>
  )
}

// 3- when we export a component as
                        export default withRouter(TheComponent)
// it gets access to all the routing details that are in 'props' like 'location', 'history', 'match'
// so, in the 'TheComponent' declaration we can pass 'location', 'history', 'match' as arguments now
  const withRouter = ({location, history, match}) => {
    return (
      <div> {location} {history} {match} </div>
    )
  }

// whenever, a component gets re-rendered, all of the anonymous functions inside the returned jsx get called again. this poses a big performance concern

    // ----- Placing fixed components like 'Header' ----
// 1- we should place fixed components like header, footer outside of the all the 'Route' in 'App.js'. 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route path={"/shop"} component={ShopPage} />
        </Switch>
      </div>
    );
  }
}
// 2- by placing fixed components outside of switch, they are always going to be on our web page, no matter which route we are on

// ------ Importing SVG Files ------- //
// 1- in react, we import svg files (which generally are the logo at homepage) with a special syntax which is below
' import ShopPage from "./src/components/routes/shop/shop.component"; '
' import { useContext } from "react/cjs/react.production.min"; '
' import { signInUserWithEmailAndPassword } from "./src/utils/Firebase/firebase.utils"; '

// ------------------ States of Sign in and Sign up in React ---------------------- //
// 1- Both sign in and sign up page should have their own states.
// 2- thats because sign in and sign up pages dont need to communicate with each other, they have no link with each other. 
// 3- Also, if we make one common states for both, both of them would re-render everytime there is a change in the common state

// ----------------------- create a context and update it anywhere on your app ---------------------- // 

// 1- we define create a context using 'createContext' and declare its variable and its setter function.
const context = createContext({
  contextName: '',
  contextSetterFunction: () => {}
})

// 2- then we leverage them in our provider with 'useState'
const ProviderFunction = ({children}) => {
  const [contextName, contextSetterFunction] = useState('')
  const value = {contextName, contextSetterFunction}
  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  )
}

// 3- then we wrap our <app/> inside that 'Provider' function in 'index.js'
<ProviderFunction>
  <App/>
</ProviderFunction>

// 4- now we can import the context in any file in our app using 'useContext(context)'
const {contextName, setContextName} = useContext(context)

// 5- after importing we can use the value of the context using 'contextName' and update its value using 'setContextName' in any file of our app. all we need to do is import the context first

// 6- now suppose inside the below component, we base the rendering of "<AnotherComponent>" on whether contextName is true
export const generalComponent = () => {
  const {contextName, setContextName} = useContext(context)

  return (
    <div>
      {contextName && <AnotherComponent />}
    </div>
  )
}

// 6- now in below 'SomeOtherComponent', we set the 'contextName' to 'true' with the help of 'setContextName', which is inside a callback on a button. this will trigger the rendering of '<AnotherComponent />' because 'contextName' has been set to true 

const SomeOtherComponent = () => {  
    const triggerContextName = () => setContextName(true)

    return (
      <> <button onClick={triggerContextName} /> </>
    )
}

// how to place local images in react
// we need to 'require' local images to show them in react. thats because webpack requires us to do so
<img src={require("images/image.jpg")} />

// -------------------------- How to set big data types like arrays of a context ---------------------- //
// in a context, when using a 'setter function' for a big datta type like array, object, we do not want to use the setter function directly like we have been doing with numbers and boolean values
let [cartItems, setCartItems] = useState([])
//'cartItems' is an array, so we shouldnt set its value like below
setCartItems(cartItems.push(someProduct))

//instead we should define our own method is such situations
//and the method should be declared outside the 'provider function'

const addCartItem = (product, cartItemsArray) => {
  if (cartItemsArray.indexOf(product) !== -1)
    //if it exists already, then +1 to quantity
    
    //if doesnt exist, then add to cart
    if (cartItemsArray.indexOf(product) === -1)
    cartItemsArray.push(product);
};

const CartProvider = () => {
  let [cartItems, setCartItems] = useState([])


}

// ----------------------------- Custom Method in Context ------------------------------------ //

// 1- the 'setter function' of a context should never be called directly inside the provider function.
// 2- instead , define a 'method' in the context and then call the 'setter function' inside that 'method'

//method's declaration
const methodToBeCalledInsideProvider = (inputValue, theSetterFunction) => {
    if(inputValue) theSetterFunction(!inputValue)
}

//context declaration
export const aContext = createContext({
  avalue: '',
  valueSetterFunction: () => {},
  aMethod: () => {}
})

// using the method inside provider
export const aContextProvider = () => {
    const [aValue, valueSetterFunction] = useState('')

    const methodInsideThisProvider = (avalue) => {
        methodToBeCalledInsideProvider(avalue,valueSetterFunction)
    } 

    const value = {aValue, valueSetterFunction, methodInsideThisProvider}

    return <aContextProvider value={value}></aContextProvider>
}

// if we want to add an 'additional property' to an "object" and then add that 'object' to an array, we do the following
const addObjectToArray = (theObject, theArray) => {
  return [...theArray, {...theObject, additionalProperty: 'additionalProperty`s value'}] //here we are returning a new array which has the previous array plus the newly added object with additional property
}

//  IMPORTANT - functions should never be called inside 'context providers'. Instead, function declarations should be exported via provider and context declaration, and then called inside the concerned component





//  ------------------------------------------ CSS GRID ------------------------------------------ //

// ---- NOTE ---- 
// - 1fr = 25% of the available space
// - so, 4fr takes up the entire space
// - if we want all the elements to fit within the entire space, we have to divide their fractions so that their fractions' sum up to 4fr
// - suppose there are 4 columns, so we can divide their fractions as following : 
// 1fr 1fr 1fr 1fr (sum is 4fr)
// 0.8fr 1.2fr 1.8fr 0.2fr (sum is 4fr)


// look at the follwing grid example
<div class="container">
<div class="navbar"></div>
<div class="sidebar"></div>
<div class="main"></div>
<div class="content-1"></div>
<div class="content-2"></div>
<div class="content-3"></div>
<div class="footer"></div>
</div>

// ------------ css file template ------------
"              .container {"
"                display: grid;"
"                height: 100%;"
"                grid-template-columns: 1fr 1fr 1fr 1fr;"
"                grid-template-rows: 0.2fr 1.5fr 1.2fr 0.8fr;"
"               }"

// in above css, 'display' is set to 'grid' 
"grid-template-columns: 1fr 1fr 1fr 1fr" //here , it means that there will be 4 columns in each row and each column will have equal width '1fr'. so, in the entire width-span of the screen, there will be 4 columns, each of same width

"grid-template-rows: 0.2fr 1.5fr 1.2fr 0.8fr" // here it means that there will be 4 rows, the first row's height will be 0.2fr (0.2 fractions of the screen). so, all the elements in that row will have the height of '0.2fr' as well and equal widths (1fr)
// so the first row (left t right spans entire width) will have a height of '0.2fr' and will have 4 columns each of equal width (1fr). the height of each column will also be '0.2fr'
// the first row will be of height '0.2fr' and first 4 children of '.container' each of width '1fr' will be inside it. the height of each children will be '0.2fr'

//then the 2nd row has a height of '1.5fr'.so the next 4 children of '.container' each will have the height   '1.5fr' and equal width '1fr'

// ------ grid-template-areas ------- //
// we can give area-names to our elements and then tell css explicitly, where to place which element in our page

     ".container {"
       "display: grid;"
       "min-height: 100%;"
       'grid-template-columns: 1fr 1fr 1fr 1fr;'
       "grid-template-rows: 0.2fr 1.5fr 1.2fr 0.8fr;"
       "grid-template-areas: "
         "nav nav nav nav"  // first row will have all 4 columns of 'nav' which is the 'grid-area' name for 'navbar' we have set. mind that first row has height "0.2fr", so all the nav in this row will have same height 0.2fr same width "1fr"
         "sidebar main main main" // in the second row, elements with 'grid-area' name 'sidebar' will take up first column and elements with 'grid-area' name 'main' will take up the rest three columns. mind again that all columns have same width '1fr'
         "sidebar content-1 content-2 content-3" // first column is for grid-area 'sidebar' and rest 3 for 'content-1' 'content-2' and "content-3". they will take up the width according to the column-width described in "grid-template-columns"
         "sidebar footer footer footer" // first column for 'sidebar' and rest 3 for 'footer'
     "}"

          ".navbar {"
            "grid-area: nav;"
          "}"

          '.sidebar {'
            "grid-area: sidebar;"
          "}"

          ".main {"
            "grid-area: main"
          "}"

          ".content-1 {"
            "grid-area: content-1"
          "}"

          ".content-2 {"
            "grid-area: content-1"
          "}"

         ".content-3 {"
            "grid-area: content-1"
          "}"

          ".footer {"
            "grid-area: content-1"
          "}"

// ------ MINMAX ------ //
"grid-template-columns: 1fr minmax(50px, max-content) " // "minmax(50px, max-content)" implies that minimum width of the column will be 50px and maximum width will be according to the size of its contents

"grid-template-columns: 1fr minmax(50px, min-content) " // "minmax(50px, min-content)" implies that minimum width of the column will be 50px and maximum width will also be 50px. if the content stretches beyond 50px, the height of this column and all the rest columns of the row will increase accordingly 


// ----- REPEAT property ------- //
//repeat helps us define no. of columns in each row and the width of each column
"grid-template-columns: repeat(4, 25%)" // 4 columns in the row and each with width 25%

// if we dont know how many columns we are gonna have, we can use 'auto-fill'
"grid-template-columns: repeat(auto-fill, 25%)" // each colums's width is 25% of the device's width and they will keep filling up the space no matter how many they are

"grid-template-rows: repeat(auto-fill, 25%)" // each row's height is 25% of the container's height and they will keep filling up the space no matter how many they are

// using following code, we can set the number of columns automatically with 'repeat', 'auto-fit' and 'minmax'. columns will fit and resize automatically according to the width of the screen
"grid-template-columns: repeat(auto-fit, minmax(200px,1fr))"

// ------ GRID-COLUMN ---------- //
// if we want an element to always start in a new row (from the next line) and not continue in the last row as a continued column, we can use 'grid-column'.
// 'grid-column' helps us to define explicitly which column our element will start from
"grid-column: 1" // element is placed at column number 1

// ------ GRID-AUTO-ROWS ------- //
// 1- 'Grid-auto-rows' defines the height for all of the rows. we dont need to define row height for each row explicitly
"grid-auto-row: 50px" // height for all the rows will be 50px. rows with height 50px will keep forming as long as the elements keep adding up 
"grid-auto-row: 60px 80px" 
//height of 1st row - 60px
// height of 2nd row - 80px
// height of 3rd row - 60px
// height of 4th row - 80px and so on.. 
// each pair of row will have heights 60px and 80px respectively and the rows will keep forming as long as we want

// below two lines imply that height of first 2 rows will be 100px and 200px respectively and from the 3rd row onwards, row-height will be 40px
"grid-template-rows: 100px 200px"
"grid-auto-row: 40px"

// below 2 lines imply that first 2 rows will be 50px and 100px and from the 3rd row onwards, 'min-height' will be 80px and 'max-height' according to content
"grid-template-rows: 50px 100px"
"grid-auto-rows: minmax(80px, max-content)"

// ------- GRID-AUTO-FLOW -------- //
// 1- grid-auto-flow orders those elements which havent been covered in the column-template and row-template explicitly.
"grid-template-columns: 32px 60px"
"grid-template-rows: 100px 200px"
// in the above code, only 4 elements are covered. from the 5th element onwards, no specifiction for ordering and sizing has been done. in this case, we use 'grid-auto-flow'
"grid-auto-flow: row:" //from the 5th element onwards, ordering and sizing will be done as a row
"grid-auto-flow: column:" //from the 5th element onwards, ordering and sizing will be done as a column

// ----------------- Grid Column ----------------- //
// 'grid-column' defines for an element, which column it will start its span and which column it'll end

".products {"

"grid-column-start: 1"
"grid-column-end: 4" // starts at column 1, ends at 4

"grid-column: 1 / 4" // shorthand

"grid-column: 1 / -1" // spans the entire width of screen

"grid-row: 2 / 4" // spans row-2 to row-4

"grid-column: 2 / span 2" //starts at column-2 and spans 2 columns

"}"

// ---------------------- GRID-LINE NAMES ------------------------- //
// we can name the columns and rows and then use these names to place and size elements
"grid-template-columns { "
"grid-template-columns: "
      "[grid-start] 1fr" 
      "[column-start] 1fr"
      "[column-end] 1fr"
      "[grid-end] 1fr"
"}"

"grid-template-row: "
      "[sidebar-start] 1fr" 
      "[row-start] 1fr"
      "[row-end] 1fr"
      "[sidebar-end] 1fr"
"}"

".info-div {"
    "grid-column: column-start / column-end" //starts at 'column-start' and ends at 'column-end'
"}"

// grid-area is shorthand for 'grid-column' and 'grid-row' combined
"grid-area: grid-start / content-start / content-end / grid-end "

// IMPORTANT - If you are not gonna use 'grid-template-areas', then dont use 'grid-area' on child elements, as that will cause our grid area to behavee abnormally

// --------------------------- Add Collection and Data to Firestore Database -------------------------- //

// 1- import 'collection' and 'writeBatch' from 'firebase/firestore'
' import {collection, writeBatch } from "firebase/firestore"; '

// 2- declare new method 'addCollectionandDocuments'
export const addCollectionandDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object)=> {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)

    await batch.commit()
  })
} 

// then go to 'products.context.jsx' and define the following useEffect() in 'PorductsProvider'
' import { useEffect } from "react"; '

export const ProductsProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA);

  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA); // firestore functn which we have defined in 'firebase.utils.js' which adds the SHOP_DATA to firestore database to 'categories' collection
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

// then go and refresh your app and 'categories' database collection will be added to firestore database. now delete the useEffect as we only wanted it to run once

// now import 'query' and 'getdocs' from 'firestore'
// then declare the following function

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

// next, go to 'products.context.jsx' and declare this 'useEffect()'
useEffect(()=>{
  const getCategoryMap = async () => {
    const categoryMap = await getCategoriesAndDocuments()
  }

},[])

// ------------- async function inside useEffect ----------------- //
// to run an async funtion inside 'useEffect', declare a new async function inside 'useEffect' and then 'await call' the async function inside this async function
useEffect(()=>{
  const asyncFunction = async () => {
    const result = await getCategoriesAndDocuments()
  }

  asyncFunction()
},[])

// URL Parameter Set
` <Route path="/shop/*" element={<ShopPage />} /> `
// shop/*  means that after 'shop/' is entered in browser, we know that there will be subsequent parameters set after 'shop/'. whatever that set is, we dont care. thats what the '*' represents. we want to forward all those paths in that url set to <ShopPage /> component, as '/shop' has its own routes now
// as there are going to be more paths after 'shop/', we are gonna declare more paths separately in the <ShopPage /> component using 'Routes' and 'Route' 

// declaring shop/* in App.js
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

// now we can define more paths after '/shop' in ShopPage
' import { Routes, Route } from "react-router-dom"; '
' import CategoriesPreview from "./src/routes/categories-preview-page/categories-preview-page.component"; '
const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} >
      <Route path=":category" />  
      </Route>
    </Routes>
  )
}

<Route path=":category" element={<Category />} /> // path=":category" means that 'category' is a 'parameter' after 'shop/' and according to this 'parameter', specific category of products will be rendered inside 'Category' component

// then in 'Category' component, we can access the specific parameter in the url path using 'useParams()'
' import { useParams } from "react-router-dom" '
' import { useContext } from "react" '
' import { CategoriesContext } from "../../contexts/categories.context" '
' import ProductCard from "./src/components/product-card/product-card.component"; '

export const CategoryProducts = () => {
  const { category } = useParams()
  const {categoriesMap} = useContext(CategoriesContext)

  // const products = categoriesMap[category] // we shouldnt set 'products' like this because this will run everytime our component re-renders, while we want to run this only when 'categoriesMap' or 'category' changes

  // so, we'll use 'useState' and 'useEffect' instead
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  // now we can access 'products' array to render it in our DOM
return ( <div> 
  { products.map(product => {
    return <ProductCard key={product.id} product={product} />
  }) }
</div> )
}

// -------------------------------------- STYLED COMPONENTS --------------------------------------------- //

// 1- Install 'styled components' with 
                    'npm i styled-components'

// 2- then inside your components folder, create a new styles file with extension '.jsx' / '.js' or rename the sass/css file to '.jsx' / '.js' because 'styled components' are javascript files
              'navigation-bar.styles.jsx'
                          // or
              'navigation-bar.styles.js'

// 3- then inside 'styles.jsx' file, import 'styled'
         " import styled from 'styled-components' "

// 4- then declare styling for a native or custom html element
export const NavigationContainer = styled.div`
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
`
// now we can use this 'styled component' in our component's jsx

// 5- we can also import react elements and custom style them
' import { Link } from "react-router-dom"; '

export const CustomLink = styled(Link)`
text-decoration: none;
`

// 6- we can also declare an element that takes an already styled element and append to the styling of it and create altogether a new styled component 
export const DropdownLink = styled(CustomLink)`
  color: lightcyan;
  margin-top: auto;
`
// ------------- Nested Styled Component ---------- //
// if a styled component is a child inside another styled component, we can include the nested component's styling inside the parent component's styling
// it signifies what styling will be applied to the nested component when it will be nested inside the parent component
const ParentComponent = styled.div`
  background-color: aliceblue;
  border-radius: 10px;

  ${NestedComponent} {

  }
`
// -------- Props in Styled Components --------- //
// we can also pass props onto styled components
// first, when using the styled component in the html jsx, we can pass an attribute

"<div>" 
  "<BackgroundImage imageUrl={imageUrl} />"
"</div>"

// now in the styling jsx file, inside the 'BackgroundImage' declaration, we can use the 'imageUrl' prop
export const BackgroundImage = styled.div`
background-image: ${({imageUrl}) => `url(${imageUrl})`}; 
`

// regarding scss variables, declare them as js variables instead
'$main-color : gray;'
const mainColor = 'grey';

// for variables named as '@', use css property of styled-components
" import {css} from 'styled-components' "

'@mixin shrinkedLabel {'
  'top: -14px;'
  'font-size: 12px;'
  'color: ${mainColor};'
'}'

//declare above variable as below
const shrinkLabelStyling = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`

// if there is a class as a child inside a styled comp and it imports another styled component
'&.shrink {'
  '@include shrinkLabelStyling();'
'}'

// instead of above, we can import shrink as a prop and if shrink exists, 'shrinkLabelStyling' is included
const FormInputLabel = styled.label`
${({shrink})=> shrink && shrinkLabelStyling}
`
// now inside our component's jsx file, where we are using 'FormInputLabel', we can pass a 'shrink' prop
const ComponentJustAnother = () => {
return( 
  <div>
  <FormInputLabel shrink={props.value.length} />
  </div>
)
}

// wherever we have used '@include' in scss, we can include that included variable directly in our styled-component, only this time its included as a component as we turned it into a component

'&:focus ~ .form-input-label {'
    '@include shrinkLabel();'
'}'

//we already have a component for '.form-input-label' and 'shrinkLabel()'. so, instead of above, we can write
'&:focus ~ ${FormInputLabel} {'
    ' ${ShrinkLabelStyling} '
'}'

// for routing, we can use 'react-router-dom's predefined method 'useNavigate'
" import {useNavigate} from 'react-router-dom' "

const navigate = useNavigate();

const navigationHandler = () => navigate(`shop/${title}`)



# ----------------------------------------- Reducer --------------------------------------------------- # 
- Reducers are basically alternatives to 'state' in 'contexts'
- Reducers are very useful when trying to build complex contexts 
- Reducers are functions that return back an object
- A Reducer only stores readable values
- The readable values stored inside a reducer can be updated via 'useReducer' method 
- Action - Action is an argument passed inside reducers. reducers change the values of the object that they return based on 'action'
- Reducers reference the current value of the state and then return an object which is the new state object with new values

```js
const userReducer = (state, action) => {
  return  {
    currentUser: {}
  } 
}
```

// to start using reducers, we first import 'useReducer' hook
' import { useReducer } from "react" '

// instead of 'useState' , we will be using 'useReducer' now
// to achieve that, first we declare a reducer function which takes 'state' and 'action' as arguments
      // 'action' has 2 properties : 'type' & 'payload', which we destructure right at the top
          // 'type' - signifies the type of action 
          // 'payload' - contains the value that the reducer will update the state value to. state's value will be updated to whatever is inside 'payload'
const usersReducer = (state, action) => {
  const {type, payload} = action

  switch(type) {
    case 'SET_CURRENT_USER':
    return {
      currentUser: payload
    }
    default:
      throw new Error(`Unhandled Type ${type}`) //default case will be throwing a new error if a 'type' which isnt recognised in passed
  }
}

// we can also use the reducer function to change any of the state values
const sampleReducer = (state, action) => {
  const {type, payload} = action

  switch(type) {
    case 'increment':
      return {
        ...state,
        hitValue: state.hitValue + 1
      }
  }
}

// we can also define an object which has the 'action types' for the reducer
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER' 
}

// now we can leverage that action type in our reducer
const sampleReducertwo = (state, action) => {
  const {type, payload} = action

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
       currentUser: payload
      }
  }
}

// lets define initial value of state
const INITIAL_STATE_VALUE = {
  currentUser: null,
}

# ------------- useReducer Function #
// 'useReducer' function will be used inside the provider function

const [state, dispatch] = useReducer(userReducer, INITIAL_STATE_VALUE)
// 'useReducer' function when destructured, gives us two variables ie, 'state' and 'dispatch'
        // 'state' is the value 'useReducer' function sets the state value to
        // 'dispatch' is a function which when called takes an 'action' object. that 'action' object then runs through the switch statement in the 'reducer' function and updates the 'reducer' accordingly

# ------------ calling the dispatch function #

- 'dispatch' function is called inside a setter function in provider
const setcurrentUser = (user) => {
  dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload:user}) // the argument inside the dispatch function is an 'action' object which as we know, has 2 properties, 'type' and 'payload'. 
  // 'type' is set to 'USER_ACTION_TYPES.SET_CURRENT_USER' 
  // 'payload' is set to 'user'. so, 'user' is the value the 'reducer' function will update the 'state' with
}

// inside the provider functn, we use the reducer using 'useReducer' functn
const justAProvider = () => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE_VALUE)

    const {currentUser} = state

    const setCurrentUser = (user) => {
      dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload:user}) 
    }

    const value = {currentUser, setCurrentUser}
}

// ----------------- Building The Cart Reducer ----------------- //

// A reducer should not handle any business logic
// Reducer should only be doing the job of updating the state. all other functions inside the context shouldnt be performed inside the reducer as it makes our reducer harder to read and unnecessarily complex