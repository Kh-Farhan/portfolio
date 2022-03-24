import busx from '../src/assets/images/busx.jpeg'
import feednest from '../src/assets/images/feednest.jpg'

const logotext = "KF";
const meta = {
    title: "Khawaja Farhan Ahmed",
    description: "I’m Farhan a Web and Mobile Application Developer, currently working in Islamabad",
};

const introdata = {
    title: "I’m Khawaja Farhan",
    animated: {
        first: "I love Coding",
        second:  "I develop Mobile Apps",
        third:"I code cool Websites",
    },
    description: "I’m Farhan a Web and Mobile Application Developer,\ncurrently working in Islamabad",
    your_img_url: "https://drive.google.com/file/d/1oBDbch3dmKIWegFlswbwi_GCDgm2OmPY/view?usp=sharing",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "I have done Bachelor’s in computer Science from Comsats University Islamabad. I have knowledge of Object Oriented Programming, Programming Fundamentals, Data Structure and Algorithms, Introduction to Database, Operating Systems and advanced knowledge of Web Development using MERN Stack (1 year) and Mobile Applications development using react native (2 year).",
};
const worktimeline = [{
        jobtitle: "Freelancer",
        where: "Fiverr",
        date: "2019-2022",
    },
    {
        jobtitle: "React Native Developer",
        where: "BreakInt Pvt Ltd.",
        date: "2022",
    },
    
];

const skills = [{
        name: "React Native",
        value: 90,
    },
    {
        name: "React Js",
        value: 85,
    },
    {
        name: "Redux",
        value: 80,
    },
    {
        name: "Javascript",
        value: 90,
    },
    {
        name: "HTML5",
        value: 99,
    },
    {
        name: "CSS3",
        value: 80,
    },
    {
        name: "Node js",
        value: 80,
    },
    {
        name: "MongoDb",
        value: 80,
    },

    
];


const dataportfolio = [{
        img: `${busx}`,
        desctiption: "A Fully Automated Bus Management System with features like Fleet Tracking And RFID Scanning ",
        link: "#",
    },
    {
        img: `${feednest}`,
        desctiption: "A Product Reviewing Application.",
        link: "#",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "khawajafarhan10@gmail.com",
    YOUR_FONE: "+92-340-0942211",
    description: "Islamabad, Pakistan",
    YOUR_SERVICE_ID: "service_r07s33j",
    YOUR_TEMPLATE_ID: "template_04rw2bs",
    YOUR_USER_ID: "WQHSgW5JtUEw7WZyu",
};

const socialprofils = {
    github: "https://github.com/Kh-Farhan",
    facebook: "https://www.facebook.com/khawaja.farhan.94/",
    linkedin: "https://www.linkedin.com/in/khawaja-farhan-b902b9217/",
    twitter: "https://twitter.com/i_am_KF",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};