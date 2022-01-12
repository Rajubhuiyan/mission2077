export default function (req, res) {

    const missions = [
        {
            id: 1,
            title: 'Mission',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            img: '/images/illustrators/illustrator-1.png'
        },
        {
            id: 2,
            title: 'Vission',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            img: '/images/illustrators/illustrator-2.png'
        },
        {
            id: 3,
            title: 'Goals',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            img: '/images/illustrators/illustrator-3.png'
        },

    ]

    res.status(200).json(missions)

}