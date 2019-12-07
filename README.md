<h1 align="center">
  <a href="https://mkuti.github.io/FlagGame_milestone_2/index.html" target="_blank"><img src="assets/images/logo.png" width=100 height=100 alt="logo"/></a>
</h1>

<div align="center">

# MATCH THE FLAG
</div>
<div align="center">
</div>

## Table of Contents

* [Why building a flag game?](#why-building-a-flag-game)
* [How the game work?](#how-the-game-work)
* [UX](#ux)
    * [Strategy: Why and what?](#why-and-what)
        * [1. Primary target audience](#1-primary-target-audience)
        * [2. Who is the project for?](#2-who-is-the-project-for)
        * [3. What is culturally appropriate?](#3-what-is-culturally-appropriate)
        * [4. What content would be relevant?](#4-what-content-is-relevant)
        * [5. Why is this so special?](#5-why-is-this-so-special)
    * [Scope: User Stories](#user-stories)
    * [Structure: Features](#features)
        * [1.Existing Features](#1-existing-features)
        * [2.Features Left to Implement](#2-features-left-to-implement)
    * [Skeleton: Wireframes](#wireframes)
    * [Surface: Design](#design)
        * [1. Color Scheme](#1-color-scheme)
        * [2. Font](#2-font)
        * [3. Logo](#3-logo)
* [Testing](#testing)
* [Technology Used](#technology-used)    
* [Deployment](#deployment)
* [Credits](#credits)
    * [Special Thanks & Acknowledgements](#special-thanks--acknowledgements)

# Why building a flag game?
For the second milestone project, I decided to make an interactive and educational game, so I could use Javascript functional programming which I have just learnt.

I like games as I believe anything can be learnt while having fun. Although I have not been playing a lot of online games or game apps myself, I am now a mum and often look for interesting, educative and well designed numeric games for my children.

My oldest son loves the planet, its continents, countries, and its flags, while he dreams of travelling when he stares at his globe.
I, myself, am passionate about discovering other cultures, learning and understanding languages and travelling generally in various countries while getting to know its people.
I remember as a child, one of the online game I played over and over again was a plane flying over the world map. The plane had a label behind with a country name written. The game was to click on the country on the map shown by the plane.

# How the game work?
So I decided on making a game where the player would have to recognise a flag and match it to a country while random information would be showing about the country as a learning gift to the user.
For this, I would need to use two main APIs, one to display the flag and one to display random facts about the country once the match is successful.

The design of the game should be simple enough for a child to use it and attractive for an adult to play without much distractions and making them want to play more, to learn more...

More details about the design and structure of the game:
1. common mode, by flag (easy level): display a flag and match it to a country among 4 options
2. reversed mode, by country (easy level): display a country and match it to a flag among 4 options

[Back to Top](#table-of-contents) 

# UX
## Why and what?
### 1. Primary target audience
For anyone from 6years old interested by geography or want to learn for specific purpose
- *Strategy*
    - Make the game interactive, fun and educative with a very simple design --- catchy and compelling
    - Minimal content and large images with minimal number of steps to start playing, match the flag, get results and continue or stop

### 2. Who is the project for?
As shown in my intro, game is for anyone looking to test their knowledge of geography and flags.
The objective is also to trigger anyone else to learn more about other countries and cultures via an unknown flag
1.
- *strategy* 
    - To make the game easy enough for anyone to build their knowledge of flags and countries while playing. 
    - Dont want to make anyone give up after one trial and dont want knowledgeables players to get bored
    - Have an easy mode with 2 attempts for each flag where player is allowed to fail before trying another flag.
    - 20 random flags in one game
    - Player build points and at the end of the game, get a result which can be improved > motivation to try again to get a better score

In the future, to build difficult mode/level, also called "map mode" or "extreme (so good players are not bored): display Google Map in background, flag displayed, player has to click on map to show correct matching country

### 3. What is culturally appropriate?
Appropriate for 6years old minimum and user-friendly for their age and dextirity
- *strategy* 
    - Make sure random fact are relevant for kids and do not contain inappropriate content
    - Each button is not too small
    - Font size big enough for a child of 6years old who is learning to read

### 4. What content would be relevant?
Flags and countries of the world (not fake, not regions or small ethnies) - appropriate random fact for kids
- *strategy* 
    - Study the flag API and see if only real countries flag are in there, also maybe see if possible to remove the most known flags to make the game already up from basic level (ex: US, UK, France...)
    - Study random fact API and see if all content is appropriate - if needed I will make up one API myself with random fact more relevant to kids

### 5. Why is this so special?
Hard to find simple games which are also educational for kids and adults on desktop or browser (not app). Most online games have poor or too complex design with a lot of content
- *strategy* 
    - Catchy and compelling website, with brief but effective content.

During my research in planning and designing the website, I asked a few questions to some friends who could be potential clients and also the practitioner himself. From those questions and my own research of other websites and practice, came the user stories below.
Before the user stories, I wanted to add here a few questions asked and their answers.

1. What does the User expect?
	* I expect a simple game which is easy enough to get into it, with pastel colors and very minimal content. After a few games, I want to find a difficult level where I can continue to be challenged
2. How can a game be interesting enough so I want to keep playing?
	* With different modes and levels, where I can see my score so I am motivated to improve it. A game where I dont get bored and I can learn from it.

[Back to Top](#table-of-contents) 

## User Stories

During the scope plane and while establishing the user stories for each page and making wireframes, the following features were decided.
This helped me to plan ahead and also to work through specific sprints to implement one feature at a time, answering one user story at a time...
### As a general user, I am expecting:
* A game to learn about world flags and countries
* Something fun to challenge my geography knowledge
* A game where I can also learn extra information about places and cultures
* A quick and mobile friendly game to play anywhere from a phone
* A game with a clear structure where I dont need to think to find how to play
* A game where the instructions and questions are easy to understand
* A game with a simple design so I can focus on the game itself and easily see the colors of the flags
* A game with no bright colors so my eyes are rested
* To see what is supposed to be the match if I fail
* To see my scores at the end of each game so I can try to improve
* To continue being challenged by more than one mode

### As a user aged between 6 and 10 years old, I am expecting:
* Have fun while learning
* Not too much reading so it is more fun than educative
* When I have to read, big enough text so reading is part of the fun
* Buttons big enough to click easily
* A game where I can learn and get better at it

### As a parent of child user, I am expecting:
* Content of the game to be appropriate to my child
* Game to be easy enough so my child continues to play and learn
* Score shown with a short of encouragement
* Gift of learning about other cultures so my child grows aware of the world

### As a developer, I want:
* To build a game fun and interesting enough for lots of users
* To display my acquired knowledge of Javascript in my portfolio
* To have fun coding Javascript while building a fun game

[Back to Top](#table-of-contents) 

## Features
### 1. Existing Features:
* Feature 1 - Logo on the top left linking to home container at any moment which would reload the whole page and act also as quitting any ongoing game
* Feature 2 - Catching phrase for the user displayed on the home container in the top fixed banner
* Feature 3 - Home container displaying the instructions where user can click the mode they want to play. Loading or reloading the page would always display this container first.
* Feature 4 - Two buttons displayed below the instructions on the home container used to choose mode to play. Game wont start until a mode is chosen
* Feature 5 - Each above button triggers a separate hidden container to show while the home container becomes hidden
* Feature 6 - A flag container to play the mode where a flag is displayed and the user needs to choose between 4 country names
* Feature 7 - A country container to play the mode where a country name is displayed and the user needs to choose between 4 flags
* Feature 8 - Once one of the above container is displayed, 2 buttons appears in the nav banner replacing catching phrase
* Feature 9 - Restart button to restart a game in the current mode chosen
* Feature 10 - Modes button to take user back to home container to choose another mode
* Feature 11 - on each game container, 4 clickable answers to choose from. One display the country names, the other display the flags
* Feature 12 - Question count displayed on top of the game container throughout any game played and showing which question is displayed out of the maximum 20
* Feature 13 - Score count displayed on top of the game container and incremented throughout any game played. Score increments depending of the verified match javascript functional
* Feature 14 - Sweet Alert fires after a match is verified. Alert disappear after a timer of 2sec, set alert so user cannot click outside, escape the pop up or click ok.
* Feature 15 - An encouraging message with a success icon is displayed if match is correct. 
* Feature 16 - A failed message with a cross as icon is displayed if match is incorrect. 
    - On the flag game, the name of the country associated with flag is displayed on the alert to help user to improve for a future game
    - On the country game, the name of the country associated with each answer item, is displayed on the alert when clicked and match incorrect
* Feature 17 - A game over container will be shown after the maximum questions have been played
* Feature 18 - A different message will appear depending of the score:
    - Up to and including 10: "Got there!...definitely can do better! Dare to try again and improve this score?"
    - Between 11 and 14: "WOW very impressive! With more practice, you can beat this great score!"
    - Between 15 and 19: "Bravooooo you are super smart! Reach the 20/20 or wait for the extreme mode to be built...?"
    - 20: "Amazing you beat the game! Now I really have to build the extreme mode asap..."
* Feature 20 - Buttons to restart a game in same mode or choose a different mode displayed below the message of game over container

### 2. Features Left to Implement:
* Original idea was to show a unique fact of each country once matched but realised that no api existed already which means I would need to build a local json file with a unique fact for 250 countries -- Unfortunately, did not have time to do this but will in the future
* Matching mode (medium level): display 3 very similar flags and 3 countries and ask player to match flag with correct country (ex: Ireland, India, Ivory Coast flags or Indonesia and Poland)
* Map mode (difficult level): display Google Map in background, flag displayed, player has to click on map to show correct matching country

[Back to Top](#table-of-contents) 

## Wireframes

I used Balsamiq tool for the wireframes and attached them to the directory in assets. 
I spent a considerable amount of time doing wireframes in details as I had no clue of design before and wanted to have a clear idea of how the website looked like.

- [Welcome page on desktop](https://raw.githubusercontent.com/mkuti/FlagGame_milestone_2/master/wireframes/Desktop-welcome-page.png)
- [Desktop game page](https://raw.githubusercontent.com/mkuti/FlagGame_milestone_2/master/wireframes/Desktop-choose-country.png)
- [Mobile Home page](https://raw.githubusercontent.com/mkuti/FlagGame_milestone_2/master/wireframes/Mobile-welcome-page.png)
- [Mobile game page](https://raw.githubusercontent.com/mkuti/FlagGame_milestone_2/master/wireframes/Mobile-choose-country.png)

As always when implementing coding, these wireframes templates do not exactly reflect the final version of the website itself but they were very useful for me to have an approximate design in my head.
The color theme changed completely after implementing design in the code. I removed lots of features due to lack of time and expertise, such as the map in the background which was supposed to be for one extreme game mode.

[Back to Top](#table-of-contents) 

## Design
### 1. Color scheme
As I am not good at putting colors together and with design generally, I always try to create wireframes that include colors. It helps me to imagine the design before I start coding. 
When coding, I am focused on writing the code without getting too distracted by the design.
The game had a dark red and blue thematic when I designed it on the wireframes to avoid too much brightness on the screen while playing. I did not have any explanation about the color red itself.
During a meeting with my mentor, he advised that the color theme was maybe too dark which did not go too well with the colorful flags. (commit e04e2a6).
I then tried to make it a little brighter color, replaced red by a green as I find it easier on the eyes, and is my favourite color as representing the nature, so can be a very blending background to colorful flags. (commit d112cad)
I then showed the game to a friend as like me, she did not like the white background as too bright and not eyes friendly. 
I then changed the body background-colour to match the light-green which then removed the center box and I ended up setting the border to none.
The color is not too bright for the eyes, does not disturb the colors of any flags displayed, giving a sense of warm and calming atmosphere to the game.

### 2. Font
I chose the font [Kalam](https://fonts.googleapis.com/css?family=Kalam:300,400,700'), with the idea of finding a font that is catchy enough without again disturbing the user while he plays. 
As the game was built also for kids learning to read, the font should be pretty standard without any different twists. Kalam has this interesting way of being young and modern while also having the standard curves of letters.
Chose to have most button and words written in uppercase so again kids could read them faster and dont get bothered by the element of reading.

### 3. Logo
I wanted to have a logo containing flags, showing their colors, their uniqueness. Because the original idea was to incorporate a map in the game, I originally found an image of a map of the world with a flag on each country.
But because the background of that image was white, it did not fit with the rest of the color scheme and I chose another image.
I found the other image on Pinterest and downloaded as well as took a screenshot. (https://www.pinterest.com/pin/271060471299685564/). I then used [TinyJPG](https://tinyjpg.com/) to compress and reduce the size of the image before uploading it to GitPod for the game.
The final logo is an image of hands intermixed with some flags displayed on their palms and with the planet Earth displayed as background in a dark mode. 
It represents exactly the idea of the game, that playing to match a flag is discovering the world, understanding better other cultures and be Earth citizens all the same time.

[Back to Top](#table-of-contents) 

# Testing

## Final and official testing:
  * [W3 MarkUp validation](https://validator.w3.org)
  * [W3 CSS validation](https://jigsaw.w3.org/css-validator/)

I checked the validity of my code at different times and received few errors on HTML markup which I worked on correcting. I did not get any errors with my CSS.
Example of an error in the MarkUp corrected:
- *The frameborder attribute on the iframe element is obsolete. Use CSS instead.* I then removed frameborder from HTML and added border: none in CSS

## General testing:
As I did not have a lot of time and I was not really expert in Jasmine or any automating testing, I decided to do all the testing manually via the browser and Chrome Developer tools.
My strategy is very simple: as soon as I write a line of code, I open the page in my browser to test it, make sure it works until I am fully happy with what I see and how it functions. 

For each feature I was working on, I tried to preview it in Chrome Dev tools to understand quickly which HTML element, CSS styling or Bootstrap class would cause a certain effect and correct it as soon as possible. 
This also allowed me to fully comprehend the languages, to work by small tasks and push to GitHub only after I made the whole feature was working well.

Once I was quite happy with the design and the site responsiveness, I moved to Javascript and performed the same manual tests as above. 

After the main functionality of the game was in place, I started to share the url with friends and family to get their first views and reactions on the design and the functionality of the game.

Through my own testing and with views of others, I have fixed a lot of design flaws and numerous bugs in my Javascript code. Thanks to that, I can present a website which is almost perfect :)


## Testing in different browsers:
I used Google Chrome as my primary browser and constantly tested it on my mobile phone also using the same browser. 
I also tested the game on Safari via an iMac with a very big screen and an iPod touch with probably the smallest screen regularly and never found any specific issue. 

## General testing and learning experiences for the code itself:

### 1. 
* __Goal__: Before I went to Javascript, to make sure all the elements were already properly responsive, without any extra margins anywhere and no flaws in the styling.
* __Implementation__: Each element was tested to ensure its features worked as expected and was specifically responsive on mobile and small devices. 
For this, I used the device selector through the dev tools and selected each device to test each element. 

I also made sure to increase and decrease screen size of the browser directly to see the breakpoints and correct if needed. 
Whenever an error was noticed, I used the dev tools to apply or change certain styles and if successful, copied it to my IDE.

I tried to use my own customised html and css at the beginning to get the grips of it, before applying the Bootstrap framework.

Whenever an element was added via Javascript, tested the element’s responsiveness on all screen sizes before moving to the next task.
For each task and when I was completely happy with it, I committed and pushed to GitHub

* __Result__: The navbar is fully responsive and was made without any bootstrap classes.

### 2. :
* __Goal__: Displaying the flag and country name randomly in the DOM for each question.
* __Implementation__: 
    - Fetching an api providing datas about 250 countries

    - Selecting a random country and displaying its flag on the DOM which I was happy about.

* __Issue and new implementation__: I could not display randomly 4 country names and I felt very stuck
    - After discussing this with my mentor, he advised me to shuffle the original array, push 4 countries into an empty array for each displayed question and from the array, to assign 1 country flag and the names to answer.

    - After understanding the principle and multiple struggles with my messy code, I managed to display the flag and the names of the 4 countries randomly.  
* __Issue and new implementation__:
    - Could not verify the match as the data was now separated into two different arrays and it was impossible to click on the correct country.
    - Asked feedback on Slack to know how could I randomise the way the country names are displayed on the buttons and at the same time, keep same array once they are pushed to the DOM. 
    - Someone suggested to just push manually each country with a chosen index (commit 4b93ed1) which I did and it was then successful
* __Result__:
    - Game was functioning which means I could then build more functionality to it from there
    - I realised through all this and as advised by my mentor and other alumni on Slack that I was over complicating the functions and each task to achieve which made the code complex and did not help me to understand.

### 3. :
* __Goal__: Create unique responsibility functions to make the code more readable
* __Issue__: Building a task on top of another within the same function until I reach a point of not being able to read my code, not knowing what to do next and how to ask questions from others.
* __Implementation__: 
    - As advised by mentor and other alumni student, I separated each task, even the smallest, in a unique function with a very clear name. 
    - The name should also tells the task of the function without even reading the comments.
* __Result__: Very clear code self-explaining its actions

### 4. 
* __Goal__: Make the code DRY
* __Issue__: Re-writing same methods and functions to create interactivity and manipulate the DOM. 
    - `Math.Floor` method was written twice for mixing the answer items on the DOM before displaying the country names and for mixing the country array before selecting the country to match. (commit 4932f4f)
* __Implementation__: Create one unique function with a single responsability to call back for different data instead of re-writing the same code. 

`function mixItems (arrayItems) {return Math.floor(Math.random() * arrayItems.length);}`

* __Result__: Code shortened and faster to read and understand

### 5. 
* __Goal__: Remove global variables when possible and pass in arguments in each function instead
* __Issue__: Once I finish making a separate function for each task to perform, I had numerous global variables as I was not sure of how to bring data from one function to another.
* __Implementation__: My mentor explained very well the concept of passing arguments into a function and I was able to change certain functions, include parameters and pass arguments.
    - The best example was to call the `shuffleData function` inside the fetchData function using the data just fetched as the following:

`function fetchApi() {return fetch(url).then(response => response.json()).then(data => {countryData = shuffleData(data);pushCurrentQuestion();}).catch(err => console.log(err))}`
* __Result__: Less variables and cleaner javascript code

## Issues found and solved

### 1. Empty current question array before pulling next question
* __Issue__: The countries used for the first question were still displayed for the next question. 
* __Fix__: 
    - Tried to debut in Chrome DevTools and using console.log. Realised the currentQuestion array length was increasing which means the functions pulled more countries but the original ones were still there.
    - Added a single line in my currentQuestion function to empty the array after a match was verified and before another question was pulled.
* __Verdict__: Since the currentQuestion array was empty, new questions were displayed for the user

### 2. Event listener matches correct data
* __Issue__: After setting an alert to show when match was correct or not, I tested and found out that next question data was pushed into array before previous match was verified which leaded to fail match every time.
* __Fix__: 
    - First added a `setTimeOut` function to ask DOM to wait for the first match to be verified before pullCurrentQuestion function was friend
    - Used documentation of Sweet Alert to use a conditional statement inside the alert and wait for user to click before next question was pulled
    `if (result.dismiss){pushCurrentQuestion(shuffleData(countryData))};`
* __Verdict__: User dont have to do anything and next question will show correct data before being verified accurately

### 3. Keep data of countries in a global variable so it can be called when next question is pulled
* __Issue__: After removing global variable and trying to pass in arguments from function to function, data of countries was undefined so next question was not pulled after first one was matched.
* __Fix__: 
    - After multiple searches, various attempts at adding parameters and arguments but unable to find solution, consulted mentor who advised that sometimes, we need global variables so data can be called anywhere in the file. See commit [159c5ef](https://github.com/mkuti/FlagGame_milestone_2/commit/159c5ef542a3a999c8a202bd8ddf3ac9f6e9f50b).
    - Reverted CountryData as a global variable so I could call it from match function
* __Verdict__: Next question was displayed correctly as no longer considered as undefined

### 4. Making sure correct container and buttons are hidden or showing when clicked
* __Issue__: Different containers showing at the same time after the game was over or when "reset" or "mode" buttons were clicked
* __Fix__: Manipulated the DOM to add or remove "d-none" bootstrap class on each container or button. See commit [d48e440](https://github.com/mkuti/FlagGame_milestone_2/commit/d48e440b329cda97ff71d13c2cfead46179a8f91)
* __Verdict__: One container showing at each specific time and restart and mode button hidden when home container is displayed, and showing when other containers are displayed

### 5. Changed col sizes of banner so absent items are removed from the total size of row
* __Issue__: 
    - Since different elements of the banner were displayed or not depending of the container being shown on the page, I originally included them in the grid of the banner.
    - When one only or two buttons were showing, it was out of place, not centered
* __Fix__: Set attention text of banner for home container as "col-12" and used Javascript to add "col-6" to the two buttons when other containers were displayed.
* __Verdict__: Banner was responsive on all screens and depending of the container shown during the game

### 6. Making sure the game stopped when mode button was clicked
* __Issue__: When clicking mode button and restarting the game or choosing one mode, question count would show 2/20
* __Fix__: Added stopGame function to reset questionCount and score if mode button was selected
* __Verdict__: Game stops and restart fully if user wants to change mode or go back to home button

### 7. Next question triggered only after timer expires
* __Issue__: After I set timer to be the trigger for the next question, a confirm button was still displayed and when clicked, would close alert but current question still displayed
* __Fix__: Removed the confirm button completely and made sure user could not escape the alert or click outside
* __Verdict__: User just have to wait for timer to expire before next question is displayed

### 8. Name of incorrect country displayed on alert when incorrect country flag is clicked
* __Issue__: For country mode, the name of the country being displayed was showing on alert when match had failed. This was not changed after 2nd mode was added
* __Fix__: Changed alert to show clickedanswer name on 2nd mode instead of matchCountry name
* __Verdict__: User can improve later as he knows the name of the country associated with the flag clicked

### 9. Making sure the country to match is not displayed again during the same game
* __Issue__: Same country showing again within the next game
* __Fix__: 
    - Changed function of selecting country match to remove it from original array by re-defining an array filtered without the matched country of each question
    - calling fetchapi function inside restart() so we get the full original array for each game
* __Verdict__: CountryData array goes from 250 countries to 230 at the end of the game. All displayed countries have been removed

### 10. Buttons clicked dont stay active on mobile screens
* __Issue__: On mobile devices, each time a button was clicked, it stayed active for the next question, unless you clicked outside the button
* __Fix__: Replaced hover effect by input:active so it does not stay active after being clicked
* __Verdict__: This removed the hover effect with background color but much better UX effect when playing the game on small devices

### 10. Buttons clicked dont stay active on mobile screens
* __Issue__: On mobile devices, each time a button was clicked, it stayed active for the next question, unless you clicked outside the button
* __Fix__: Replaced hover effect by input:active so it does not stay active after being clicked
* __Verdict__: This removed the hover effect with background color but much better UX effect when playing the game on small devices

### 11. Timer of alert staying long enough when a failed match occurs so user can read country name
* __Issue__: When my son of 6years old played, he did not have time to read country name on alert
* __Fix__: 
    - Increased time only for failed alerts
    - Increased size of text and changed country name to uppercase to increase readability
* __Verdict__: My son played again and he was able to read most country names

### 12. Restart button shows directly under final score statement on game over containter
* __Issue__: Asked feedback about game on Slack and was advised that for UX purpose, restart button should show directly under final score statement
* __Fix__: 
    - Set restart and mode buttons to none inside the banner
    - Added mode button under statement and used Javascript to display home container when it's clicked
* __Verdict__: UX improved

[Back to Top](#table-of-contents) 

# Technologies Used
- [GitPod](gitpod.io) - I used __GitPod__ as my IDE for the development of this website.
- __HTML__ language is used to create the structure of the website and game.
- __CSS__ language is used to add styling on the structure of the website.
- [BootstrapCDN](https://www.bootstrapcdn.com/) - The website is using __Bootstrap4__ as the basic structure and grid of the website and to increase the responsiveness of the website.
- [jQuery](https://jquery.com/) and [Popper.js](https://popper.js.org/) - The website uses __jQuery__ and __Popper.js__ to bring in Javascript which makes the navbar responsive
- __Javascript__ functioning language is used to fetch external data and add interactivity on the website so the game functions based on user's actions
- [jQuery](https://jquery.com/) - I used jQuery to avoid repeating same actions on the DOM when buttons were clicked
- [FontAwesome](https://kit.fontawesome.com/f7e192f540.js) - The website is using __Font Awesome__ to display the social media icons in my footer
- [Google Fonts](https://fonts.google.com/)- The website uses __1 Google font__- Url imported in CSS
- [AutoPrefixer](https://autoprefixer.github.io/) - I have used __AutoPrefixer__ to make sure the css code worked on all browsers
- [Tiny.jpg](https://tinyjpg.com) - I have used __Tinyjpg__ to compress logo image of the website to increase the website loading on browser
- [ColorSpace](https://mycolor.space) - I have used __ColorSpace__ to find matching colors for the website
- [Balsamiq](https://balsamiq.cloud) - I have used __Balsamic__ to build the wireframes which I then exported to the IDE
- [Favicon converter](https://favicon.io/favicon-converter/) - I used Favicon converter to convert the logo into a favicon which I was able to insert in the asset folder and I tested it to be working
- [Sweetalert2](https://sweetalert2.github.io/) - 

# Media and Content origin
I used the following API for the project which contains a json object of 250 countries with many specific data, such as name, region, population...:[https://restcountries.eu/](https://restcountries.eu/)

For the purpose of the game, I used mostly three datas: the name of the country, its alphacode, and its flag url. 

#### Other Resources:
* Previous logo image: [https://upload.wikimedia.org/wikipedia/commons/8/87/Flag-map_of_the_world.svg](https://upload.wikimedia.org/wikipedia/commons/8/87/Flag-map_of_the_world.svg) 
* New and current logo image: [https://www.pinterest.com/pin/271060471299685564/](https://www.pinterest.com/pin/271060471299685564/)
* For the Json data I started to create, I used two main websites: [http://nationfacts.net/](http://nationfacts.net/) and [https://www.worldatlas.com/](https://www.worldatlas.com/).

# Deployment
I have been using the Integrated development environment (IDE) [GitPod](gitpod.io) to develop this milestone project.
As I used it for the first time and Code Institute changed the preferred IDE for the whole course, I was lucky to avail of the full template prepared by Code Institute at the time.

I went to Code Institute [full template repository](https://github.com/Code-Institute-Org/gitpod-full-template), cloned it and created my own repository with the template ready. From there, I opened GitPod which started a workspace.

From that point, I could add, commit any update of my code and push it to the remote repository so it could be regularly backed up and accessed by others.

## Enabling GitHub Pages to publish site from master as a publishing source

* Opened up GitHub in the browser.
* Signed in using username and password.
* Selected my repositories.
* Navigated to [FlagGame repository](https://github.com/mkuti/FlagGame_milestone_2).
* In the top navigation clicked 'settings'.
* Scrolled down to the GitHub Pages area.
* Selected 'Master Branch' from the 'Source' dropdown menu.
* Clicked to confirm my selection.
* Your site is published [https://mkuti.github.io/FlagGame_milestone_2/](https://mkuti.github.io/FlagGame_milestone_2/)

When I submitted this Milestone project, I confirmed that the Development Branch and Master Branch are identical.

## How to run code locally

1. On GitHub, navigate to the main page of the repository
2. Under the repository name, click Clone or download
3. In the Clone with HTTPs section, click to copy the clone URL for the repository
4. Using favorite IDE, open Terminal
5. Change the current working directory to the desired file location
6. Type git clone, and then paste the URL you copied in Step 2 when git clone: [https://github.com/YOUR-USERNAME/YOUR-REPOSITORY ](https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7. Press Enter > Your local clone will be created.

### Credits

*

# Special thanks

-

__Thank you all!__

##### Disclaimer:
The content of the website is for educational purposes only.

[Back to Top](#table-of-contents) 