/**
 * config.js — Portfolio configuration
 * ------------------------------------
 * This is the only file you need to edit to personalise the site.
 * It's a plain JS module: import it wherever you need the data.
 *
 * Usage in a component:
 *   import config from '../config.js'
 */

const config = {
  // --- Identity ---
  name: "Anton Teerioja",
  title: "Data-analytics Master's Student",
  accolades: "Student Org. Active @Digit ry & @Pönkeli",
  university: "University of Turku",
  location: "Turku, Finland",

  // --- GitHub ---
  githubUsername: "ATeerioja",
  // Repos to show first (by name). Leave [] to sort by recently updated.
  pinnedRepos: ["Portfolio", "Smile_Detection", "Leaf_Classification_Problem", "Tree_Feature_Engineering", "Portable_Arduino_Speaker", "Advent_Of_Code_24"],
  // Max repos to display
  maxRepos: 6,

  // --- About ---
  bio: [
    "Currently studying for my Master's in data-analytics.",
    "I want to use my knowledge of machine learning to create applications that are usefull for others.",
    "My current focus is on learning how to evolve my programming and development skills to deploy modern applications.",
  ],
  skills: [
    "Python", "Pandas", "Pytorch", "TensorFlow", 
    "JavaScript", "CSS", "React", 
    "SQL", "C", "Bash", "Git", "CI/CD", "Docker"],

  // --- Contact ---
  email: "anton.teerioja@gmail.com",
  github: "https://github.com/ATeerioja",
  linkedin: "https://www.linkedin.com/in/anton-teerioja-485846229/",   // leave empty to hide

  blogPosts: [
    {
      slug:  'Sim2Real Problem',
      title: 'What I learned about Sim2Real from working on my Bachelor\'s thesis' ,
      date:  '2025-06-09',
      url:   '/blog/sim2real-problem',   // or a full URL if hosted elsewhere
    },
    {
      slug:  'Working with Claude',
      title: 'Using Claude to develop and deploy simple applications',
      date:  '2025-06-09',
      url:   '/blog/claude-dev-deploy',
    },
  ],

};

export default config;
