import { runAllTests } from "./test_utils.js";

let tests = {
  "sessionStorage": {
    write: (secret) => sessionStorage.setItem("secret", secret),
    read: () => sessionStorage.getItem("secret"),
  },
//  "window.name": {
//    write: (secret) => window.postMessage({"window.name": secret}),
//    read: () => 
//  },
};

runAllTests(tests);

console.log("hello from navigation_inner.js");