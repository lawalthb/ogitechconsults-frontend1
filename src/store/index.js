import Vue from 'vue'
import Vuex from 'vuex'
import { pageComponents } from "./page_components.js"
import { state, getters, mutations, actions } from "./app_store.js"
import { auth } from "./auth.js"
import { products_tb } from "./products_tb.js"
import { payment_tb } from "./payment_tb.js"
import { order_tb } from "./order_tb.js"
import { departments_tb } from "./departments_tb.js"
import { admins_tb } from "./admins_tb.js"
import { vendors_tb } from "./vendors_tb.js"
import { users_tb } from "./users_tb.js"
import { stock_tb } from "./stock_tb.js"
import { sales_tb } from "./sales_tb.js"
import { user_orders_view } from "./user_orders_view.js"
import { level } from "./level.js"
import { product_departments } from "./product_departments.js"
Vue.use(Vuex)
export default function (/* { ssrContext } */) {
	const Store = new Vuex.Store({
		state,
		getters,
		mutations,
		actions,
		modules: {
			pageComponents,
			auth,
		products_tb,
		payment_tb,
		order_tb,
		departments_tb,
		admins_tb,
		vendors_tb,
		users_tb,
		stock_tb,
		sales_tb,
		user_orders_view,
		level,
		product_departments
		},
		// enable strict mode (adds overhead!)
		// for dev mode only
		strict: process.env.DEV
	})
	return Store
}