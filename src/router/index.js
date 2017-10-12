import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Ranking from '../components/ranking.vue'
import Book from '../components/book.vue'
import Record from '../components/record.vue'
import Personal from '../components/personal.vue'

export default {
  routes: [
    { path: '/', component: Login },
    {
      path: '/home', component: Home,
      children:[{
        path: 'ranking',
        component: Ranking
      },{
        path: 'book',
        component: Book
      },{
        path: 'record',
        component: Record
      },{
        path: 'personal',
        component: Personal
      }]
    },
    { path: '*', redirect: '/' }
  ]
}
