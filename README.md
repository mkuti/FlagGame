<h1 align="center">
  <a href="https://mkuti.github.io/FlagGame_milestone_2/index.html" target="_blank"><img src="assets/images/logo.png" width=100 height=100 alt="logo"/></a>
</h1>

<div align="center">

# MATCH THE FLAG
</div>
<div align="center">
</div>

## Table of Contents:

* [Why building a flag game?](#why-building-a-flag-game)
* [How the game work?](#how-the-game-work)
* [UX](#ux)
    * [Strategy: Why and what](#why-and-what)
    * [Scope: User Stories](#user-stories)
    * [Structure: Features](#features)
        * [1.Main existing Features](#1-main-existing-features)
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

# Why building a flag game
For the second milestone project, I decided to make an interactive and educational game, so I could use Javascript functional programming which I have just learnt.

I like games as I believe anything can be learnt while having fun. Although I have not been playing a lot of online games or game apps myself, I am now a mum and often look for interesting, educative and well designed numeric games for my children.

My oldest son loves the planet, its continents, countries, and its flags, while he dreams of travelling when he stares at his globe.
I, myself, am passionate about discovering other cultures, learning and understanding languages and travelling generally in various countries while getting to know its people.
I remember as a child, one of the online game I played over and over again was a plane flying over the world map. The plane had a label behind with a country name written. The game was to click on the country on the map shown by the plane.

# How the game work
So I decided on making a game where the player would have to recognise a flag and match it to a country while random information would be showing about the country as a learning gift to the user.
For this, I would need to use two main APIs, one to display the flag and one to display random facts about the country once the match is successful.

The design of the game should be simple enough for a child to use it and attractive for an adult to play without much distractions and making them want to play more, to learn more...

More details about the design and structure of the game:
1. common mode, by flag (easy level): display a flag and match it to a country among 4 options
2. reversed mode, by country (easy level): display a country and match it to a flag among 4 options


# UX
## Why and what
### 1. Primary target audience
For anyone from 6years old interested by geography or want to learn for specific purpose
- *Strategy* > make the game interactive, fun and educative with a very simple design --- catchy and compelling
Minimal content and large images with minimal number of steps to start playing, match the flag, get results and continue or stop

### 2. What is the project for
As shown in my intro, game is for anyone looking to test their knowledge of geography and flags.
The objective is also to trigger anyone else to learn more about other countries and cultures via an unknown flag
1.
- *strategy* 
    - to make the game easy enough for anyone to build their knowledge of flags and countries while playing. 
    - Dont want to make anyone give up after one trial and dont want knowledgeables players to get bored
    - Have an easy mode with 2 attempts for each flag where player is allowed to fail before trying another flag.
    - 20 random flags in one game
    - Player build points and at the end of the game, get a result which can be improved > motivation to try again to get a better score

In the future, to build difficult mode/level, also called "map mode" or "extreme (so good players are not bored): display Google Map in background, flag displayed, player has to click on map to show correct matching country

### 3. What is culturally appropriate
Appropriate for 6years old minimum and user-friendly for their age and dextirity
- *strategy* 
    -  make sure random fact are relevant for kids and do not contain inappropriate content

> each button is not too small

> font size big enough for a child of 6years old who is learning to read

### 4. What content would be relevant
Flags and countries of the world (not fake, not regions or small ethnies) - appropriate random fact for kids
- *strategy* 
> study the flag API and see if only real countries flag are in there, also maybe see if possible to remove the most known flags to make the game already up from basic level (ex: US, UK, France...)

> study random fact API and see if all content is appropriate - if needed I will make up one API myself with random fact more relevant to kids

### 5. Why is this so special
Hard to find simple games which are also educational for kids and adults on desktop or browser (not app). Most online games have poor or too complex design with a lot of content
- *strategy* > catchy and compelling website, with brief but effective content.

During my research in planning and designing the website, I asked a few questions to some friends who could be potential clients and also the practitioner himself. From those questions and my own research of other websites and practice, came the user stories below.
Before the user stories, I wanted to add here a few questions asked and their answers.

1. What does the User expect?
	* I expect a simple game which is easy enough to get into it, with catchy colors and very minimal content. After a few games, I want to find a difficult level where I can continue to be challenged
2. How can a game be interesting enough so I want to keep playing?
	* With different modes and levels, where I can see my score so I am motivated to improve it. A game where I dont get bored and I can learn from it.

## User Stories

During the scope plane and while establishing the user stories for each page and making wireframes, the following features were decided.

This helped me to plan ahead and also to work through specific sprints to implement one feature at a time, answering one user story at a time...

__For the Home page__


__...__


__...__
1. As someone interested

__...__


__...__


## Features
### 1. Main existing Features:
* Feature 1 -

### 2. Features Left to Implement:
*
* Matching mode (medium level): display 3 very similar flags and 3 countries and ask player to match flag with correct country (ex: Ireland, India, Ivory Coast flags or Indonesia and Poland)
* Map mode (difficult level): display Google Map in background, flag displayed, player has to click on map to show correct matching country


## Wireframes

I used Balsamiq tool for the wireframes and attached them to the directory in assets. 
I spent a considerable amount of time doing wireframes in details as I had no clue of design before and wanted to have a clear idea of how the website looked like.

- [Welcome page on desktop](https://raw.githubusercontent.com/mkuti/FlagGame_milestone_2/master/wireframes/Desktop-welcome-page.png)
- [Desktop game page](https://raw.githubusercontent.com/mkuti/FlagGame_milestone_2/master/wireframes/Desktop-choose-country.png)
- [Mobile Home page](https://raw.githubusercontent.com/mkuti/FlagGame_milestone_2/master/wireframes/Mobile-welcome-page.png)
- [Mobile game page](https://raw.githubusercontent.com/mkuti/FlagGame_milestone_2/master/wireframes/Mobile-choose-country.png)

As always when implementing coding, these wireframes templates do not exactly reflect the final version of the website itself but they were very useful for me to have an approximate design in my head.
The color theme changed completely after implementing design in the code. I removed lots of features due to lack of time and expertise, such as the map in the background which was supposed to be for one extreme game mode.

## Design
### 1. Color scheme
As I am not good at putting colors together and with design generally, I always try to create wireframes that include colors. It helps me to imagine the design before I start coding. 
When coding, I am focused on writing the code without getting too distracted by the design.
The game had a dark red and blue thematic when I designed it on the wireframes to avoid too much brightness on the screen while playing. I did not have any explanation about the color red itself.
During a meeting with my mentor, he advised that the color theme was  maybe too dark which did not go too well with the colorful flags. (commit e04e2a6)
### 2. Font


# Technologies Used
- This website used HTML and CSS programming languages.
- One feature also needed JS language which was provided by Simen Dehlin (mentor) via Slack
- [AWS Cloud9](https://www.awseducate.com/student/s/awssite) - I used __AWS Cloud9__ as my IDE for the development of this website.
- [BootstrapCDN](https://www.bootstrapcdn.com/) - The website is using __Bootstrap4__ as the basic structure and grid of the website and to increase the responsiveness of the website.
- [FontAwesome](https://kit.fontawesome.com/f7e192f540.js) - The website is using __Font Awesome__ to display many icons on all pages
- [Google Fonts](https://fonts.google.com/)- The website uses __3 different Google fonts__ to style the content text and headings - Url imported in CSS
- [Youtube](https://www.youtube.com/embed/7QMdT02TVnQ) - The website used __YouTube__ to host the video for the "Qigong page".
- [jQuery](https://jquery.com/) and [Popper.js](https://popper.js.org/) - The website uses __jQuery__ and __Popper.js__ to bring in Javascript which makes the navbar responsive
- [AutoPrefixer](https://autoprefixer.github.io/) - I have used __AutoPrefixer__ to make sure the css code worked on all browsers
- [Pexels](https://www.pexels.com) - Website imported images from __Pexels__ for the full background image and all banners image
- [Tiny.jpg](https://tinyjpg.com) - I have used __Tinyjpg__ to compress all images of the website to increas the website loading on browser
- [ColorSpace](https://mycolor.space) - I have used __ColorSpace__ to find matching colors for the website
- [Balsamic](https://balsamiq.cloud) - I have used __Balsamic__ to build the wireframes which I then exported to the IDE
- [Favicon converter](https://favicon.io/favicon-converter/) - I used Favicon converter to convert the logo into a favicon which I was able to insert in the asset folder and I tested it to be working

# Testing



## Final and official testing:
  * [W3 MarkUp validation](https://validator.w3.org)
  * [W3 CSS validation](https://jigsaw.w3.org/css-validator/)

I checked the validity of my code at different times and received few errors on HTML markup which I worked on correcting. I did not get any errors with my CSS.
Example of an error in the MarkUp corrected:
- *The frameborder attribute on the iframe element is obsolete. Use CSS instead.* I then removed frameborder from HTML and added border: none in CSS

## General testing:
As I did not have a lot of time and I was not really expert in Jasmine or any automating testing, I decided to do all the testing manually via the browser and Chrome Developer tools
My strategy is very simple: as soon as I write a line of code, I open the page in my browser to test it, make sure it works until I am fully happy with what I see and how it functions. 
For each feature I was working on, I tried to preview it in Chrome Dev tools to understand quickly which HTML or CSS would cause a certain effect and correct it as soon as possible. 
This allowed me to fully comprehend the languages and push to GitHub only after I made the whole feature was working well.
Once I was quite happy with the main features, I started to share the url with friends and family to get their first views and reactions on the design and the functionality of the game.
Through my own testing and with views of others, I have fixed a lot of design flaws and numerous bugs in my Javascript code. Thanks to that, I can present a website which is almost perfect :)


## Testing in different browsers:
I used Google Chrome as my primary browser and constantly tested it on my mobile phone also using the same browser. 
I also tested the game on Safari via an iMac with a very big screen and an iPod touch with probably the smallest screen regularly and never found any specific issue. 

## Specific testing scenarios:

### Color theme of the page
__Goal__: 
Found the perfect color theme that would attract players to stay on the page without creating too much distractions in the background of colorful flags
__Issue__: 




# Media and Content origin
API I can use for the project:
https://restcountries.eu/
https://www.countryflags.io/
Google map JavaScript API


Resources:
https://upload.wikimedia.org/wikipedia/commons/8/87/Flag-map_of_the_world.svg
https://stackoverflow.com/questions/3186635/disable-double-left-click-on-google-map
http://nationfacts.net/
https://www.worldatlas.com/
https://12go.asia/en/cambodia/interesting-facts
https://southbaybeachclub.com/20-fun-facts-about-the-cayman-islands/
*

# Deployment
I have been using the Integrated development environment (IDE) [AWS Cloud9]() to develop this milestone project.
After creating a new GitHub repository, I linked it on the terminal of my IDE. I could then commit any update of my code and push it to the remote repository so it could be regularly backed up and accessed by others.

To deploy the website from the GitHub repository to its published GitHub page, I followed the steps as below:

__Enabling GitHub Pages to publish site from master as a publishing source__
1. Navigate to GitHub Pages site's repository
2. Under repository name, clicked Settings
3. Used "Select source drop-down menu" to select master as my GitHub Pages publishing source
4. Clicked save

When I submitted this Milestone project, I confirmed that the Development Branch and Master Branch are identical.

__HOW TO RUN CODE LOCALLY__

1. On GitHub, navigate to the main page of the repository
2. Under the repository name, click Clone or download
3. In the Clone with HTTPs section, click to copy the clone URL for the repository
4. Open Terminal
5. Change the current working directory to the location where you want the cloned directory to be made
6. Type git clone, and then paste the URL you copied in Step 2 when git clone: https://github.com/YOUR-USERNAME/YOUR-REPOSITORY 
7. Press Enter > Your local clone will be created.

### Work based on other code.

*

# Special thanks

-

__Thank you all!__

##### Disclaimer:
The content of the website is for educational purposes only.