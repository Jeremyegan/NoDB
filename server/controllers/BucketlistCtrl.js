let id = 1
let travels = [
    {
        id: id++,
        imageUrl: 'https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Napali_0_1.jpg?itok=S0scQXWt',
        where: 'Napali Coast, Kauai Hawaii'
    },
    {
        id: id++,
        imageUrl: 'https://i.pinimg.com/originals/b5/c9/c6/b5c9c62bddafc6df91e1dd9e0ca9532b.jpg',
        where: 'Mosquito Bay, Vieques Puerto Rico'
    }
]

let exp = [
    {
        id: id++,
        imageUrl: 'https://www.skydivelongisland.com/images/article/Skydive-Tracking.jpg',
        what: 'Skydiving'
    },
    {
        id: id++,
        imageUrl: 'https://www.sportdiver.com/sites/sportdiver.com/files/styles/1000_1x_/public/images/2018/08/undersea-scuba-diver.jpg?itok=a-gyMFqG&fc=50,50',
        what: 'Scuba Diving'
    }
]


module.exports= {
    gettravel: (req, res) => {
        res.send(travels)
    },

    getexperience: (req, res) => {
        res.send(exp)
    },


    createtravel: (req, res) => {
        let { imageUrl, where } = req.body;

        let place = {
            id: id,
            imageUrl,
            where
        }

     travels.push(place);
        id++;
        res.status(200).send(travels)
    },


    createexperience: (req, res) => {
        let { imageUrl, what } = req.body

        let experiences = {
            id: id++,
            imageUrl,
            what
        }

        exp.push(experiences)
        res.send(exp)
    },


    updatetravel: (req, res) => {
        console.log('update travel has been called')
        let { imageUrl, where } = req.body

        let traveling = {
            id: req.params.id,
            imageUrl,
            where
        }
        
        let index = travels.findIndex(travel => Number(travel.id) === Number(req.params.id))
        
        travels.splice(index, 1, traveling)
        res.send(travels)
    },


    updateexperience: (req, res) => {
        console.log('update experience has been called')
        let { imageUrl, what } = req.body

        let experiences = {
            id: req.params.id,
            imageUrl,
            what
        }
        
        let index = exp.findIndex(experience => Number(experience.id) === Number(req.params.id))
        
        exp.splice(index, 1, experiences)
        res.send(exp)
    },


    deletetravel: (req, res) => {
        console.log('delete travel has been called')
        let { id } = req.params

        let index = travels.findIndex(travel => Number(travel.id) === Number(id))
        
        travels.splice(index, 1)
        res.send(travels)
    },


    deleteexperience: (req, res) => {
        console.log('delete experience has been called')
        let { id } = req.params

        let index = exp.findIndex(experience => Number(experience.id) === Number(id))
        
        exp.splice(index, 1)
        res.send(exp)
    }


}