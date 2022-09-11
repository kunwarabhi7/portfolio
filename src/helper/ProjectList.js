import Shop from '../assests/shop.jpg'
import quote from '../assests/quote.jpg';
import image from '../assests/imagesearch.jpg';
import video from '../assests/videosearch.jpg';
import portfolio from '../assests/portfolio.jpg';
import foodieapp from '../assests/foodie.jpg'
import blog from '../assests/blog.jpg'

import '../styles/ProjectDisplay.css'



export const ProjectList = [
    {
        name: 'ECommerce Website',
        image: Shop,
        skill: 'React.js , Google FIREBASE , CSS ',
        source: 'https://github.com/kunwarabhi7/shop',
        demo: 'https://shop-devabhi7.vercel.app/'

    },
    {
        name: 'Random Quote Generator',
        image: quote,
        skill: 'HTML,CSS,JavaScript',
        source: 'https://github.com/kunwarabhi7/quoteGenerator',
        demo: 'https://abhiquotegenerator.vercel.app/'
    },
    {
        name: 'Video Search App',
        image: video,
        skill: 'React.js,YouTubeAPI',
        source: 'https://github.com/kunwarabhi7/youtube',
        demo: 'https://youtube-abhishek.vercel.app/'


    },
    {
        name: 'Image Search App',
        image: image,
        skill: 'React.js,unSplashAPI',
        source: 'https://github.com/kunwarabhi7/imagesearch',
        demo: 'https://pics-abhishek.vercel.app/'
    },
    {
        name: 'Personal Portfolio',
        image: portfolio,
        skill: 'React.js, MaterialUI , Vertical TimeLine',
        source: 'https://github.com/kunwarabhi7/portfolio',
        demo: " https://meabhishekportfolio.vercel.app/"
    },
    {
        name: 'Restaurant App',
        image: foodieapp,
        skill: 'React.js, FIREBASE,CSS ',
        source: 'https://github.com/kunwarabhi7/resturentapp/',
        demo: " https://myfoodieapp.vercel.app/"
    },
    {
        name: 'Blog App',
        image: blog,
        skill: 'React.js, FIREBASE,CSS ',
        source: 'https://github.com/kunwarabhi7/blog',
        demo: " https://abhi7blog.vercel.app/"
    },

]
