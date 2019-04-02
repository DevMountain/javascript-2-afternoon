<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we'll provide practice JavaScript problems to help you better understand `Objects`.

## Setup

* `Fork` this repository.
* `Clone` your fork.
* Open `./practice.js` with your code editor.
* Open `./index.html` with your browser.

## Directions

Complete the first <b>4</b> activities inside of `./practice.js` to make the spec runner pass it's tests. In order to check the progress of the spec runner, open `./SpecRunner.html` with your browser. Remember to commit and push your code often. Good luck!

If you have extra time, try to complete the remaining activites.

## Tips and Tricks

One of the biggest tools at the developer's disposal is the browser's built-in debugger. To use it, open `./index.html` with your browser. Another great tool for small and isolated pieces of code is <a href="http://www.pythontutor.com/visualize.html#">Pyton Tutor</a>. Just make sure to change the code to `JavaScript ES6`.

## Resources

<details>

<summary> <code> Objects </code> </summary>

```js
// declare an object with properties
let car = {
  make: 'Ford',
  model: 'GT',
  year: 2019,
  // This is a method (function) on the object
  reverse() {
    return 'Backing Up! Beep! Beep! Beep!'
  }
}

// adding or updating properties with dot notation
car.miles = 100;

// adding or updating properties with bracket notation
// if miles already exists on the object, this would change it's value
// if it doesn't this will set it as a key with a value of 150
car['miles'] = 150

// if a property doesn't exist on an object, it's considered undefined

car.owner === undefined // true

// A function contained in an object is called a method
// You can add functions to an object just like any other property

car.drive = function() {}

// You can invoke the method by accessing the function (method) on the object

car.reverse(); // 'Backing Up! Beep! Beep! Beep!'
- or -
// Though the dot notation version above is more common
car['reverse'](); // 'Backing Up! Beep! Beep! Beep!'
```

</details>


<details>

<summary> <code> Object Factories </code> </summary>
 
 ```js
// Functions that return objects are called object factories
// They're a blueprint for creating a lot of objects of one type

function createCar(make, model, year) {
  // the returned object has a property called make whose value is the argument passed to the make parameter above
  // it's the same for model and year
  return {
    make: make,
    model: model,
    year: year
  }
}

createCar('Ford', 'GT', 2006); // { make: 'Ford', model: 'GT', year: 2006 }
createCar('Tesla', 'Model S', 2019); // { make: 'Tesla', model: 'Model S', year: 2019 }
```
 
</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
