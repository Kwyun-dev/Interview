import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import all from '../components/typeDetail/all.vue'
import detail from '../components/typeDetail/detail-page.vue'
import list from '../components/typeDetail/list-page.vue'
import chapter from '../components/typeDetail/chapter-page.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
		{
			path: '/',
			redirect: '/home'
		},
    	{
    	  	path: '/home',
    	  	name: 'home',
			component: home,
			redirect: '/home/all',
    	  	children: [
				  {
					  path: 'all',
					  component: all
				  }
			]
		},
		{
			path: '/detail',
			name: "detail-page",
			component: detail,
		},
		{
			path: '/list',
			name: "list-page",
			component: list
		},
		{
			path: '/chapter',
			name: "chapter-page",
			component: chapter
		}
  	]
})
