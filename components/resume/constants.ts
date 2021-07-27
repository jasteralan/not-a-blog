import { FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const contact = {
    zhHant : [
        { icon: FiMapPin, text: '台灣，台北' },
        { icon: FiPhone, text: '0921-240064' },
        { icon: FiMail, text: 'jaster1019@gmail.com' },
        { icon: FiLinkedin, text: '/jaster-chang-24250590' }
    ],
    en : [
        { icon: FiMapPin, text: 'Taiwan, Taipei' },
        { icon: FiPhone, text: '(+886) 921-240064' },
        { icon: FiMail, text: 'jaster1019@gmail.com' },
        { icon: FiLinkedin, text: '/jaster-chang-24250590' }
    ],
}

const aboutSkills = {
    frontend: [
        "HTML5", "CSS3", "JavaScript (ES6)", 
        "React", "TypeScript", "Next.js", 
        "CSS Preprocessor (SASS)", "Bundling Tool (Webpack)",
    ], 
    backend: ["Node.js", "LNMP", "Laravel"],
    others: ["Docker", "Continuous Delivery", "Jenkins", "Github Action", "AWS Services"]
};
    
const about = {
    zhHant: {
        brief: `
            嗨，我是 Jaster，3年前端、4年的全端經驗。
            作為前端工程師，致力於開發直覺好用且手機友善的應用，優化介面與載入速度，並持續優化部署流程。
            對於敏捷開發的運作熟悉；在前 3 間新創團隊中，對打造與規劃最小可行產品有所經驗。
            對於開發有興趣與熱情，總是願意嘗試新的技術與領域。
        `,
        skills: aboutSkills,
        education: {
            degree: "資訊工程學系 學士畢",
            college: "國立成功大學",
            duration: "2006 – 2010"
        }
    },
    en: {
        brief: "7 years experience (3 years as front-end, 4 years as full-stack) engineer with extensive experience in development on JavaScript (mostly React), mobile UX optimization, and single page application. Always have willing to learn new things, exploring new technologies.",
        skills: aboutSkills,
        education: {
            degree: "Bachelor of Computer Science and Information Engineering",
            college: "National Cheng Kung University",
            location: "Taiwan",
            duration: "2006 – 2010"
        }
    }
};

const jobs = {
    zhHant: [
        {
            jobTitle: "Jr. Full-stack Engineer",
            company: "銀河互動網路股份有限公司",
            duration: "2012 – 2013",
            tasks: [
                "與 UI 設計師合作，重建試用品發送平台 – iTry。",
                "維護更新 CMS 後台與 API 設計開發。"
            ],
            skills: ["Jquery", "Bootstrap", "LAMP"]
        },
        {
            jobTitle: "Full-stack Engineer",
            company: "赫椎股份有限公司",
            duration: "2014 – 2015",
            tasks: [
                "參與敏捷開發方式團隊，開發硬體端與軟體端的媒合平台 – HWTrek。",
                "以 React 開發前端網站，Laravel 建置後端 API。"
            ],
            skills: [
                "React", "Redux", "Grunt", "LAMP", "Laravel", "Jenkins", "AWS"
            ]
        },
        {
            jobTitle: "Full-stack Engineer",
            company: "優愛德股份有限公司",
            duration: "2015 – 2017",
            tasks: [
                "內部營運系統的前後端開發，以 TDD 建置後端 API。",
                "導入敏捷開發與看板方法，開發廣告分析平台 MVP。"
            ],
            skills: [
                "Vue", "Webpack", "LNMP", "Laravel"
            ]
        },
        {
            jobTitle: "Front-end Engineer",
            company: "捷思遊戲科技有限公司",
            duration: "2018 – 2020",
            tasks: [
                "參與敏捷開發團隊，以 Preact 開發 HTML5 遊戲 Wiget，優化整理運作效能。",
                "開發維護商業後台，以 React Hook 重構老舊程式碼，升級建構工具 Webpack 並以容器化與自動化方式部署。",
                "建置超過 20 個宣傳活動。包含互動性高、手機優化的 React 活動網站，營運後台與 API 設計，DB Schema 規劃。增加 2 成的活躍人數成長。",
            ],
            skills: [
                "React", "Preact", "Redux", "SASS",
                "XState (State Management)", "React-Spring (Animation)", 
                "Webpack", "Docker", "Jenkins"
            ]
        },
        {
            jobTitle: "Front-end Engineer",
            company: "奇異果新能源股份有限公司",
            duration: "2021 – ",
            tasks: [
                "以 Next.js 開發商業網站，利用 Github Action 和 AWS Serverless 做持續部署", 
                "以 Next.js 開發服務後台，利用 Github Action 和 AWS  ECS/ECR  做容器化持續部署"
            ],
            skills: [
                "TypeScript", "React", "Next.js", "Chakra UI", "SASS", "Framer-Motion (Animation)", 
                "Webpack", "Docker", "AWS (ECS, Lamda)", "Continuous Delivery (Github Action)"
            ]
        },
    ].reverse(), 
    en: [
        {
            consise: true,
            jobTitle: "Jr. Full-stack Engineer",
            company: "iwant",
            location: "Taiwan",
            duration: "2012 – 2013",
            tasks: [
                "Cooperated with designer to recreate a website iTry – site for word-of-mouth marketing.",
                "Revamped CMS Platform and API to increase the efficiency of daily work."
            ],
            skills: ["Jquery", "Bootstrap", "LAMP"]
        },
        {
            consise: true,
            jobTitle: "Full-stack Engineer",
            company: "HWTrek",
            location: "Taiwan",
            duration: "2014 – 2015",
            tasks: [
                "Engaged in a Scrum team to develop HWTrek – a collaborative platform for hardware innovation, helping start-ups to boost from idea to implementation.",
            ],
            skills: [
                "React", "Redux", "Grunt", "LAMP", "Jenkins", "AWS"
            ]
        },
        {
            jobTitle: "Full-stack Engineer",
            company: "UrAD",
            location: "Taiwan",
            duration: "2015 – 2017",
            tasks: [
                "Developed a management system for work assignment and finance report generation, decreasing redundant costs on digital advertising.",
                "Bring in Scrum and Kanban to improve teamwork."
            ],
            skills: [
                "Vue", "Webpack", "LNMP", "Laravel"
            ]
        },
        {
            jobTitle: "Front-end Engineer",
            company: "Genesis Gaming",
            location: "Taiwan",
            duration: "2018 – 2020",
            tasks: [
                "Gained active users by 20% by implementing 20 event SPA.",
                "Participated in Scrum teams across Taipei, Vegas, and Vancouver, implementing widgets used in HTML5 games.",
                "Optimized performance by taking mobile-first design, using React Hook to reduce rerendering, configuring Webpack to do lazy-loading and chunk JS files.",
                "Refined continuous delivery flow with Docker and Jenkins."
            ],
            skills: [
                "React", "Preact", "Redux", "SASS",
                "XState (State Management)", "React-Spring (Animation)", 
                "Webpack", "Docker", "Jenkins"
            ]
        },
        {
            jobTitle: "Front-end Engineer",
            company: "KiWi New Energy",
            location: "Taiwan",
            duration: "2021 – ",
            tasks: [
                "Developed landing page with Next.js, using Github Action and AWS serverless services to deploy the SPA site", 
                "Build up Continuouse Delivery with Github Action and AWS ECS/ECR to containerize our Back-Office platform"
            ],
            skills: [
                "TypeScript", "React", "Next.js", "Chakra UI", "SASS", "Framer-Motion (Animation)", 
                "Webpack", "Docker", "AWS (ECS, Lamda)", "Continuous Delivery (Github Action)"
            ]
        },
    ].reverse()
}

export default {
    contact,
    about,
    jobs,
};