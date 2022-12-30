
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/skald1311/Guess-My-Number">
    <img src="https://user-images.githubusercontent.com/84189062/210021591-660087cb-5c01-4e91-bfb6-3a36c1ad556c.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Guess My Number</h3>

  <p align="center">
    A guess the secret number web game
    <br />
    <a href="https://github.com/skald1311/Guess-My-Number"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/skald1311/Guess-My-Number/issues">Report Bug</a>
    ·
    <a href="https://github.com/skald1311/Guess-My-Number/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
The name of the project probably already describes everything there is about this project. In short, the goal of the game is to guess the correct number. It includes a highscore, a play again button and every time you guess wrong, the game will provide a hint: higher or lower. This is a straightforward game as this is my first time using Javascript to manipulate DOM and CSS. In development, I used NodeJS's live server to visualize the game as I write my code. In my perspective, teachers, and professors can easily utilize this game in their lectures to teach the fundamentals of the **Binary Search algorithm**. There will be instructions to play the game yourself in your browser but I'll put a demo play here in case anything goes wrong.
Here is the starting screen:
![image](https://user-images.githubusercontent.com/84189062/210020562-ce05f575-1c37-4d5f-8720-8c3e8634be2f.png)
Let's test this: let the first guess be 10
![image](https://user-images.githubusercontent.com/84189062/210020675-d2cff478-380b-4b66-a37c-4a33f3f67bd8.png)
As we can see, it says too low which means the guess is wrong and 1 point is deducted from our total score of 20.
After guessing for a while, we eventually reached the correct answer:
![image](https://user-images.githubusercontent.com/84189062/210021032-236ea78d-f3b0-4297-8869-622aa2c8faa6.png)
As we can see, the background changes to green indicating the correct answer, and the question mark in the middle of the screen changes into the correct answer.
The score will then be compared to the highscore.
If the point goes to 0, we will lose the game.
We can always play the game again by clicking Again



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Javascript][Javascript]][Javascript-url]
* [![Node][Node.js]][Node-url]
* [![HTML5][HTML5]][HTML5-url]
* [![CSS][CSS]][CSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Click the green button

![image](https://user-images.githubusercontent.com/84189062/210023644-49f6ee47-b8aa-479d-b192-c9985ef913cd.png)
   
   
2. Download ZIP

   ![image](https://user-images.githubusercontent.com/84189062/210023664-4d06ef4a-71a7-444d-9778-bf21c8ed30ae.png)
  
  
3. Extract the file
   ```sh
   Make sure all of the files are in the same folder!!!
   ```
4. Run the file named 'index'


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Duong Hoang - [LinkedIn](https://www.linkedin.com/in/hmd1311/)

Project Link: [https://github.com/skald1311/Guess-My-Number](https://github.com/skald1311/Guess-My-Number)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hmd1311/
[Javascript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[Javascript-url]: https://www.javascript.com/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[HTML5]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://en.wikipedia.org/wiki/HTML
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://en.wikipedia.org/wiki/CSS
