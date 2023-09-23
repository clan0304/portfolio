import Cakeapp from '../assets/Cakeapp.png';
import DanceStudio from '../assets/dancestudio.png';

const Url = () => {
  const url = [
    {
      id: 1,
      name: 'Cake Shop(E-Commerce)',
      description:
        'JavaScript, Node.js, Mongo DB, Express, Material-ui, React-redux, Stripe, bcrypt',
      image: Cakeapp,
      github: 'https://github.com/clan0304/cakeshopecommerce',
      website: 'https://zingy-profiterole-67a527.netlify.app/',
    },
    {
      id: 2,
      name: 'Dance Academy',
      description:
        'JavaScript, Node.js, Mongo DB, Express, Material-ui, React-redux, Stripe',
      image: DanceStudio,
      github: 'https://github.com/clan0304/dancestudiowebsite',
      website: 'https://clinquant-tapioca-b06ac0.netlify.app/',
    },
  ];
  return url;
};

export default Url;
