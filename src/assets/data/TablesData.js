import image_1 from "../img/team-1.jpg";
import image_2 from "../img/team-2.jpg";
import image_3 from "../img/team-3.jpg";
import image_4 from "../img/team-4.jpg";
import image_5 from "../img/team-5.jpg";

import asana from "../img/small-logos/logo-asana.svg";
import bootstrap from "../img/small-logos/bootstrap.svg";
import github from "../img/small-logos/github.svg";
import atlassian from "../img/small-logos/logo-atlassian.svg";
import slack from "../img/small-logos/logo-slack.svg";
import devto from "../img/small-logos/devto.svg";

export const AuthorsTableData = [
    {
        image: image_1,
        name: "John Michael",
        email: "john@creative-tim.com",
        functionOne: "Manager",
        functionTwo: "Organization",
        status: "ONLINE",
        employed: "23/04/18",
        color: "#5ab25e",
    },
    {
        image: image_2,
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        functionOne: "Programator",
        functionTwo: "Developer",
        status: "OFFLINE",
        employed: "11/01/19",
        color: "#7b809a",
    },
    {
        image: image_3,
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com",
        functionOne: "Executive",
        functionTwo: "Projects",
        status: "ONLINE",
        employed: "19/09/17",
        color: "#5ab25e",
    },
    {
        image: image_4,
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        functionOne: "Programator",
        functionTwo: "Developer",
        status: "ONLINE",
        employed: "24/12/08",
        color: "#5ab25e",
    },
    {
        image: image_5,
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        functionOne: "Manager",
        functionTwo: "Executive",
        status: "OFFLINE",
        employed: "04/10/21",
        color: "#7b809a",
    },
    {
        image: image_1,
        name: "Miriam Eric",
        email: "miriam@creative-tim.com",
        functionOne: "Programator",
        functionTwo: "Developer",
        status: "OFFLINE",
        employed: "14/09/20",
        color: "#7b809a",
    },
];

export const ProjectsTableData = [
    {
        icon: asana,
        name: "Asana",
        budget: "$2,500",
        status: "working",
        completion: "60%",
        color: "#247dea",
    },
    {
        icon: github,
        name: "GitHub",
        budget: "$5,000",
        status: "done",
        completion: "100%",
        color: "#5ab25e",
    },
    {
        icon: atlassian,
        name: "Atlassian",
        budget: "$3,400",
        status: "canceled",
        completion: "30%",
        color: "#f00",
    },
    {
        icon: bootstrap,
        name: "Bootstrap",
        budget: "$14,000",
        status: "working",
        completion: "80%",
        color: "#247dea",
    },
    {
        icon: slack,
        name: "Slack",
        budget: "$1,000",
        status: "canceled",
        completion: "0%",
        color: "transparent",
    },
    {
        icon: devto,
        name: "Devto",
        budget: "$2,300",
        status: "done",
        completion: "100%",
        color: "#5ab25e",
    },
];