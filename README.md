Sacred-Chicken Canadian Open Data Experience Entry

City Love: CODE
===============

City Love: CODE is a Canadian metro area compatibilty program designed to match the user with the most compatible Canadian city. By mixing up a bit of statistical analysis, and a bunch of javascript coding City Love: CODE is like online dating, if your into dating large metropolitan areas. We're redefining metro-sexual (like what I did there).
k

The code as it were exists in two parts.

Part 1 - Server
---------------
There is a server application, written in nodejs, and using npm for dependency management. All information is extracted from the dataset and processed here before being passed on to the browserside application.

Part 2 - Browser
----------------
The browserside application is written in html5 and javascript, and usesed the AngularJS library. This application is responsible for all user interaction, and communicates directly with the back end server using JSON to recieve questions, and process answers.

When the two parts work together you have metro-relational magic.

To fire up this user experince, install [npm](http://npmjs.org), navigate to the src/server/src directory, install the dependancies - "npm install", and start the server with "node server.js".

If the directory structure is the same then the backend server will start, and will host the both the backend code, and server the front end code on localhost:9000.

To see the application running on an external server, you can check [City Love Code](http://cityloveCODE.ca) to see if my server is still up. I'll try to keep it up for a while.

Thanks!
