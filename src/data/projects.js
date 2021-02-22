import randomQuoteMachine from "../images/randomQuoteMachine.png";
import markdownPreview from "../images/markdownPreview.png";
import drumMachine from "../images/drumMachine.png";

export const projects = [
  {
    image: randomQuoteMachine,
    title: "Random Quote Machine",
    subtitle: "From FreeCodeCamp",
    about:
      "This is a simple random quote generator. React App with fetch API, Reactstrap, and CSS.",
    links: ["https://reactstrap.github.io/"],
    code: "https://codesandbox.io/s/random-quote-machine-with-reacstrap-gihd1",
    live: "https://csb-gihd1-p4n44htfl-hugoleonardodev.vercel.app/"
  },
  {
    image: markdownPreview,
    title: "Markdown Preview",
    subtitle: "From FreeCodeCamp",
    about:
      "A markdown preview for README.md. React App with markdown library. DOMPurify to sanitize, Reactstrap, and CSS.",
    links: [
      "https://www.npmjs.com/package/marked",
      "https://www.npmjs.com/package/dompurify",
      "https://reactstrap.github.io/"
    ],
    code: "https://codesandbox.io/s/markdown-preview-rgpz9",
    live: "https://csb-rgpz9-pjjsljkn6-hugoleonardodev.vercel.app/"
  },
  {
    image: drumMachine,
    title: "Drum Machine",
    subtitle: "From FreeCodeCamp",
    about:
      "Simple Drum Machine with custom sounds. React App with audio HTML tags, Reactstrap, and CSS.",
    links: ["https://reactstrap.github.io/"],
    code: "https://codesandbox.io/s/drum-machine-63wx0",
    live: "https://csb-63wx0-k4hgtsti9-hugoleonardodev.vercel.app/"
  }
];

export const navigation = [
  {
    title: "Home"
  }
];
