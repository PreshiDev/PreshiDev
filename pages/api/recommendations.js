// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Ademola',
    image: "images/Black-Boy-Retro-Charming-Avatar-47769583-1.png",
    designation: 'Bitcoin | Blockchain',
    view: "Hey everyone! I wanted to take a moment to recommend Precious Gift for any React.js/Web application opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of web app's concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Precious is a reliable and dedicated. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/shahmir-minhas/"
  },
  {
    id: 1,
    name: 'Endurance Owner Of Jonics Confectioneries',
    image: "images/ed.jpg",
    designation: 'Caterer | Cakes | Pastries | Small chops | Cocktails',
    view: "I highly recommend Precious for any software development project. His vibrant presence in the tech world is matched only by his extensive knowledge and diligent work ethic. Precious consistently seeks improvement, actively seeking feedback to refine his work. His intelligence shines through as he tackles challenges head-on, ensuring timely and effective solutions.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/"
  },
  {
    id: 2,
    name: 'Ola',
    image: "images/ola-simulator.jpeg",
    designation: 'MERN | JavaScript | Tailwind | Node.js | React.js',
    view: "I wholeheartedly recommend Precious as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Django further enhances his capabilities, allowing him to build robust and scalable applications. Precious's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 3,
    name: 'Tony owner of Mac-IT services',
    image: "images/tony.jpeg",
    designation: 'Computer hardware expert and operator',
    view: "I highly recommend Precious Gift for web frontend development positions. His expertise in ReactJS and Django, combined with his professionalism and dedication, make him an invaluable asset for any job.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
