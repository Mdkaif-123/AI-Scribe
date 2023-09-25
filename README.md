<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://res.cloudinary.com/dngfmzv2g/image/upload/v1692106739/task-unity-website-favicon-color_rjmi4c.png" alt="Logo" width="90" height="90">
  </a>

  <h3 align="center">Task Unity</h3>

  <p align="center">
    Empowering Collaboration And Enhancing Efficiency
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://task-unity.onrender.com/">View Demo</a>
    ·
    <a href="https://github.com/Mdkaif-123/Task-Unity/issues">Report Bug</a>
    ·
    <a href="https://github.com/Mdkaif-123/Task-Unity/issues">Request Feature</a>
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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

About the Project

"Task Unity" is a cutting-edge task management and collaboration solution. Our mission is simple: to enhance productivity and teamwork by simplifying task management and fostering transparent communication.

Key Objectives

Efficiency: Streamline task assignment for clarity and effectiveness.
Collaboration: Encourage seamless communication and teamwork.
Transparency: Provide clear insights into task progress and performance.
Productivity: Empower individuals and teams to achieve peak productivity.
Tech Stack

- Frontend: React, Tailwind CSS, Material Tailwind, Chart.js, Flowbit Components, React Router, Multi Avatar.
- Backend: Node.js, Express, MongoDB, JWT.
Conclusion

"Task Unity" is your gateway to efficient task management and enhanced collaboration. Join us in redefining productivity and unity within your organization.

Welcome to `Task Unity.`


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.



* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white) 
* ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) 
* ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)






<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow these instruction to setup the project into your local machine

### Prerequisites

Before you can run the "Task Unity" software, ensure you have the following prerequisites installed on your system:

* **Node.js**: "Task Unity" relies on Node.js for server-side operations. If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/).

  To check if you have Node.js installed, open your terminal and run:
  
  ```sh
  node -v
  ```
If Node.js is not installed, please follow the link to download and install it.

npm (Node Package Manager): Ensure you have the latest npm version by running:

  ```sh
  npm install npm@latest -g 
  ```
MongoDB: Download and install MongoDB from mongodb.com.

```sh
mongod --version
```

Once you have these prerequisites in place, you'll be ready to run "Task Unity" and experience efficient task management and collaboration.



### Installation

_Below are the instruction of how you can install and set up your app.

1. Clone the repo
   ```sh
   git clone https://github.com/Mdkaif-123/Task-Unity.git
   ```
2. Cd into backend folder
   ```sh
   cd ./Backend
    ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Cd into frontend folder
   ```sh
   cd ./frontend
   ```
6. Install NPM packages
   ```sh
   npm install
   ```
7. Set up your backend .env file
   ```js
   MONGO_DB_URL = "mongodb://127.0.0.1:27017/taskUnityDB"
   AUTH_SECRET_KEY = "thisistheauthsecretkeyforauthenticationpurpose"
   ```
7. Set up your frontend .env file
   ```js
    REACT_APP_HOST="http://localhost:8000"
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### As an Admin

1. **User Management**: As an admin, you can add, edit, and delete member profiles with relevant information.
2. **Task Assignment**: Assign tasks to users, specifying task details, due dates, and priority for effective task management.
3. **Communication**: Utilize the in-app messaging system to communicate with members seamlessly and integrate with WhatsApp for external communication.
4. **Task Tracking**: Monitor completion rates, pending tasks, and delays through the interactive dashboard.
5. **Performance Analytics**: Access graphical representations of organization-wide performance metrics for informed decision-making.

### As a User

1. **Task Dashboard**: Get a clear view of assigned tasks, due dates, and priority levels.
2. **Communication**: Directly message admins regarding tasks for clarification and updates.
3. **Performance Tracking**: Use a personal dashboard displaying task completion rates, pending tasks, and delays for self-assessment.
4. **Peer Progress**: View aggregate task progress of other users without compromising their privacy.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

<!-- ROADMAP -->
## Roadmap

- [x] Define Project Requirements
- [x] Create User Personas and User Stories
- [x] Outline Core Features and Functional Requirements
- [x] Specify Non-Functional Requirements
- [x] Design User Interface (UI)
- [x] Set Development Phase: 11/08/2023 to 11/09/2023
- [x] Plan Testing Phase: 12/09/2023 to 15/09/2023
- [ ] Complete Development Phase
- [ ] Execute Testing Phase
- [ ] Launch Date: 17/09/2023
- [ ] Gather User Feedback
- [ ] Continuous Improvement and Feature Enhancements

### Future Enhancements

- [ ] Create Admin and user chat feature
- [ ] AI bot integration
- [ ] Email and notification features
- [ ] Courses platform
- [ ] Super Admin Functionality
    - [ ] Website Customization
    - [ ] Admin Access Control


See the [open issues](https://github.com/Mdkaif-123/Task-Unity/issues) for a full list of proposed features (and known issues).

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

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Md Kaif Ansari - [@LinkedIn](https://www.linkedin.com/in/md-kaif-ansari/) - amdkaif843@gmail.com

Project Link : [https://github.com/Mdkaif-123/Task-Unity](https://github.com/Mdkaif-123/Task-Unity)

Live Link : [Task Unity](https://task-unity.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/Mdkaif-123/Task-Unity/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: https://res.cloudinary.com/dngfmzv2g/image/upload/v1693944799/frame_chrome_mac_dark_1_i8u6br.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
