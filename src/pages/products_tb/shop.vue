<template>
    <div class="main-page">
        <template v-if="showHeader">
            <q-card  :flat="isSubPage" class="page-section q-py-sm q-px-md q-mb-md nice-shadow-18" >
                <div class="container-fluid">
                    <div class="row justify-between q-col-gutter-md">
                        <div class="col-12 col-md-auto " >
                            <div class="" >
                                <div class="row  items-center q-col-gutter-sm q-px-sm">
                                    <div class="col">
                                        <div class="text-h6 text-primary">Items</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-auto col-12 " >
                            <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/user_orders_view/index`" class="full-width" >
                                <q-icon name="airplay"></q-icon>                                
                                Display Order List 
                            </q-btn>
                        </div>
                        <div class="col-md-auto col-12 " >
                            <q-input debounce="1000" outlined dense  placeholder="Search" v-model="searchText" >
                            <template v-slot:append>
                                <q-icon name="search"></q-icon>
                            </template>
                            </q-input>
                        </div>
                    </div>
                </div>
            </q-card>
        </template>
        <section class="page-section q-mb-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col comp-grid" >
                        <div>
                            <q-chip v-if="searchText" icon="search" removable @remove="searchText='';$route.query.search=''">
                            Search: <strong class="q-ml-sm"> {{ searchText }} </strong>
                            </q-chip>
                        </div>
                        <q-card  :flat="isSubPage" class="text-body2 animated jello nice-shadow-18">
                            <div >
                                <template v-if="showBreadcrumbs && $route.query.tag">
                                    <q-breadcrumbs class="q-pa-md">
                                        <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/products_tb"></q-breadcrumbs-el>
                                        <q-breadcrumbs-el :label="$route.query.label"></q-breadcrumbs-el>
                                    </q-breadcrumbs>
                                </template>
                                <div class="relative-position">
                                    <div class="row q-col-gutter-md">
                                        <!-- Master Page Start -->
                                        <div class="col">
                                            <template v-if="!loading">
                                                <q-table :loading="loading" hide-bottom  grid card-container-class="q-col-gutter-md justify-start" 
                                                :columns="$menus.Products_TbTableHeader2Items" 
                                                :data="records" 
                                                row-key="product_id" 
                                                :pagination.sync="pagination"
                                                @request="setPagination" 
                                                no-data-label="No Record Found">
                                                <template v-slot:item="props">
                                                    <div class="col-sm-6 col-md-3 col-12">
                                                        <q-card :bordered="false" class="nice-shadow-18 nice-shadow-18">
                                                            <q-card-section>
                                                                <div v-ripple @click="navigateTo(`/products_tb/view/${props.row.product_id}`)" class="text-bold text-primary cursor-pointer">{{ props.row.product_name }}</div>
                                                                <q-img v-ripple @click="navigateTo(`/products_tb/view/${props.row.product_id}`)" :ratio="2/1" class="q-my-sm cursor-pointer" :src="$utils.setImgUrl(props.row.image, 'medium')">
                                                                <template v-slot:error>
                                                                    <div class="absolute-full text-h2 text-bold flex flex-center bg-grey-3 text-grey-8">!</div>
                                                                </template>
                                                                </q-img>    
                                                                <div class="text-body2">{{ props.row.vendors_tb_name }}</div>
                                                            </q-card-section>
                                                            <q-separator></q-separator>
                                                            <div class="row justify-between">
                                                                <span class="text-caption text-grey q-pa-sm">{{ props.row.sell_rate }}</span>
                                                                <q-card-actions class="row justify-center">
                                                                    <div><q-btn size="sm" icon="add_shopping_cart" label="Click to Order" glossy outline flat :rounded="false"  no-caps  unelevated  push padding="xs" color="primary" title="Click to Order1"  :to="`/products_tb/view/${props.row.product_id}`">
                                                                    </q-btn></div>
                                                                </q-card-actions>
                                                            </div>
                                                        </q-card></div>
                                                    </template>
                                                    </q-table>
                                                </template>
                                                <template v-if="loading">
                                                    <div class="q-my-md">
                                                        <div class="row q-col-gutter-md">
                                                            <div v-for="n in 8" :key="n" class="col-md-3">
                                                                <q-card flat class="q-pa-md">
                                                                    <q-skeleton height="150px" square />
                                                                    <q-card-section>
                                                                        <q-skeleton type="text" class="text-subtitle1" />
                                                                        <q-skeleton type="text" width="50%" class="text-subtitle1" />
                                                                        <q-skeleton type="text" class="text-caption" />
                                                                    </q-card-section>
                                                                </q-card>
                                                            </div>   
                                                        </div>   
                                                    </div>
                                                    <q-inner-loading :showing="loading">
                                                        <q-spinner color="primary" size="30px"> 
                                                        </q-spinner>
                                                    </q-inner-loading>
                                                </template>
                                                <template v-if="!loading && !records.length">
                                                    <q-card :flat="$q.screen.gt.md">
                                                        <q-card-section>
                                                            <div class="text-grey text-h6 text-center">
                                                                No record found
                                                            </div>
                                                        </q-card-section>
                                                    </q-card>
                                                </template>
                                                <div v-if="showFooter" class="">
                                                    <div class="q-pa-sm" v-show="!loading">
                                                        <div class="row justify-between">
                                                            <div class="row q-col-gutter-md">
                                                                <div>
                                                                    <q-btn    :rounded="false"  no-caps  unelevated   color="negative" padding="xs" @click="deleteItem(selectedItems)" v-if="selectedItems.length" icon="delete_sweep" class="q-my-xs" title="Delete Selected"></q-btn>
                                                                </div>
                                                            </div>
                                                            <div v-if="paginate && totalRecords > 0" class="row q-col-gutter-md justify-center">
                                                                <div class="col-auto">
                                                                    <q-chip>Records {{recordsPosition}} of {{totalRecords}}</q-chip>
                                                                </div>
                                                                <div v-if="totalPages > 1">
                                                                    <q-pagination  color="primary" flat glossy  input v-model="pagination.page" :direction-links="true" :boundary-links="true" :max-pages="5" :boundary-numbers="true" :max="totalPages"></q-pagination>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
	import { ListPageMixin } from "../../mixins/listpage.js";
	import { mapActions, mapGetters, mapState } from "vuex";
	export default {
		name: 'shopProductstbPage',
		components: {
        },
		mixins: [PageMixin, ListPageMixin ],
		props: {
			primaryKey : {
				type : String,
				default : 'product_id',
			},
			pageName : {
				type : String,
				default : 'products_tb',
			},
			routeName : {
				type : String,
				default : 'products_tbshop',
			},
			apiPath : {
				type : String,
				default : 'products_tb/shop',
			},
			limit: {
				type: String,
				default: "20",
			},
			multiCheckbox: {
				type: Boolean,
				default: true,
			},
			msgBeforeDelete: {
				type: String,
				default: "Are you sure you want to delete this record?",
			},
		},
		data() {
            return {
			}
		},
		computed: {
			pageTitle:{
				get: function () {
					//set browser page title
					return "Shop Page"
				}
			},
			records: {
				get: function () {
					return this.$store.getters["products_tb/records"];
				},
				set: function (value) {
					this.$store.commit("products_tb/setRecords", value);
				},
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
		meta () {
			return {
				title: this.pageTitle
			}
		},
		watch: {
			apiUrl: function () {
				this.load();
			},
			$route (to, from){
				//only fetch data when navigated to this page
				if(to.name == this.routeName){
					this.load();
				}
			},
		},
		methods: {
			...mapActions("products_tb", ["fetchRecords", "deleteRecord"]),
			load: function() {
				if (!this.loading) {
					this.loading = true;
					this.currentRecord = null;
					let url = this.apiUrl;
					let payload = {
						url,
						merge: false
					}
					this.fetchRecords(payload).then(
						(response) => {
							this.loading = false;
							this.ready = true;
							this.totalRecords = response.total_records;
							this.recordCount = response.record_count;
							this.pagination.rowsNumber = this.totalRecords;
							window.scrollTo(0, 0);
						},
						(response) => {
							this.loading = false;
							this.showPageRequestError(response);
						}
					);
				}
			},	
		},
		async mounted() {
		},
		async created() {
		}
	};
</script>
<style scoped>
</style>
