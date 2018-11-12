import List from "./components/List";
import NotFound from "./components/notfound";


const Routes = [
  {
    path: "/list/:filter",
    exact: true,
    component: List,
    //title:"All"
  },
  {
    path: "/list/:filter",
    component: List,
  //title:"Done"   
  },
  {
    path: "/list/:filter",
    component: List,
  //title:"Un Done"
  },
  {
    component: NotFound,
    exact: true
  }
];

export default Routes;
