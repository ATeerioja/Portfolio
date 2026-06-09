# Simple portfolio website for a student

The purpose of this website is to showcase my data-analytics and machine learning projects.
It is also used as a traditional portfolio website with the necessary components such as contact information.

This website is developed with Claude Sonnet 4.6 using the free tier as of now.
Although Claude is generating a large ammount of the base code, I am actively learning from the code and
learning the technologies that are used.

## Version 1.
This version uses vanilla JS, HTML and CSS for the content layout and styling.
Nginx is used to serve the static files and to cache the static assets.
Docker is used to package the application so it can be easily transferred to the deployment environment among other benefits.
Cloudflare is used for a custom domain name and SSL-certification.
Fly.io is used to host the Docker container with their pay-as-you-go service being optimal for this small-scale application
Github is used for sharing the development files and version control.
Actions is used for CI/CD purposes to check if there are any leaked secrets and building and pushing the changes to Fly.io

## Version 2.
Now that the basic structure of the website is working I want to migrate the code to use React and Vite. React improves the modular structure so that building a larger website can be done more easily. Vite is used for production to see how the changes in the code change the website in almost real-time.

React is used to manage the modular structure with components.
Vite is used for seeing changes in the development environment in almost real-time.

This version also establishes (hopefully) the commit and branch structure of this project.
Moving forward the following prefixes are used to organize branches
feat/, fix/, chore/

The main branch is updated with a commit for v1.
The new branch is called feat/v2-react-vite