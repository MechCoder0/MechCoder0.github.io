import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  getRoute('', import('../views/Home.vue')),
  getRoute('home', import('../views/Home.vue')),
  getRoute('nedStory', import('../views/NedStory.vue')),
  getRoute('coffee', import('../views/Coffee.vue')),
  getRoute('food', import('../views/Food.vue')),
  getRoute('coffeev2', import('../views/Coffee2.vue')),
  getRoute('zombie', import('../views/Zombie.vue'))
]

function getRoute(name, c){
  return {
    path: "/" + name,
    name: name,
    component: function(){return c}
  }
}

const router = new VueRouter({routes})
export default router
