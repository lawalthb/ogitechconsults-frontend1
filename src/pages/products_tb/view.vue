<template>
    <div class="main-page">
        <template v-if="showHeader">
            <q-card  :flat="isSubPage" class="page-section q-py-sm q-px-md q-mb-md nice-shadow-18" >
                <div class="container">
                    <div class="row justify-between q-col-gutter-md">
                        <div class="col-12 col-md-auto " >
                            <div class="" >
                                <div class="row  items-center q-col-gutter-sm q-px-sm">
                                    <div class="col">
                                        <div class="text-h6 text-primary">Ordering for {{ item.product_name }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </q-card>
        </template>
        <section class="page-section q-mb-md no-border-radius animated swing" >
            <div class="container">
                <div class="row q-col-gutter-x-md">
                    <div class="col-10 comp-grid" >
                        <q-card  :flat="isSubPage" class=" nice-shadow-18">
                            <div >
                                <div class="relative-position" style="min-height:100px">
                                    <template v-if="!loading && item">
                                        <div class="row q-col-gutter-x-md">
                                            <div class="col">
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Product Name: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.product_name }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Description: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.description }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Sell Rate: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.sell_rate }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Vendor Name: </q-item-label>
                                                        <q-item-label class="text-bold">
                                                            <q-btn v-if="item.vendor_id" :to="`/vendors_tb/view/${item.vendor_id}`" padding="xs" color="blue-1" unelevated text-color="blue" no-caps >
                                                                  {{ item.vendors_tb_name }}
                                                            </q-btn>
                                                        </q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-if="loading">
                                        <div class="q-my-md">
                                            <q-markup-table flat>
                                            <tbody>
                                                <tr v-for="n in 5" :key="n">
                                                    <td class="text-left" style="width:40px">
                                                        <q-skeleton type="QAvatar" width="30px" height="30px" />
                                                    </td>
                                                    <td class="text-left"  style="width:90px">
                                                        <q-skeleton  type="text" width="80px" />
                                                    </td>
                                                    <td class="text-right">
                                                        <q-skeleton type="text" width="250px" height="40px" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                            </q-markup-table>
                                        </div>
                                        <div class="q-pa-sm text-center">
                                            <q-inner-loading :showing="loading">
                                                <q-spinner :size="40" color="primary" indeterminate></q-spinner>
                                            </q-inner-loading>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </q-card>
                        <div class="">
                            <div class="reset-grid">
                                <shopcart-ordertb-page is-sub-page ref="orderTbAddPage"  :show-header="false" :model-bind="{product_id: item.product_id,vendor_id: item.vendor_id,rate: item.sell_rate}" v-if="ready">
                                </shopcart-ordertb-page>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
	import shopcartOrdertbPage from "../order_tb/shop_cart.vue";
	import { PageMixin } from "../../mixins/page.js";
	import { ViewPageMixin } from "../../mixins/viewpage.js";
	import { mapActions, mapGetters, mapState } from "vuex";
	export default {
		name: 'viewProductstbPage',
		components: {
			shopcartOrdertbPage,
		},
		mixins: [PageMixin, ViewPageMixin ],
		props: {
			pageName: {
				type : String,
				default : 'products_tb',
			},
			idName: {
				type: String,
				default: 'product_id',
			},
			routeName : {
				type : String,
				default : 'products_tbview',
			},
			pagePath: {
				type : String,
				default : 'products_tb/view',
			},
			apiPath: {
				type : String,
				default : 'products_tb/view',
			},
		},
		data() {
            return {
				item: {
					default :{
					},
				},
			}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Ordering"
				}
			},
			currentRecord: {
				get: function () {
					return this.$store.getters["products_tb/currentRecord"];
				},
				set: function (value) {
					this.$store.commit("products_tb/setCurrentRecord", value);
				},
			},
		},
		meta() {
			return {
				title: this.pageTitle
			}
		},
		methods: {
			...mapActions("products_tb", [ "fetchRecord", "deleteRecord"]),
		},
		watch: {
			$route (to, from){
				//only fetch data when navigated to this page
				if(to.name == this.routeName){
					this.load();
				}
			},
		},
		async mounted() {
		},
		async created() {
		},
	};
</script>
<style scoped>
</style>
