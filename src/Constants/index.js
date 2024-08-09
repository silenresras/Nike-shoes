import {bigShoe1, bigShoe2, bigShoe3, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, shoe4, shoe5, shoe6, shoe7} from '../assets1/images';
import { truckFast, shieldTick, support, facebook, twitter, instagram } from '../assets1/icons';
import { customer1, customer2 } from '../assets1/images';
export const NavLinks = [
    {href: "#Home", label: "Home"},
    {href: "#About-us", label: "About Us"},
    {href: "#Products", label: "Products"},
    {href: "#", label: "Contact Us"},
    {href: "#", label: "Cart"}
];     

export const statistics = [
    {value : "1k+", label: "Brands"},
    {value : "500k+", label: "Shops"},
    {value : "250k+", label: "Customers"}

]

export const shoes = [
    {bigshoe : bigShoe1, thumbnail: thumbnailShoe1},
    {bigshoe : bigShoe2, thumbnail: thumbnailShoe2},
    {bigshoe : bigShoe3, thumbnail: thumbnailShoe3}
]

export const products = [
    {picture : shoe4, name : "Nike Air Jordan-01", price : "$200.20"},
    {picture : shoe5, name : "Nike Air Jordan-10", price : "$210.20"},
    {picture : shoe6, name : "Nike Air Jordan-20", price : "$220.20"},
    {picture : shoe7, name : "Nike Air Jordan-30", price : "$230.20"},
]

export const services = [
    {
        imgUrl : truckFast,
        label : "Free shipping",
        subtext : "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgUrl : shieldTick,
        label : "Secure payment",
        subtext : "Experience worry-free transactions with our secure payment service."
    },
    {
        imgUrl : support,
        label : "love to help",
        subtext : "Our dedicated team is here to assist you every step of the way."
    }
]

export const reviews = [
    {picture : customer1, name : "Morich Brown", feedback : "The attention to detail and the quality of the product exceeded my exceptations. Highly recommended!!", rating: "(4.5)"},
    {picture : customer2, name : "Lota Mongeskar", feedback : "The product not only met but exceeded my exceptations. I'll definetely be a returning customer.", rating: "(4.5)"}
]

export const socialMedia = [
    {src : facebook, alt : "Facebook"},
    {src : twitter, alt : "Twitter"},
    {src : instagram, alt : "Instagram"}
]
export const footerLinks = [
    {
        title : "Products",
        links : [
            {name : "Air Force 1", link : "/"},
            {name : "Air Max 1", link : "/"},
            {name : "Air Jordan 1", link : "/"},
            {name : "Air Force 2", link : "/"}
        ]
    },
    {
        title : "Help?",
        links : [
            {name : "About us", link : "/"},
            {name : "FAQs", link : "/"},
            {name : "How it works", link : "/"},
            {name : "Privacy Policy", link : "/"},
            {name : "Payment policy", link : "/"}
        ]
    },
    {
        title : "Get in Touch",
        links : [
            {name : "customer@nike.com", link : "/"},
            {name : "+254791191864", link : "/"},
            {name : "+254759586287", link : "/"}
        ]
    }
]
