import search from './../../assets/img/search.svg';
import offers from './../../assets/img/offers.svg';
import signin from './../../assets/img/signin.svg';
import cart from './../../assets/img/cart.svg';

const optionsConfig = () => {
  return [
    {
      id: 1,
      title: 'Search',
      icon: search,
      redirectTo: '/search'
    },
    {
      id: 2,
      title: 'Offers',
      icon: offers,
      redirectTo: '/offers'
    },
    {
      id: 3,
      title: 'Sign In',
      icon: signin,
      redirectTo: ''
    },
    {
      id: 4,
      title: 'Cart',
      icon: cart,
      redirectTo: '/cart'
    },
  ];
};

export default optionsConfig;
