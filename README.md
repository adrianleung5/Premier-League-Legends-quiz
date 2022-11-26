# Portfolio Project 2 - Javascript

The Premier League Quiz is a sports quiz site that aimed at football fans to test their knowledge and bring back memories of past football folklore. This Quiz will have 8 multiple choice question with a 90- second timer and leaderboard so you can compete with friends and family about your score.

![Responsive](assets/images/responsive.png "Responsive")

## Key Project Goals
This project has 2 main objectives: 
- To showcase the development of my HTML and CSS skills as this is my second portfolio project.
- To integrate Javascript with HTML and CSS to create a quiz that is functional and interactive.
- To create a fun quiz for football fans. The site should be easily accesed from all types on devices.
- To enable players remince of the football players have watched over the years through a fun and comepititve game.

# Brief
The quiz should be engaging and have a variety of questions that tests and challenges players knowledge of football. 

## Target Audience
Sports fans, football fans

# UX user Experience

## First Time Visitor Goals
- As a first-time visitor, I would like to understand the website's objective and purpose.
- As a first time visitor, I would like to be able to navigate through the website easily and without any problems.
- As a first time visitor, I would like to understand how to play quiz and be able to easilu interputs its rules.


## Returning User Goals
- As a returning visitor, I would like to see new and more questions.
- As a returning visitorr, I would like to be able to leave feedback and suggestions for future questions for the quiz.
- As a returning visitor, I would like to get in touch with the site developer

## Frequent User Goals
- As a frequent user, I would like to see my best scores.
- As a frequent user, I would like to see if any questions suggested by other users were used as new questions.
- As a frequent user, I would like to sign up to be notified to any changes and updates to the quiz.

### Initial Concept
To gain ideas for the general design of the quiz i gathered inspiration from fellow students in code insitutes project that was obtained from the peer review channel on slack. An example of a site i took inspiration from would be [Sean Johnstons quiz] (https://github.com/seanf316/P2-Movie-Buff-Or-Bluff)

### Wireframes
The Wireframes were produced using [Balsamiq](https://balsamiq.com/). 
The final site varies from the wireframes due to developments that occurred during the building process. 

### Features Left to Implement
As a future enhancement, I would like to add a scoreboard tracker into the quiz.

### Colour Scheme
The color scheme used on this website was based on the hero image. [Coolors.co](https://coolors.co/) was used to identify the colours associated with the hero imahge. This identified a selction of 5 colours. The quiz is predominantly based on only of these colours Russian Violet. The color white was chosen to provide a nice contrast to the site and was used as the main colour for the text of the site. Ultraviolet was as the box shadow effect around the buttons of the site.

![coolor.co](assets/images/coolorsco.png "coolor.co")

### Typography
Google fonts was used to import the fonts used for the purpose of this quiz [google fonts](https://fonts.google.com/).
The use of these fonts togetheir was inspired by [Elementor.com](https://elementor.com/blog/font-pairing/#). This font provided a sharp and professional look for the quiz.

## Features
### Homepage  

- The homepage is the landing page which introduces the user to the website.The homepage is split into 3 sections. Firstly,at the top their is a clear title stating that the purpose of the website is a quiz. This section also contains a hero image that zooms to when a user lands on the page to set a playful tone for the quiz. 

![Top of homepage](assets/images/landing1.png "Top of Homepage")

### Instructions and lets get started button
- The second section provides users 2 options to proceed on the homepage. This is the intructions button which provides users clarity on how to play the game and a let get started button to start the game. The lets get starte button is also styled with a icon.

![Middle of homepage](assets/images/landing2.png "Middle of Homepage")

![instructions](assets/images/instructions.png "instructions")

### Sign up and footer
 - At the bottom of the landing page there is a sign up form. This enablses users to enter their information to subscripe for future quiz updates as well as the opporunity to provide some feedback on the quiz. There is also a footer that provides social media links to the quiz.

 ![Bottom of homepage](assets/images/landing3.png "Bottom of Homepage")
 
 
#### Name input

- On game start the users are shown an input box with the label "Enter your username"
- Users are unable to proceed without entering a username

 ![Bottom of homepage](assets/images/login.png "Bottom of Homepage")

 ### Main Quiz Section
  ![main quiz section](assets/images//question.png "main quiz section")
  The main quiz section  includes the username name along with a greeting , a timer, the question, 4 answer buttons and a next button

   - Question
    
      The question is displayed at the top of the section above to question to ensure it is clearly visible to users.
       ![Question](assets/images/game.png "Question")

  - Timer
  
  - The question is displayed at the top of the section above the question and will turn red when there is less than 15 seconds remaining. 
    This will warn users time is running out.
      ![Timer](assets/images/timer.png "Timer")

  - When the timer is done a pop up modal will display redirect user back to the homepage to enable them to play again

      ![Timeout](assets/images/timeout.png "Timeout")

- Answer buttons

  - The answer buttons are displayed in in 2 rows with 2 buttons per row. 

  ![answers](assets/images/answers.png "answers")

  - For smaller mobile phone devices the questions are displayed in a column of 4.
  - The answer buttons change color to red or green to demonstrate to the user if their correc was right or wrong. 

    ![incorrect](assets/images/incorrect.png "incorrect")

- Next Button 

- The next button enables the user to move on to the next question. It is disabled until a user selects an answer.

![next button](assets/images/next.png "next button")

- Progress bar 

  - The progess fills as the user progresses through the quiz. This enables the user to know how much of the quiz is left

![bar](assets/images/incorrect.png "bar")

- Social media links

  - The social media links enable the user to vist the quizs social media pages to find out more information.

![media](assets/images/media.png "media")

 ### Results page 
  - The results shows users their score from the quiz.
  - Users are awarded a trophy depending on their score.
  - The users can see their score as a percentage and receive a personalised messege depending on their score.
  - When the user achieves a score above 75% they are awarded a gold trophy icon.

 ![75% and more](assets/images/gold.png "75% and more")

  - When the user achieves a score above 50%  but less than 75 %they are awarded a silver trophy icon.

 ![50 to 75%](assets/images/silver.png "50% to 75%")
 
  - When the user achieves a score above 50% they are awarded a bronze trophy icon.
 
  - The user is then redirected back to the homepage.

  ![less than 50%](assets/images/grey.png "less than 50%")

  ### 404 page

The site has a custom 404 page that tells the user that something went wrong and also includes a home button to take the user back to the main quiz menu.

![404 Page](assets/images/404.png "404 page")

   ## Technolohgies used
- [HTML5](https://html.spec.whatwg.org/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
- [Gitpod](https://www.gitpod.io/)
- [Github](https://github.com/)
- [Google Fonts](https://github.com/TashaTJ/pawsome-portraits-v4#technologies-used)
- [Font Awesome ](https://fontawesome.com/)
- [Google chrome dev tools](https://developer.chrome.com/docs/devtools/)
- [Am i responsive](https://ui.dev/amiresponsive)
- [Coolors.co](https://coolors.co/)
- [Unsplashed](https://unsplash.com/)
- [Jshint](https://jshint.com/)
- [freepngimg](https://freepngimg.com/png/32207-premier-league-file/icon)
 
## Testing 

### Responsiveness
- I have tested this website works on al types of browswers. All pages were tested to ensure they were sponsive from small screens with up to 320px to large screens
with uo to 2550px.

Steps to test:

1. Open browser and navigate to [Premier League Ledgends Quiz](https://adrianleung5.github.io/Premier-League-Legends-quiz/)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px.
4. Check the responsiveness at each page of the site.
5. slowly increment and incease to width until you reach 2560px for 4k screen size

Expected:

Website is expected to be responsive on all screen sizes with no images are pixelated or stretched.
No elements overlap and is correctly proportioned.

Website was also opened on the following devices and no responsive issues were seen:
This achieved was thorugh Modzilla Firefoxes responsivness test feature

- Samsung galazy note 20
- Ipphone 12/13 pro 
- iPhone 11 pro
- Samsung S 20 Ultra 11  


### Validator Testing 
- No errors were shown when putting the code through the w3c html validator.
- However a warning was recorded on the quiz.html page "Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed".

Index.html validation

![Index HTML valudator](assets/images/index.png " Index HTML validator")

![quiz HTML valudator](assets/images/quiz.png " quiz HTML validator")

![404 HTML](assets/images/index.png "404 HTML")

No errors were shown when putting the code through the jigsaw css validator.
![CSS validator](assets/images/css.png "CSS validator")

No errors were shown when putting the code through jshint javascript validator.
![script.js](assets/images/script.png "script.js")
![quiz.js](assets/images/quizjs.png "quiz.js")
![result.js](assets/images/resultjs.png "result.js")

Colour contrast tests were carried out across the website and all came back without issue as shown by Ally Color Contrast Accessiblty 
 ![color checker](assets/images/a11y.png "color checker")

### Accessibility

- The site received high scores on both mobile and desktop when put through lighthouse testing.

  Lighthouse desktop

  ![desktop](assets/images/desktop.png "desktop")

  Lighthouse mobile
  
  ![mobile](assets/images/mobile.png "mobile")

## Version control

The following git commands were used throughout development to push code to the remote repo:

- ```git add <file>``` - was used to add the file(s) to the staging area before they are committed.

- ```git commit -m “commit message”``` - was used to commit changes to the local repository queue ready for the final step.
  
## Deployment

The site was deployed to Github pages
- Navitgate to the settings tab of the Github repository via [Github repository](https://github.com/adrianleung5/Leung-Wellness).
- Select pages tab on the left side of the page under code and automation.
- Under source, select "deploy from a branch" and then click ‘save’.
- Page will refresh, Return to the repository page and you will a "github-pages active" icon under enviornment on the right side of the page.
- A live link can be found here 

### To Fork the Repository
- Go into Github and select the fork icon on the top right.
- - When you have pressed the fork button you should now have a full copy of the repository.

### Create a local clone
- Log into Github and go to the repository.Click on the ‘code’ tab beside the gitpod button.
- Select the clipboard icon
- In your IED open GitBash
- Change the current working directory to the location you want the cloned directory to be made.
- Type ‘git clone’ and then paste the URL copied from GitHub.
- press enter and the local clone will be created.

## Credits

### Content
- [Sean Johnstons quiz](https://github.com/seanf316/P2-Movie-Buff-Or-Bluff) The quiz was inspired by 
- [Gareth McGirr](https://github.com/Gareth-McGirr/tacos-travels) was used for inspiration for the README.md 
- [Font Awesome ](https://fontawesome.com/) was used for the fonts Lato and Roboto in the quiz
- [Codepen](https://codepen.io/kanishkkunal/pen/obGojO) was used to to design the buttons in the quiz.
- [Sean Johnstons quiz](https://github.com/seanf316/P2-Movie-Buff-Or-Bluff) inspired the design for the modal for the quiz.

### Media 
- [Unsplashed](https://unsplash.com/) and google images was used for the images on the homepage
- [Font Awesome ](https://fontawesome.com/) was used for the social media icons and icons throughout the quiz.
- [freepngimg](https://freepngimg.com/png/32207-premier-league-file/icon) was used for the favicon

## Code 
- I found a lot of useful tutorials online. I occasionally applied principles from them to the site after thoroughly understanding their code and modifying it to meet the needs of the site.
- [Stack Overflow](https://stackoverflow.com/) was used to solve various was used to help develop the javascript of the quiz
- [W3schools](https://www.w3schools.com/) was used to , research various javscript, html and CSS syntax
- [Codepen](https://codepen.io/kanishkkunal/pen/obGojO) was used to to research CSS syntax
- [Geeksforgeeks](https://www.geeksforgeeks.org/scroll-to-the-top-of-the-page-using-javascript-jquery/#:~:text=scrollTo()%3A,the%20topmost%20and%20leftmost%20point.)
  was used to enable users to scroll userto the top of page in javascript.
- [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container) was used to help undrstand flex box











  

  

      
       






