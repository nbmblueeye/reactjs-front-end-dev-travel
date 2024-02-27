import { recommended1, recommended2, recommended3, recommended4, sondoong, nhatrang} from '../../components/homes/images';
import {special1, special2, special3} from '../../components/homes/images';
import { Ellipse1, Ellipse2, Ellipse3, Ellipse4 } from '../../components/homes/images';

const datas = [
    {
        category:"populor",
        title:"Halong Bay",
        text:"Vietnam",
        image: recommended1,
        rating: 4.5
    },
    {
        category:"populor",
        title:"Halong Bay",
        text:"Vietnam",
        image: recommended2,
        rating: 4.5
    },
    {
        category:"populor",
        title:"Halong Bay",
        text:"Vietnam",
        image: recommended3,
        rating: 4.5
    },
    {
        category:"populor",
        title:"Halong Bay",
        text:"Vietnam",
        image: recommended4,
        rating: 5
    },
    {
        category:"adventure",
        title:"Son Doong Cave",
        text:"Vietnam",
        image: sondoong,
        rating: 5
    },
    {
        category:"adventure",
        title:"Son Doong Cave",
        text:"Vietnam",
        image: sondoong,
        rating: 5
    },
    {
        category:"adventure",
        title:"Son Doong Cave",
        text:"Vietnam",
        image: sondoong,
        rating: 5
    },
    {
        category:"adventure",
        title:"Son Doong Cave",
        text:"Vietnam",
        image: sondoong,
        rating: 5
    },
    {
        category:"beach",
        title:"Nhatrang Beach",
        text:"Vietnam",
        image: nhatrang,
        rating: 5
    },
    {
        category:"beach",
        title:"Nhatrang Beach",
        text:"Vietnam",
        image: nhatrang,
        rating: 5
    },
    {
        category:"beach",
        title:"Nhatrang Beach",
        text:"Vietnam",
        image: nhatrang,
        rating: 5
    },
    {
        category:"beach",
        title:"Nhatrang Beach",
        text:"Vietnam",
        image: nhatrang,
        rating: 5
    } 
];

let tipDatas = [
    {
        type:"teams",
        image: special1,
        date: "14 FEB 2024",
        category: "relax",
        service: "3 Days, 3 Nights",
        title:"Loga Sea",
        price:"700$",
        unit:"person"
    },
    {
        type:"teams",
        image: special2,
        date: "14 FEB 2024",
        category: "adventure",
        service: "Days, 3 Nights",
        title:"Loga Sea",
        price:"700$",
        unit:"person"
    },
    {
        type:"teams",
        image: special3,
        date: "14 FEB 2024",
        category: "adventure",
        service: "3 Days, 3 Nights",
        title:"Loga Sea",
        price:"700$",
        unit:"person"
    },
    {
        type:"couple",
        image: recommended1,
        date: "14 FEB 2024",
        category: "relax",
        service: "2 Days, 2 Nights",
        title:"Halong Bay",
        price:"800$",
        unit:"person"
    },
    {
        type:"couple",
        image: recommended2,
        date: "14 FEB 2024",
        category: "adventure",
        service: "1 Days, 2 Nights",
        title:"Halong Bay",
        price:"800$",
        unit:"person",
    },
    {
        type:"couple",
        image: recommended3,
        date: "14 FEB 2024",
        category: "adventure",
        service: "2 Days, 1 Nights",
        title:"Son Doong Cave",
        price:"800$",
        unit:"person"
    },
    {
        type:"family",
        image: recommended4,
        date: "14 FEB 2024",
        category: "relax",
        service: "2 Days, 2 Nights",
        title:"Halong Bay",
        price:"900$",
        unit:"person"
    },
    {
        type:"family",
        image: sondoong,
        date: "28 FEB 2024",
        category: "adventure",
        service: "1 Days, 2 Nights",
        title:"Son Doong Cave",
        price:"900$",
        unit:"person",
    },
    {
        type:"family",
        image: nhatrang,
        date: "22 FEB 2024",
        category: "adventure",
        service: "2 Days, 1 Nights",
        title:"Nhatrang Beach",
        price:"900$",
        unit:"person"
    }
];

let customerDatas = [
    {
        comment: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
        name:" -Vand D",
        field: "Happy Treloo",
        image:  Ellipse1,
        rating: 4.5
    },
    {
        comment: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
        name:" -Tru Vio",
        field: "Happy Treloo",
        image:  Ellipse2,
        rating: 5
    },
    {
        comment: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
        name:" -Vand D",
        field: "Happy Treloo",
        image:  Ellipse3,
        rating: 4.5
    },
    {
        comment: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
        name:"-Tru Vio",
        field: "Happy Treloo",
        image:  Ellipse4,
        rating: 4
    }
];

export {datas, tipDatas, customerDatas}