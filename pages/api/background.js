const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'The Polytechnic Ibadan',
                degree: 'Diploma, Computer Studies',
                detail: "Diploma in Computer Studies from The Polytechnic Ibadan.",
                year: '2019-2022'
            },
            {
                id: 1,
                title: 'Osma int College',
                degree: 'Senior Secondary School Certificate {WAEC}',
                detail: "Completed my senior secondary school from Osma Int College.",
                year: '2014-2016'
            },
            {
                id: 2,
                title: 'Divine Favour College',
                degree: 'Junior Secondary School Certificate',
                detail: "Completed my junior secondary schoool from Divine Favour college",
                year: '2012-2014'
            },
            {
                id: 3,
                title: 'Udemy',
                degree: 'certified | SEO expert | Javascript | Mobile App Dev... ',
                detail: "Completed Major IT skills from Udemy",
                year: '2020-present'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Astratech',
                role: 'Frontend Developer',
                url: 'https://astratch.com.ng/',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '06/2022 - 11/2022',
                location: 'Ibadan, Nigeria'
            },
            {
                id: 2,
                title: 'Fiverr',
                role: 'Freelancer',
                url: 'no website',
                desc: 'As a freelancer, From 2022 to 2023, I thrived as a freelance developer on Fiverr, specializing in Django, ReactJS, Tailwind, and React Native. My journey epitomizes dedication and talent, showcasing a remarkable ability to deliver exceptional results and build lasting client relationships.',
                year: '12/2022 - 12/2023',
                location: 'Online'
            },
            {
                id: 3,
                title: 'Grandalat',
                role: 'ReactJs | Django | React Native Developer',
                url: 'https://www.grandalat.com.ng/',
                desc: "In a strategic move, I joined forces with Grandalat Tech, a dynamic startup agency, to elevate my career as a ReactJS, Django, and React Native developer. Since then, I've become an integral part of the team, showcasing my exceptional skills and driving innovation.",
                year: '01/2023 - present',
                location: 'Ibadan, Nigeria'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
