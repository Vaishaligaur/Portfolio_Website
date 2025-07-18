particlesJS('particles-js', {
  particles: {
  number: { value: 70 }, // Changed from 80
  color: { value: "#64ffda" }, // Your accent color
  line_linked: { 
    color: "#ccd6f6", // Custom color
    width: 1.2 // Slightly thicker
  }
},
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    }
  },
  retina_detect: true
});