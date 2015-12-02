import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import { domain, fromNow } from './filters'
import App from './components/App.vue'
import NewsView from './components/NewsView.vue'
import ItemView from './components/ItemView.vue'
import UserView from './components/UserView.vue'
import FeedView from './components/FeedView.vue'


Vue.use(Router);

Vue.use(VueResource);


// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

// routing
var router = new Router()

router.map({
  '/news/:page': {
    component: NewsView
  },
  '/user/:id': {
    component: UserView
  },
  '/item/:id': {
    component: ItemView
  },
  '/feed/:type': {
    component: FeedView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/news/1'
})

router.start(App, '#app')
