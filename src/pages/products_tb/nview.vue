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
                                        <div class="text-h6 text-primary">Products Tb Details</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </q-card>
        </template>
        <section class="page-section q-mb-md" >
            <div class="container">
                <div class="row q-col-gutter-x-md">
                    <div class="col comp-grid" >
                        <q-card  :flat="isSubPage" class=" nice-shadow-18">
                            <div >
                                <div class="relative-position" style="min-height:100px">
                                    <template v-if="!loading && item">
                                        <div class="row q-col-gutter-x-md">
                                            <div class="col">
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Product Id: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.product_id }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Product Name: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.product_name }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Unit: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.unit }}</q-item-label>
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
                                                        <q-item-label caption>Image: </q-item-label>
                                                        <q-item-label class="text-bold">
                                                            <image-viewer image-size="large" image-preview-size="" :src="item.image" width="400px" height="400px" :num-display="1">
                                                            </image-viewer>
                                                        </q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Vendor Id: </q-item-label>
                                                        <q-item-label class="text-bold">
                                                            <q-btn v-if="item.vendor_id" @click="openPageDialog({ page: 'vendors_tb/view', url: `/vendors_tb/view/${item.vendor_id}` }, { closeBtn: true })" padding="xs" color="blue-1" unelevated text-color="blue" no-caps >
                                                                <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Vendors Tb Detail
                                                            </q-btn>
                                                        </q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Department Id: </q-item-label>
                                                        <q-item-label class="text-bold">
                                                            <q-btn v-if="item.department_id" @click="openPageDialog({ page: 'departments_tb/view', url: `/departments_tb/view/${item.department_id}` }, { closeBtn: true })" padding="xs" color="blue-1" unelevated text-color="blue" no-caps >
                                                                <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Departments Tb Detail
                                                            </q-btn>
                                                        </q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Level: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.level }}</q-item-label>
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
                                                        <q-item-label caption>Purchase Rate: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.purchase_rate }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Status: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.status }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Reg Date: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.reg_date }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Available For: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.available_for }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Admin Id: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.admin_id }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Vendor Email: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.vendor_email }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Qty: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.qty }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-card-actions class="row q-col-gutter-xs justify-end">
                                                    <q-btn icon="menu" padding="xs" round flat color="grey">
                                                        <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                            <q-list dense rounded nav>
                                                                <q-item link clickable v-ripple :to="`/products_tb/edit/${item.product_id}`">
                                                                    <q-item-section>
                                                                        <q-icon color="positive"  size="sm" name="edit"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Edit</q-item-section>
                                                                </q-item>
                                                                <q-item link clickable v-ripple @click="deleteItem(item.product_id)">
                                                                    <q-item-section>
                                                                        <q-icon color="negative"  size="sm" name="clear"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Delete</q-item-section>
                                                                </q-item>
                                                            </q-list>
                                                        </q-menu>
                                                    </q-btn>
                                                </q-card-actions>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-if="loading">
                                        <div class="q-pa-sm text-center">
                                            <q-inner-loading :showing="loading">
                                                <q-spinner :size="40" color="primary" indeterminate></q-spinner>
                                            </q-inner-loading>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </q-card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
	import { PageMixin } from "../../mixins/page.js";
	import { ViewPageMixin } from "../../mixins/viewpage.js";
	import { mapActions, mapGetters, mapState } from "vuex";
	export default {
		name: 'nviewProductstbPage',
		components: {
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
				default : 'products_tbnview',
			},
			pagePath: {
				type : String,
				default : 'products_tb/nview',
			},
			apiPath: {
				type : String,
				default : 'products_tb/nview',
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
					return "Products Tb Details"
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
