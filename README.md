# FriendFinder

FriendFinder is a full-stack application that matches you with a potential friend based on a 10-question survey on personality traits. Based on how you agree (or disagree) with the prompts, FriendFinder finds another user (in the database who has also taken the quiz) answered these same qustions most simlarly to you.

To handle routing to the API/database, Express was used, along with other technologies.

# Deployed Site

https://secret-basin-59299.herokuapp.com/

# Application Organization

1. You first begin by going to the homepage, then clicking on 'Start' to begin the survey.

2. On the next page (the survey) you will be prompted to enter your name and a link to a picture of yourself. Both are required to submit the form.

3. You will also be shown ten statements. For each statement, click on how much you disagree or agree with the statement, on a scale of 1 (completely disagree) to 5 (completely agree).

4. FriendFinder will then use an algorithm to match you with somebody in the server's database who has also taken this quiz.

5. The match is determined by how closely the values you chose for each answer match other members' values. 


# Technologies Used

* JavaScript

* HTML5

* Node.js

* jQuery

* Express.js

* Bootstrap

## Architecture of Application

```
FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
```

* The `friends.js` is used to store all user data.

* Routing was handled in two serparate JavaScript files, one for the api (`apiRoutes.js`) and one for the html pages (`htmlRoutes.js`).

* `express`, `body-parser` and `path` were used in server.js

* `server.js` initializes the Express-based server and establishes the port used.



# Credits

* Patrick Urbankowski