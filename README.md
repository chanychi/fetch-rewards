
## Technologies
---
* React/ReactDom
* Axios
* Cypress.io
<br>

## Running the App
---
In the project directory, you can run:
* `npm install`
* `npm run start` 

Initiating Testing
* `npm run cypress:open` 
<br>

## Notable Files & Comments
---
* All of the frontend code is written exclusively in `src`
* The test is located in `src/Testing`
* React by default is XSS protected (sanitization)
* Require the user to fill every input field in order to submit
* Email input field require `@`, but lack certain checks
* Password has no security 
    * Would utilize `bcrypt` or another library to protect the password
    * Use regex to check for length, capitalization, numbers, symbols
* Accessibility for the visual impaired
    * Require aria attributes
<br>
## Preview
---
![](https://s3.gifyu.com/images/ezgif.com-gif-makerb24111fb7dc25466.gif)