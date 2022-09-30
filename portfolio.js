import emoji from "react-easy-emoji";

export const greetings = {
	name: "Mohit Mishra",
	title: "Hi all, I'm Mohit",
	description:
		"I'm Mohit.❤️ You can also call me as Chessman. I'm a Machine learning Developer and a competitive programmer. Most of my time is spent staring at a computer screen. During the day, I am usually programming, working to derive insight from large datasets. My skills include Data Analysis, Data Visualization, Machine learning and Deep Learning. I have developed a strong acumen for problem solving, and I enjoy an occasional challenge.",
	resumeLink:
		"https://bit.ly/3UF6kgN",
};

export const openSource = {
	githubUserName: "mohitmishra786",
};

export const contact = {};

export const socialLinks = {
//	url: "https://1hanzla100.github.io/",
	linkedin: "https://www.linkedin.com/in/mohitmishraml/",
	github: "https://github.com/mohitmishra786",
	medium: "http://mohitmishra786687.medium.com/",
	twitter: "https://twitter.com/chessMan786",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY MACHINE LEARNING DEVELOPER WHO WANTS TO TALK WITH DATA",
	data: [
		{
			title: "Machine Learning Engineer",
			lottieAnimationFile: "/lottie/skills/machine_learning.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing end-to-end machine learning projects."
				),
				emoji(
					"⚡	Experienced in Exploratory data analysis."
				),
				emoji(
					"⚡ Experience of creating Computer Vision and Language Models."
				),
				emoji(
					"⚡ Creating some model related to smell."
				),
				emoji(
					"⚡ Also have created a small machine learning library using basic libraries."
				),
			],
			softwareSkills: [
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
			],
		},
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		
	],
};

export const SkillBars = [
	{
		Stack: "Machine Learning/ Deep Learing Modeling",
		progressPercentage: "90",
	},
	{
		Stack: "Data Analysis",
		progressPercentage: "85",
	},
	{
		Stack: "Data Visualization",
		progressPercentage: "80",
	},
	{
		Stack: "MLOps",
		progressPercentage: "50",
	},
	{
		Stack: "Cloud",
		progressPercentage: "70",
	},
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "90",
	},
];

export const educationInfo = [
	{
		schoolName: "Lovely Professional University",
		subHeader: "Bachelors of Computer Science and Engineering",
		duration: "June 2019 - Present",
		desc: "Participated in the various coding contest and published a paper.",
		grade: "Grade A",
		descBullets: [
			"I am currently pursuing minor in Machine Learning.",
			"I have also studied DBMS, OS, Computer Networks and other computer science fundamentals.",
		],
	},
];

export const experience = [
	{
		role: "Machine Learning Engineer",
		company: "Omdena",
		companylogo: "/img/icons/common/omdena.png",
		date: "Sept 2021 – Jul 2022",
		desc: "I worked as Machine Learning Engineer to design and create the AI algorithms capable of learning and making predictions. I worked here as a type and contributed myself as a enthusiastic ML Developer.",
		descBullets: [
			"Improved accuracy of the model from 82 percent to 91 percent in the career recommendation model.",
			"Formulated an AutoML pipeline to automatically search for the best neural model for Natural Language Processing tasks.",
			"Analyzed factors contributing to homelessness in Texas and proposed a solution for homelessness.",
			"Took the charge of developing an image augmentation pipeline for school image datasets.",
		],
	},
	{
		role: "Junior Machine Learning Engineer",
		company: "iNeuron.ai",
		companylogo: "/img/icons/common/ineuron.jpg",
		date: "Jul 2021 – Sep 2021",
		descBullets: [
			"Developed a solution that should be able to predict whether the mushroom is poisonous or edible.",
			"Created a web app for the visualization of drug activity using streamlit.",
		],
	},
	{
		role: "Open Source Collaborator",
		company: "KWOC",
		companylogo: "/img/icons/common/kwoc.png",
		date: "Nov 2021 - Feb 2022",
		desc: "Worked as Open Source Software Developer to create a web app for the analyis, in which I integrated computer vision AI model to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio built with react.js, next.js, typerScript, tailWind CSS and Sanity that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/mohitmishra786/My-Portfolio",
		// link: "https://bit.ly/3AINU77",
	},
	{
		name: "Tea-Quality Predictor",
		desc: "I developed a detector and classifier model which will detect the correct image and classify its quality and also with that I also developed Flask API and used it for the deployment into Microsoft Azure. I had used AWS for the deployment of the model.",
		github: "https://github.com/mohitmishra786/Tea-Leaf-Quality",
	},
	{
		name: "Homelessness in Texas",
		desc: "Get hands-on experience in technical skills with Exploratory Data Analysis. This project focuses mainly on the root causes of the increasing Homelessness in Texas. The data has been collected from Texas Homeless Network, Joint Centre for Housing Studies Harvard, Texas Government, Homelessness Information System, GitHub, and Kaggle. We were able to compare how COVID-19 has affected Texas and how the effects of COVID-19 have attributed to the other socio-economic factors of homelessness and homelessness rates.",
		github: "https://github.com/mohitmishra786/Homelessness-in-Texas",
		link: "https://bit.ly/3AINU77",
	},
	{
		name: "Career Recommendation System",
		desc: "In order to make this engine available for students, we created a web application using Flask as the backend. After filling out the form the student clicks on Recommendation to receive the top recommendation from the engine with a probability for each Major Core and with an explanation of the relevant scores fed to the engine. There any many algorithms used, which were built to predict the compatibility to a particular career given a students high school test scores.",
		github: "https://github.com/mohitmishra786/Career-Recommendation-System",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Mohit Mishra",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer.",
	author: "Mohit Mishra",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	// url: "https://developer-portfolio-1hanzla100.vercel.app",
	keywords: [
		"Mohit",
		"Mohit Mishra",
		"@chessman786",
		"mohitmishra786",
		"Portfolio",
		"Mohit Portfolio ",
		"Mohit Mishra Portfolio",
	],
}
