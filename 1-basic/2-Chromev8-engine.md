# JavaScript Engine

- JavaScript code we write cannot be understood by the computer
- A JavaScript engine is a program that converts javascript code that developers write into machine code that allows a computer to perform specific tasks
- JavaScript engines are typically developed by web browser vendors.

1. **V8** - Open-source JavaScript Engine developed by Google for Chrome and v8 implements ecmascript as specified in ecma 262

- v8 is written in C++ and is used in Google Chrome
- V8 can run stand alone or can be embedded into any c++

2. **SpiderMonkey** - The JavaScript Engine powering Mozilla Firefox
3. **JavaScriptCore** - Open-source JavaScript Engine developed by Apple for Safari
4. **Chakra**- A Javascript Engine for the original Microsoft Edge(The latest version of edge uses V8)

## Chrome's V8 Engine & Node.js

- Chrome's V8 engine by Google sits at the core of Node.js
- By embedding V8 into your own C++ application.you can writes JavaScript code
- You can add new features to JavaScript itself
- Since C++ is great for lower level operation like file handling, database connections and network operations, by embedding V8 into your own C++ program, you have the power to add all of that functionality in JavaScript
- The C++ program we're talking about is Node.js

- A Javascript engine is a program that executes JavaScript code
- in 2008, Google created its own JavaScript engine called V\*

# JavScript Runtime

JavaScript runtime is an environment which provides all the necessary components in order to use and run a JavaScript program

- Every browser has a JavaScript Engine
- A JavaScript Engine is one component in the JavaScript Runtime.

# Chrome Browser JavaScript Runtime Diagram
