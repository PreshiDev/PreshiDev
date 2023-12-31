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
                title: 'JMM Technologies',
                role: 'Frontend Developer',
                url: 'https://jmm.ltd/',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '02/2023 - Present',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 2,
                title: 'HauzaTech',
                role: 'Internee',
                url: 'no website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2023 - Present',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 3,
                title: 'Encoder Bytes',
                role: 'PHP Developer',
                url: 'https://www.encoderbytes.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2020 - 02/2021',
                location: 'Peshawar, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
