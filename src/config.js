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
  name: "Your Name",
  title: "CS Student & Developer",
  university: "University of Turku",
  location: "Turku, Finland",

  // --- GitHub ---
  githubUsername: "your-github-username",
  // Repos to show first (by name). Leave [] to sort by recently updated.
  pinnedRepos: [],
  // Max repos to display
  maxRepos: 6,

  // --- About ---
  bio: [
    "I'm a computer science student passionate about building things that matter.",
    "Currently exploring full-stack development, distributed systems, and anything that runs in a terminal.",
  ],
  skills: ["Python", "JavaScript", "React", "C", "Linux", "Git", "Docker"],

  // --- Contact ---
  email: "you@example.com",
  github: "https://github.com/your-github-username",
  linkedin: "", // leave empty to hide the link
};

export default config;
