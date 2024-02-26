import icon1 from "../img/weekend.svg";
import icon2 from "../img/user.svg";
import xd from "../img/small-logos/logo-xd.svg";
import atlantis from "../img/small-logos/logo-atlassian.svg";
import slack from "../img/small-logos/logo-slack.svg";
import spotify from "../img/small-logos/logo-spotify.svg";
import jira from "../img/small-logos/logo-jira.svg";
import invision from "../img/small-logos/logo-invision.svg";
import team_1 from "../img/team-1.jpg";
import team_2 from "../img/team-2.jpg";
import team_3 from "../img/team-3.jpg";
import team_4 from "../img/team-4.jpg";
import team_5 from "../img/team-5.jpg";

export const salesData = [
    {
        icon: icon1,
        title: "Today's Money",
        number: "53k",
        percentage: "+55%",
        theDate: "than last week"
    },
    {
        icon: icon2,
        title: "Today's Users",
        number: "2,300",
        percentage: "+3%",
        theDate: "than last month"
    },
    {
        icon: icon2,
        title: "New Clients",
        number: "3,462",
        percentage: "-2%",
        theDate: "than last week"
    },
    {
        icon: icon1,
        title: "Sales",
        number: "103,430",
        percentage: "+5%",
        theDate: "than last yesterday"
    },
];

export const chartsData = [
    {
        title: "Website Views",
        text: "Last Campaign Performance",
        date: "campaign sent 2 days ago",
        type: 'line',
        series: [
            {
                name: "hello",
                data: [50, 20, 10, 22, 50, 10, 40]
            }
        ],
        yaxis: {
            min: 0,
            max: 60,
            stepSize: 20
        },
    },
    {
        title: "Daily Sales",
        text: "(+15%) increase in today sales.",
        date: "updated 4 min ago",
        type: "line",
        graphCategories: ['Apr', 'Jun', 'Aug', 'Oct', 'Dec'],
        series: [
            {
                name: "hello 2",
                data: [50, 40, 300, 320, 500, 350, 200, 230, 500]
            }
        ],
        yaxis: {
            min: 0,
            max: 500,
            stepSize: 500
        }
    },
    {
        title: "Completed Tasks",
        text: "Last Campaign Performance",
        date: "just updated",
        type: "line",
        graphCategories: ['Apr', 'Jun', 'Aug', 'Oct', 'Dec'],
        series: [
            {
                name: "hello 3",
                data: [50, 40, 300, 220, 500, 250, 400, 230, 500]
            }
        ],
        yaxis: {
            min: 0,
            max: 500,
            stepSize: 500
        }
    },
];

export const projectsData = [
    {
        companyName: "Material XD Version",
        companyImage: xd,
        budget: "$14,000",
        completion: "60%",
        backgroundColor: "#247dea",
        members: [team_1, team_2, team_3, team_4, team_5],
    },
    {
        companyName: "Add Progress Track",
        companyImage: atlantis,
        budget: "$3,000",
        completion: "10%",
        backgroundColor: "#247dea",
        members: [team_1, team_2, team_3, team_4],
    },
    {
        companyName: "Fix Platform Errors",
        companyImage: slack,
        budget: "Not Set",
        completion: "100%",
        backgroundColor: "#5ab25e",
        members: [team_1, team_2, team_3],
    },
    {
        companyName: "Launch our Mobile App",
        companyImage: spotify,
        budget: "$20,500",
        completion: "100%",
        backgroundColor: "#5ab25e",
        members: [team_1, team_2],
    },
    {
        companyName: "Add the New Pricing Page",
        companyImage: jira,
        budget: "$500",
        completion: "25%",
        backgroundColor: "#247dea",
        members: [team_1],
    },
    {
        companyName: "Redesign New Online Shop",
        companyImage: invision,
        budget: "$2,000",
        completion: "40%",
        backgroundColor: "#247dea",
        members: [team_1, team_2, team_3, team_4, team_5],
    },
];

export const ordersData = [
    {
        icon: "fa-solid fa-bell",
        head: "$2400, Design changes",
        text: "22 DEC 7:20 PM"
    },
    {
        icon: "fa-solid fa-code",
        head: "New order #1832412",
        text: "21 DEC 11 PM"
    },
    {
        icon: "fa-solid fa-cart-shopping",
        head: "Server payments for April",
        text: "21 DEC 9:34 PM"
    },
    {
        icon: "fa-solid fa-credit-card",
        head: "New card added for order #4395133",
        text: "20 DEC 2:20 AM"
    },
    {
        icon: "fa-solid fa-key",
        head: "Unlock packages for development",
        text: "18 DEC 4:54 AM"
    },
    {
        icon: "fa-solid fa-money-bills",
        head: "New order #9583120",
        text: "17 DEC"
    },
];