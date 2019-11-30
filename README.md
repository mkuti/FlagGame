<h1 align="center">
  <a href="" target="_blank"><img src="" alt=""/></a>
</h1>

<div align="center">

# MATCH THE FLAG
</div>
<div align="center">

[Website is deployed via GitHub pages here](https://mkuti.github.io/FlagGame_milestone_2/)
</div>

For the second milestone project, I decided to make an interactive and educational game, so I could use Javascript functional programming which I have just learnt.

I like games as I believe anything can be learnt while having fun. Although I have not been playing a lot of online games or game apps myself, I am now a mum and often look for interesting, educative and well designed numeric games for my children.
Unfortunately, a lot of educative games do not have a great design and are not user friendly, especially when it comes to desktop or browser games.

My oldest son loves the planet, its continents, countries, and its flags, while he dreams of travelling when he stares at his globe :) He is also in the middle of learning to read and has fun with it.

I, myself, am passionate about discovering other cultures, learning and understanding languages and travelling generally in various countries while getting to know its people.
I remember as a child, one of the online game I played over and over again was a plane flying over the world map. The plane had a label behind with a country name written. The game was to click on the country on the map shown by the plane.
I learnt so many countries on all continents thanks to that game, which is still sometimes useful in my job up till now.

Finally, I want to become a software developer and web designer, partly because I want to use this new skill to help improving our world via contributing to great causes, which is another passion of mine.
Generally within my friend, family or colleagues circles, I noticed that many people have little clue about geography and cultures of other countries. They know little of flags although they get interested if you present it to them.
Also, there is a general ignorance of other's origins and cultural identities as well as an increasing behaviour of people forgetting or putting away where they come from because they want to blend in.
I believe in the richness of diversity so would love to bring more awareness about cultures, languages, and other labels which builds identity, while remind everybody that they should be proud of their origins.

In brief, I needed to make a game which could please my sons, uses a thematic which strongly interests me and finally to make a better world. Difficult task!

I made a final decision on making a game where the player would have to recognise a flag and match it to a country while random information would be showing about the country as a learning gift to the user.
For this, I would need to use two main APIs, one to display the flag and one to display random facts about the country once the match is successful.

The design of the game should be simple enough for a child to use it and attractive for an adult to play without much distractions and making them want to play more, to learn more...

More details about the design and structure of the game:
1. common mode, by flag (easy level): display a flag and match it to a country among 4 options
2. reversed mode, by country (easy level): display a country and match it to a flag among 4 options
3. Matching mode (medium level): display 3 very similar flags and 3 countries and ask player to match flag with correct country (ex: Ireland, India, Ivory Coast flags or Indonesia and Poland)
4. Map mode (difficult level): display Google Map in background, flag displayed, player has to click on map to show correct matching country

# UX
__Primary target audience?__ For anyone from 6years old interested by geography or want to learn for specific purpose
- *Strategy* > make the game interactive, fun and educative with a very simple design --- catchy and compelling
Minimal content and large images with minimal number of steps to start playing, match the flag, get results and continue or stop

__What is the project for?__ As shown in my intro, game is for anyone looking to test their knowledge of geography and flags.
The objective is also to trigger anyone else to learn more about other countries and cultures via an unknown flag
1.
- *strategy* > to make the game easy enough for anyone to build their knowledge of flags and countries while playing. Dont want to make anyone give up after one trial and dont want knowledgeables players to get bored
Have an easy mode with 2 attempts for each flag where player is allowed to fail before trying another flag.
15 random flags in one game
Player build points and at the end of the game, get a result which can be improved > motivation to try again to get a better score

Difficult mode/level, can call it "map mode" or "extreme (so good players are not bored): display Google Map in background, flag displayed, player has to click on map to show correct matching country

__What is culturally appropriate?__ appropriate for 6years old minimum and user-friendly for their age and dextirity
- *strategy* >  make sure random fact are relevant for kids and do not contain inappropriate content
> each button is not too small
> font size big enough for a child of 6years old who is learning to read

__What content would be relevant?__ flags and countries of the world (not fake, not regions or small ethnies) - appropriate random fact for kids
- *strategy* > study the flag API and see if only real countries flag are in there, also maybe see if possible to remove the most known flags to make the game already up from basic level (ex: US, UK, France...)
> study random fact API and see if all content is appropriate - if needed I will make up one API myself with random fact more relevant to kids

__Why is this so special?__ hard to find simple games which are also educational for kids and adults on desktop or browser (not app). Most online games have poor or too complex design with a lot of content
- *strategy* > catchy and compelling website, with brief but effective content.

During my research in planning and designing the website, I asked a few questions to some friends who could be potential clients and also the practitioner himself. From those questions and my own research of other websites and practice, came the user stories below.
Before the user stories, I wanted to add here a few questions asked and their answers.

1. What does the User expect?
	* I expect a simple game which is easy enough to get into it, with catchy colors and very minimal content. After a few games, I want to find a difficult level where I can continue to be challenged
2. How can a game be interesting enough so I want to keep playing?
	* With different modes and levels, where I can see my score so I am motivated to improve it. A game where I dont get bored and I can learn from it



## User Stories and Features:

During the scope plane and while establishing the user stories for each page and making wireframes, the following features were decided.

This helped me to plan ahead and also to work through specific sprints to implement one feature at a time, answering one user story at a time...

__For the Home page__


__...__


__...__
1. As someone interested

__...__


__...__


### Main existing Features
* Feature 1 -

### Features Left to Implement
 *

### List of wireframes made before building the website

I used Balsamiq tool for the wireframes and attached them to the directory in assets. I spent a considerable amount of time doing wireframes in details as I had no clue of design before and wanted to have a clear idea of how the website looked like.

- [Home](wireframes/Wireframe desktop version, welcome page.png)
- [Desktop game page](wireframes/wireframe mobile version, welcome page copy.png)
- [Mobile Home page](wireframes/wireframe mobile version, welcome page.pngwireframes/wireframe mobile version, welcome page copy.png)
- [Mobile game page](wireframes/wireframe mobile version, welcome page copy.png)

As always when implementing coding, these wireframes templates do not exactly reflect the final version of the website itself but they were very useful for me to have an approximate design in my head.
The color theme changed completely after implementing design in the code. I removed lots of features due to lack of time and expertise, such as the map in the background which was supposed to be for one extreme game mode.

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

### Final and official testing:
  * [W3 MarkUp validation](https://validator.w3.org)
  * [W3 CSS validation](https://jigsaw.w3.org/css-validator/)

I checked the validity of my code at different times and received few errors on HTML markup which I worked on correcting. I did not get any errors with my CSS.
Example of an error in the MarkUp corrected:
- *The frameborder attribute on the iframe element is obsolete. Use CSS instead.* I then removed frameborder from HTML and added border: none in CSS

### General testing


### Testing in different browsers



### Testing for each section



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