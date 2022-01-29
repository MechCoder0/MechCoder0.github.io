import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  getRoute('', import('../views/Home.vue')),
  getRoute('home', import('../views/Home.vue')),
  getRoute('computers', import('../views/Computers.vue')),
  getRoute('cellphones', import('../views/Cellphones.vue')),
  getRoute('breakout', import('../views/BreakoutView.vue')),
  getRoute('resources', import('../views/Resources.vue'))
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
