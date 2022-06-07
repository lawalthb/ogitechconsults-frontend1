
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
let routes = [
	{
		name: 'main',
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			//Dashboard routes


//products_tb routes
			{ 
				path: '/products_tb/', 
				name: 'products_tblist', 
				component: () => import('pages/products_tb/list.vue'), 
				props: true
			},
			{ 
				path: '/products_tb/(list|index)/:fieldName?/:fieldValue?', 
				name: 'products_tblistfilter', 
				component: () => import('pages/products_tb/list.vue'), 
				props: true
			},
	
			{ 
				path: '/products_tb/view/:id', 
				name: 'products_tbview', 
				component: () => import('pages/products_tb/view.vue'), 
				props: true
			},
	
			{ 
				path: '/products_tb/add', 
				name: 'products_tbadd', 
				component: () => import('pages/products_tb/add.vue'), 
				props: true
			},
	
			{ 
				path: '/products_tb/edit/:id', 
				name: 'products_tbedit', 
				component: () => import('pages/products_tb/edit.vue'), 
				props: true
			},
		
			{ 
				path: '/products_tb/shop', 
				name: 'products_tbshop', 
				component: () => import('pages/products_tb/shop.vue'), 
				props: true
			},
	
			{ 
				path: '/products_tb/nview/:id', 
				name: 'products_tbnview', 
				component: () => import('pages/products_tb/nview.vue'), 
				props: true
			},
		

//payment_tb routes
			{ 
				path: '/payment_tb/', 
				name: 'payment_tblist', 
				component: () => import('pages/payment_tb/list.vue'), 
				props: true
			},
			{ 
				path: '/payment_tb/(list|index)/:fieldName?/:fieldValue?', 
				name: 'payment_tblistfilter', 
				component: () => import('pages/payment_tb/list.vue'), 
				props: true
			},
	
			{ 
				path: '/payment_tb/view/:id', 
				name: 'payment_tbview', 
				component: () => import('pages/payment_tb/view.vue'), 
				props: true
			},
	
			{ 
				path: '/payment_tb/add', 
				name: 'payment_tbadd', 
				component: () => import('pages/payment_tb/add.vue'), 
				props: true
			},
	
			{ 
				path: '/payment_tb/edit/:id', 
				name: 'payment_tbedit', 
				component: () => import('pages/payment_tb/edit.vue'), 
				props: true
			},
		

//order_tb routes
			{ 
				path: '/order_tb/', 
				name: 'order_tblist', 
				component: () => import('pages/order_tb/list.vue'), 
				props: true
			},
			{ 
				path: '/order_tb/(list|index)/:fieldName?/:fieldValue?', 
				name: 'order_tblistfilter', 
				component: () => import('pages/order_tb/list.vue'), 
				props: true
			},
	
			{ 
				path: '/order_tb/view/:id', 
				name: 'order_tbview', 
				component: () => import('pages/order_tb/view.vue'), 
				props: true
			},
	
			{ 
				path: '/order_tb/add', 
				name: 'order_tbadd', 
				component: () => import('pages/order_tb/add.vue'), 
				props: true
			},
	
			{ 
				path: '/order_tb/edit/:id', 
				name: 'order_tbedit', 
				component: () => import('pages/order_tb/edit.vue'), 
				props: true
			},
		
			{ 
				path: '/order_tb/shop_cart', 
				name: 'order_tbshop_cart', 
				component: () => import('pages/order_tb/shop_cart.vue'), 
				props: true
			},
	

//departments_tb routes
			{ 
				path: '/departments_tb/', 
				name: 'departments_tblist', 
				component: () => import('pages/departments_tb/list.vue'), 
				props: true
			},
			{ 
				path: '/departments_tb/(list|index)/:fieldName?/:fieldValue?', 
				name: 'departments_tblistfilter', 
				component: () => import('pages/departments_tb/list.vue'), 
				props: true
			},
	
			{ 
				path: '/departments_tb/view/:id', 
				name: 'departments_tbview', 
				component: () => import('pages/departments_tb/view.vue'), 
				props: true
			},
	
			{ 
				path: '/departments_tb/add', 
				name: 'departments_tbadd', 
				component: () => import('pages/departments_tb/add.vue'), 
				props: true
			},
	
			{ 
				path: '/departments_tb/edit/:id', 
				name: 'departments_tbedit', 
				component: () => import('pages/departments_tb/edit.vue'), 
				props: true
			},
		

//admins_tb routes
			{ 
				path: '/admins_tb/', 
				name: 'admins_tblist', 
				component: () => import('pages/admins_tb/list.vue'), 
				props: true
			},
			{ 
				path: '/admins_tb/(list|index)/:fieldName?/:fieldValue?', 
				name: 'admins_tblistfilter', 
				component: () => import('pages/admins_tb/list.vue'), 
				props: true
			},
	
			{ 
				path: '/admins_tb/view/:id', 
				name: 'admins_tbview', 
				component: () => import('pages/admins_tb/view.vue'), 
				props: true
			},
	
			{ 
				path: '/admins_tb/add', 
				name: 'admins_tbadd', 
				component: () => import('pages/admins_tb/add.vue'), 
				props: true
			},
	
			{ 
				path: '/admins_tb/edit/:id', 
				name: 'admins_tbedit', 
				component: () => import('pages/admins_tb/edit.vue'), 
				props: true
			},
		

//vendors_tb routes
			{ 
				path: '/vendors_tb/', 
				name: 'vendors_tblist', 
				component: () => import('pages/vendors_tb/list.vue'), 
				props: true
			},
			{ 
				path: '/vendors_tb/(list|index)/:fieldName?/:fieldValue?', 
				name: 'vendors_tblistfilter', 
				component: () => import('pages/vendors_tb/list.vue'), 
				props: true
			},
	
			{ 
				path: '/vendors_tb/view/:id', 
				name: 'vendors_tbview', 
				component: () => import('pages/vendors_tb/view.vue'), 
				props: true
			},
	
			{ 
				path: '/vendors_tb/add', 
				name: 'vendors_tbadd', 
				component: () => import('pages/vendors_tb/add.vue'), 
				props: true
			},
	
			{ 
				path: '/vendors_tb/edit/:id', 
				name: 'vendors_tbedit', 
				component: () => import('pages/vendors_tb/edit.vue'), 
				props: true
			},
		

//users_tb routes
			{ 
				path: '/users_tb/', 
				name: 'users_tblist', 
				component: () => import('pages/users_tb/list.vue'), 
				props: true
			},
			{ 
				path: '/users_tb/(list|index)/:fieldName?/:fieldValue?', 
				name: 'users_tblistfilter', 
				component: () => import('pages/users_tb/list.vue'), 
				props: true
			},
	
			{ 
				path: '/users_tb/view/:id', 
				name: 'users_tbview', 
				component: () => import('pages/users_tb/view.vue'), 
				props: true
			},
	
			{ 
				path: '/index/register', 
				name: 'users_tbuserregister', 
				component: () => import('pages/index/userregister.vue'), 
				props: true
			},
	
			{ 
				path: '/account/edit', 
				name: 'users_tbaccountedit', 
				component: () => import('pages/account/accountedit.vue'), 
				props: true
			},
	
			{ 
				path: '/account', 
				name: 'users_tbaccountview', 
				component: () => import('pages/account/accountview.vue'), 
				props: true
			},
	
			{ 
				path: '/users_tb/add', 
				name: 'users_tbadd', 
				component: () => import('pages/users_tb/add.vue'), 
				props: true
			},
	
			{ 
				path: '/users_tb/edit/:id', 
				name: 'users_tbedit', 
				component: () => import('pages/users_tb/edit.vue'), 
				props: true
			},
		

//stock_tb routes
			{ 
				path: '/stock_tb/', 
				name: 'stock_tblist', 
				component: () => import('pages/stock_tb/list.vue'), 
				props: true
			},
			{ 
				path: '/stock_tb/(list|index)/:fieldName?/:fieldValue?', 
				name: 'stock_tblistfilter', 
				component: () => import('pages/stock_tb/list.vue'), 
				props: true
			},
	
			{ 
				path: '/stock_tb/view/:id', 
				name: 'stock_tbview', 
				component: () => import('pages/stock_tb/view.vue'), 
				props: true
			},
	
			{ 
				path: '/stock_tb/add', 
				name: 'stock_tbadd', 
				component: () => import('pages/stock_tb/add.vue'), 
				props: true
			},
	
			{ 
				path: '/stock_tb/edit/:id', 
				name: 'stock_tbedit', 
				component: () => import('pages/stock_tb/edit.vue'), 
				props: true
			},
		

//sales_tb routes
			{ 
				path: '/sales_tb/', 
				name: 'sales_tblist', 
				component: () => import('pages/sales_tb/list.vue'), 
				props: true
			},
			{ 
				path: '/sales_tb/(list|index)/:fieldName?/:fieldValue?', 
				name: 'sales_tblistfilter', 
				component: () => import('pages/sales_tb/list.vue'), 
				props: true
			},
	
			{ 
				path: '/sales_tb/view/:id', 
				name: 'sales_tbview', 
				component: () => import('pages/sales_tb/view.vue'), 
				props: true
			},
	
			{ 
				path: '/sales_tb/add', 
				name: 'sales_tbadd', 
				component: () => import('pages/sales_tb/add.vue'), 
				props: true
			},
	
			{ 
				path: '/sales_tb/edit/:id', 
				name: 'sales_tbedit', 
				component: () => import('pages/sales_tb/edit.vue'), 
				props: true
			},
		

			
			
//Password reset routes
			{ 
				path: '/index/forgotpassword', 
				name: 'forgotpassword', 
				component: () => import('pages/index/forgotpassword.vue'), 
				props: true
			},
			{ 
				path: '/index/resetpassword', 
				name: 'resetpassword', 
				component: () => import('pages/index/resetpassword.vue'), 
				props: true
			},
			{ 
				path: '/index/resetpassword_completed', 
				name: 'resetpassword_completed', 
				component: () => import('pages/index/resetpassword_completed.vue'), 
				props: true
			},
	
			
			
			{ 
				path:  '/error/forbidden', 
				name: 'forbidden', 
				component: () => import('pages/errors/forbidden.vue'),
				props: true
			},
			{ 
				path: '/error/notfound', 
				name: 'notfound',
				component: () => import('pages/errors/pagenotfound.vue'),
				props: true
			}
		]
	},
];


/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default async function ({ store, ssrContext }) {
	let mainRoute = routes.find(x => x.name = "main");

	
	let loginToken = store.getters["auth/getLoginToken"];
	if(loginToken){
		try{
			await store.dispatch('auth/getUserData'); //get current user data from api on page load

			mainRoute.children.push({ 
				path: '/(home)?', 
				name: 'home', 
				component: () => import('pages/home/home.vue'),
				props: true
			});
		}
		catch(e){
			/*
			 * getting current user detail failed
			 * token must be invalid
			*/
			mainRoute.children.push({ 
				path: '/(index)?', 
				name: 'index', 
				component: () => import('pages/index/index.vue') ,
				props: true
			});
		}
	}
	else{
		/*
		 * user has not loggedIn
		 * show login page
		*/
		mainRoute.children.push({ path: '/(index|home)?', name: 'index', component: () => import('pages/index/index.vue') });
	}


	// Always leave this as last one
	if (process.env.MODE !== 'ssr') {
		mainRoute.children.push({path: '*', component: () => import('pages/errors/pagenotfound.vue')});
	}

	const Router = new VueRouter({
		scrollBehavior: () => ({ x: 0, y: 0 }),
		routes,
		// Leave these as they are and change in quasar.conf.js instead!
		// quasar.conf.js -> build -> vueRouterMode
		// quasar.conf.js -> build -> publicPath
		mode: process.env.VUE_ROUTER_MODE,
		base: process.env.VUE_ROUTER_BASE
	});
	return Router
}
