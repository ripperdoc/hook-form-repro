# Reproduction of bug in React Hook Form

Our main app had many issues with warnings from React after introducing React Hook Form.

The warnings looks like this:
```
App.js:22 Warning: Cannot update a component (`CustomFormProvider`) while rendering a different component (`FormPage1`). To locate the bad setState() call inside `FormPage1`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render Error Component Stack
    at FormPage1 (App.js:18:1)
    at CustomFormProvider (App.js:7:1)
    at header (<anonymous>)
    at div (<anonymous>)
    at App (App.js:38:1)
```

To reproduce this error in this repo, do this:

```
npm install
npm run start
```

In the localhost browser, click Next a few times. It will swap between two variations of the form and this will cause the warning to appear in the console.

Note that if I comment out lines referring to disabled or dirtyFields in App.js (see inline comments), the warning goes away, and I can't see a clear reason why.