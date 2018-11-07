import Main from './pages/main';
import About from './pages/about';
import List from './pages/list';
import Item from './pages/item';
import Contacts from './pages/contacts';
import NotFound from './pages/notfound';
import Artists from './pages/artists';
import Artist from './pages/artist';
import Compositions from './pages/compositions';


const Routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/list',
    component: List
   },
   {
    path: '/item/:itemid',
    component: Item
   },
 {
    path: '/about',
    component: About
   },
   {
    path: '/contacts',
    component: Contacts
   },
   {
    path: '/artists',
    component: Artists
   },
   {
    path: '/artist/:artistid',
    component: Artist
   },
    {
    path: '/compositions/:artistid/:albumname',
    component: Compositions
   }, 
   {
    component: NotFound,
    exact: true
  }
];

export default Routes;
