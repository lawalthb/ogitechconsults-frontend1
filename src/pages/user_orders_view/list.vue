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
                                        <div class="text-h6 text-primary">Order List</div>
                                    </div>
                                </div>
                            </div>
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
                        <div class="">
                            <api-data-source   api-path="components_data/user_orders_view_name_option_list"  :query-params="filters" v-slot="req">
                                <div class="q-pa-sm">
                                    <q-btn-dropdown icon="" label="Vendor Names" outline no-caps color="primary" class="full-width" >
                                        <q-list rounded nav>
                                            <q-item v-for="(option, index) in req.response" :active="filters.user_orders_view_name == option.value" :key="index" @click="setFilter(option, 'user_orders_view_name')" v-ripple clickable v-close-popup>
                                                <q-item-section>{{ option.label }}</q-item-section>
                                            </q-item>
                                        </q-list>
                                    </q-btn-dropdown>
                                </div>
                            </api-data-source>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section q-mb-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col-10 col-sm-12 col-lg-auto col-md-10 comp-grid" >
                        <q-card  :flat="isSubPage" class="q-mb-sm q-pa-sm nice-shadow-18">
                            <div class="" >
                                <div class="row  items-center q-col-gutter-sm q-px-sm">
                                    <div class="col">
                                        <div class="text-bold">Filter by Order Status</div>
                                    </div>
                                </div>
                            </div>
                            <q-separator class="q-my-sm"></q-separator>
                            <q-list :nav="true" dense rounded >
                                <q-item v-for="(option, index) in $menus.user_orders_viewsales_statusItems" :active="filters.user_orders_view_sales_status == option.value" :key="index" @click="setFilter(option, 'user_orders_view_sales_status')" v-ripple clickable v-close-popup>
                                    <q-item-section>{{ option.label }}</q-item-section>
                                </q-item>
                            </q-list>
                        </q-card>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-10 col-md-10 comp-grid" >
                        <div>
                            <q-chip v-if="searchText" icon="search" removable @remove="searchText='';$route.query.search=''">
                            Search: <strong class="q-ml-sm"> {{ searchText }} </strong>
                            </q-chip>
                            <q-chip v-if="filters.user_orders_view_name" removable @remove="filters.user_orders_view_name = ''">
                            Name:  
                            <strong class="q-ml-sm">{{ filtersLabel.user_orders_view_name.toString() }}</strong>
                            </q-chip>
                            <q-chip v-if="filters.user_orders_view_sales_status" removable @remove="filters.user_orders_view_sales_status = ''">
                            Sales Status:  
                            <strong class="q-ml-sm">{{ filtersLabel.user_orders_view_sales_status.toString() }}</strong>
                            </q-chip>
                        </div>
                        <div class="">
                            <div >
                                <template v-if="showBreadcrumbs && $route.query.tag">
                                    <q-breadcrumbs class="q-pa-md">
                                        <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/user_orders_view"></q-breadcrumbs-el>
                                        <q-breadcrumbs-el :label="$route.query.label"></q-breadcrumbs-el>
                                    </q-breadcrumbs>
                                </template>
                                <div class="relative-position">
                                    <div class="row q-col-gutter-x-md">
                                        <!-- Master Page Start -->
                                        <div class="col">
                                            <!-- page records template -->
                                            <template >
                                                <q-table 
                                                :grid="$q.screen.lt.md"
                                                :flat="$q.screen.gt.md"
                                                table-header-class="text-h4 "
                                                :bordered="false"
                                                :columns="$menus.User_Orders_ViewTableHeaderItems" 
                                                :data="records"
                                                binary-state-sort
                                                separator="horizontal"
                                                :dense="true"
                                                row-key="order_id" 
                                                :pagination.sync="pagination"
                                                hide-bottom
                                                @request="setPagination"
                                                :loading="loading">
                                                <!-- Start of Table Layout -->
                                                <template v-slot:body="props">
                                                    <q-tr :class="{selected: isCurrentRecord(props.row)}" :props="props">
                                                        <q-td  key="order_no" :props="props">
                                                            {{ props.row.order_no }}
                                                        </q-td>
                                                        <q-td  key="product_name" :props="props">
                                                            {{ props.row.product_name }}
                                                        </q-td>
                                                        <q-td  key="sales_status" :props="props">
                                                            <q-chip>{{ props.row.sales_status }}</q-chip>
                                                        </q-td>
                                                        <q-td  key="qty" :props="props">
                                                            {{ props.row.qty }}
                                                        </q-td>
                                                        <q-td  key="rate" :props="props">
                                                            {{ props.row.rate }}
                                                        </q-td>
                                                        <q-td  key="total_amount" :props="props">
                                                            {{ props.row.total_amount }}
                                                        </q-td>
                                                        <q-td  key="title" :props="props">
                                                            {{ props.row.title }}
                                                        </q-td>
                                                        <q-td  key="name" :props="props">
                                                            {{ props.row.name }}
                                                        </q-td>
                                                        <q-td  key="payment_optn" :props="props">
                                                            {{ props.row.payment_optn }}
                                                        </q-td>
                                                        <q-td  key="mat_no" :props="props">
                                                            {{ props.row.mat_no }}
                                                        </q-td>
                                                        <q-td  key="level" :props="props">
                                                            {{ props.row.level }}
                                                        </q-td>
                                                        <q-td  key="date" :props="props">
                                                            <q-chip v-if="props.row.date" dense size="13px" :label="props.row.date | relativeDate">
                                                            <q-tooltip
                                                            content-class="bg-accent"
                                                            transition-show="scale"
                                                            transition-hide="scale"
                                                            >
                                                            {{ props.row.date | humanDatetime}}
                                                            </q-tooltip>
                                                            </q-chip>
                                                        </q-td>
                                                        <q-td key="btnactions" :props="props">
                                                            <div class="row q-col-gutter-xs justify-end">
                                                                <q-btn icon="menu" padding="xs" round flat color="grey">
                                                                    <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                                        <q-list dense rounded nav>
                                                                            <q-item link clickable v-ripple @click="deleteItem(props.row.order_id)">
                                                                                <q-item-section>
                                                                                    <q-icon color="primary"  size="sm" name="cancel"></q-icon>
                                                                                </q-item-section>
                                                                                <q-item-section>Cancel Order</q-item-section>
                                                                            </q-item>
                                                                        </q-list>
                                                                    </q-menu>
                                                                </q-btn>
                                                            </div>
                                                        </q-td>
                                                    </q-tr>
                                                </template>
                                                <!-- End of Table Layout-->
                                                <!-- Start of Mobile Grid Layout-->
                                                <template v-slot:item="props">
                                                    <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition" :style="props.selected ? 'transform: scale(0.95);' : ''">
                                                        <q-card  :flat="isSubPage" class="nice-shadow-18 nice-shadow-18">
                                                            <q-card-section>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Order No
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.order_no }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Product Name
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.product_name }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Status
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        <q-chip>{{ props.row.sales_status }}</q-chip>
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Qty
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.qty }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Rate
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.rate }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Total Amount
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.total_amount }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Title
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.title }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Name
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.name }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Payment Optn
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.payment_optn }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Mat No
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.mat_no }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Level
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.level }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Date
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        <q-chip v-if="props.row.date" dense size="13px" :label="props.row.date | relativeDate">
                                                                        <q-tooltip
                                                                        content-class="bg-accent"
                                                                        transition-show="scale"
                                                                        transition-hide="scale"
                                                                        >
                                                                        {{ props.row.date | humanDatetime}}
                                                                        </q-tooltip>
                                                                        </q-chip>
                                                                    </div>
                                                                </div>
                                                            </q-card-section>
                                                            <q-separator></q-separator>
                                                            <div class="row justify-between">
                                                                <q-card-actions>
                                                                    <div class="row q-col-gutter-xs justify-end">
                                                                        <q-btn icon="menu" padding="xs" round flat color="grey">
                                                                            <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                                                <q-list dense rounded nav>
                                                                                    <q-item link clickable v-ripple @click="deleteItem(props.row.order_id)">
                                                                                        <q-item-section>
                                                                                            <q-icon color="primary"  size="sm" name="cancel"></q-icon>
                                                                                        </q-item-section>
                                                                                        <q-item-section>Cancel Order</q-item-section>
                                                                                    </q-item>
                                                                                </q-list>
                                                                            </q-menu>
                                                                        </q-btn>
                                                                    </div>
                                                                </q-card-actions>
                                                            </div>
                                                        </q-card>
                                                    </div>
                                                </template>
                                                <!-- End of Mobile Grid Layout-->
                                                </q-table>
                                            </template>
                                            <!-- page loading indicator template -->
                                            <template v-if="loading">
                                                <q-inner-loading :showing="loading">
                                                    <q-spinner color="primary" size="30px"> 
                                                    </q-spinner>
                                                </q-inner-loading>
                                            </template>
                                            <!-- page empty record template -->
                                            <template v-if="!loading && !records.length">
                                                <q-card :flat="$q.screen.gt.md">
                                                    <q-card-section>
                                                        <div class="text-grey text-h6 text-center">
                                                            No record found
                                                        </div>
                                                    </q-card-section>
                                                </q-card>
                                            </template>
                                            <!-- page footer template-->
                                            <template v-if="showFooter">
                                                <div class="">
                                                    <div class="q-pa-sm" v-show="!loading">
                                                        <div class="row justify-between">
                                                            <div class="row q-col-gutter-md">
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
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
		name: 'listUserordersviewPage',
		components: {
        },
		mixins: [PageMixin, ListPageMixin ],
		props: {
			primaryKey : {
				type : String,
				default : '',
			},
			pageName : {
				type : String,
				default : 'user_orders_view',
			},
			routeName : {
				type : String,
				default : 'user_orders_viewlist',
			},
			apiPath : {
				type : String,
				default : 'user_orders_view/index',
			},
			multiCheckbox: {
				type: Boolean,
				default: false,
			},
			msgBeforeDelete: {
				type: String,
				default: "Are you sure you want to delete this record?",
			},
		},
		data() {
            return {
				filters: {user_orders_view_name: '',user_orders_view_sales_status: ''},
			filtersLabel: {},
			}
		},
		computed: {
			pageTitle:{
				get: function () {
					//set browser page title
					return "User Orders View"
				}
			},
			records: {
				get: function () {
					return this.$store.getters["user_orders_view/records"];
				},
				set: function (value) {
					this.$store.commit("user_orders_view/setRecords", value);
				},
			},
			currentRecord: {
				get: function () {
					return this.$store.getters["user_orders_view/currentRecord"];
				},
				set: function (value) {
					this.$store.commit("user_orders_view/setCurrentRecord", value);
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
			...mapActions("user_orders_view", ["fetchRecords", "deleteRecord"]),
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
