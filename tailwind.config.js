module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      body: "Work Sans",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: "#202024",
        secondary: "#1C1D24",
        tertiary: "#131419",
        form: '#bab8b3',
        accent: {
          DEFAULT: "#F1a70f",
          hover: "#B77c02",
        },
        paragraph: "#878e99",
        whats: '#25D366',
        linkedin: '#0077B5',
        github: '#333',
        email: '#D14836',
      },
       backgroundImage: {
         hero: 'linear-gradient(to right, #434343 0%, black 100%)',
      },
    },
  },
  plugins: [],
};
