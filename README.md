Form Validator Functions for all JavaScript Applications
========================================================

* Pass an object of input fields get validated result and an error object containing error messages for every field you passed.

* You call the validator as mention in usage in below, it does all the validation on values passed, saves your time to create custom validations on each and every filed. Just check for the field name passed to validator in `validateArray`, if it is there show error message wherever you want.



## Installation
    npm install --save html-form-validator
    yarn add html-form-validator

## Usage
```javascript
import { checkString, checkValidDate, checkIntNumber, checkNumber, checkEmail } from 'html-form-validator';
let validateArray = [];
validateArray.push(validateNewInput = {
        <filed-name>: checkString({value: <value>, required: true, minLength: '', maxLength: '', message: 'Error Message'}),
        <filed-name>: checkValidDate({value: <value>, required: true, minLength: '', maxLength: '', message: 'Error Message'}),
        <filed-name>: checkNumber({value: <value>, required: true, minLength: '', maxLength: '', message: 'Error Message'}),
        <field-name>: checkIntNumber({value: <value>, required: true, minLength: '', maxLength: '', message: 'Error Message' }),
        <filed-name>: checkEmail({value: <value>, required: true, minLength: '', maxLength: '', message: 'Error Message' })
      });
```
### validateArray Response
```javascript
{
  filed-name: 'error message',
  filed-name: 'error message',
  filed-name: 'error message',
  filed-name: 'error message',
  filed-name: 'error message',
  filed-name: 'error message',
}
```

## License MIT
* MIT License

Copyright (c) 2018 anubhav04

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
