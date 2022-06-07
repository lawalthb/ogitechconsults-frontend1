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
                                        <div class="text-h6 text-primary">Payment Tb</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-auto col-12 " >
                            <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/payment_tb/add`" class="full-width" >
                                <q-icon name="add"></q-icon>                                
                                Add New Payment Tb 
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
                        <div class="">
                            <div >
                                <template v-if="showBreadcrumbs && $route.query.tag">
                                    <q-breadcrumbs class="q-pa-md">
                                        <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="$route.query.tag" to="/payment_tb"></q-breadcrumbs-el>
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
                                                :columns="$menus.Payment_TbTableHeaderItems" 
                                                :data="records"
                                                binary-state-sort
                                                separator="horizontal"
                                                :dense="true"
                                                :selected.sync="selectedItems"
                                                selection="multiple"
                                                row-key="payment_id" 
                                                :pagination.sync="pagination"
                                                hide-bottom
                                                @request="setPagination"
                                                :loading="loading">
                                                <!-- Start of Table Layout -->
                                                <template v-slot:body="props">
                                                    <q-tr :class="{selected: isCurrentRecord(props.row)}" :props="props">
                                                        <q-td auto-width>
                                                            <q-checkbox dense v-model="props.selected"></q-checkbox>
                                                        </q-td>
                                                        <q-td  key="payment_id" :props="props">
                                                            <q-btn padding="xs"   :rounded="false"  color="primary"  no-caps  unelevated   flat :to="`/payment_tb/view/${props.row.payment_id}`">{{ props.row.payment_id }}</q-btn>
                                                        </q-td>
                                                        <q-td  key="vendor_id" :props="props">
                                                            <q-btn v-if="props.row.vendor_id" @click="openPageDialog({ page: 'vendors_tb/view', url: `/vendors_tb/view/${props.row.vendor_id}` }, { closeBtn: true })" padding="xs" color="blue-1" unelevated text-color="blue" no-caps >
                                                                <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Vendors Tb
                                                            </q-btn>
                                                        </q-td>
                                                        <q-td  key="amount_in" :props="props">
                                                            {{ props.row.amount_in }}
                                                        </q-td>
                                                        <q-td  key="amount_out" :props="props">
                                                            {{ props.row.amount_out }}
                                                        </q-td>
                                                        <q-td  key="amount_balance" :props="props">
                                                            {{ props.row.amount_balance }}
                                                        </q-td>
                                                        <q-td  key="reg_date" :props="props">
                                                            {{ props.row.reg_date }}
                                                        </q-td>
                                                        <q-td  key="cmment" :props="props">
                                                            {{ props.row.cmment }}
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
                                                                            <q-item link clickable v-ripple :to="`/payment_tb/view/${props.row.payment_id}`">
                                                                                <q-item-section>
                                                                                    <q-icon color="primary"  size="sm" name="visibility"></q-icon>
                                                                                </q-item-section>
                                                                                <q-item-section>View</q-item-section>
                                                                            </q-item>
                                                                            <q-item link clickable v-ripple :to="`/payment_tb/edit/${props.row.payment_id}`">
                                                                                <q-item-section>
                                                                                    <q-icon color="positive"  size="sm" name="edit"></q-icon>
                                                                                </q-item-section>
                                                                                <q-item-section>Edit</q-item-section>
                                                                            </q-item>
                                                                            <q-item link clickable v-ripple @click="deleteItem(props.row.payment_id)">
                                                                                <q-item-section>
                                                                                    <q-icon color="negative"  size="sm" name="clear"></q-icon>
                                                                                </q-item-section>
                                                                                <q-item-section>Delete</q-item-section>
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
                                                                        Payment Id
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        <q-btn padding="xs"   :rounded="false"  color="primary"  no-caps  unelevated   flat :to="`/payment_tb/view/${props.row.payment_id}`">{{ props.row.payment_id }}</q-btn>
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Vendor Id
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        <q-btn v-if="props.row.vendor_id" @click="openPageDialog({ page: 'vendors_tb/view', url: `/vendors_tb/view/${props.row.vendor_id}` }, { closeBtn: true })" padding="xs" color="blue-1" unelevated text-color="blue" no-caps >
                                                                            <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  Vendors Tb
                                                                        </q-btn>
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Amount In
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.amount_in }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Amount Out
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.amount_out }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Amount Balance
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.amount_balance }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Reg Date
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.reg_date }}
                                                                    </div>
                                                                </div>
                                                                <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                                    <div class="col-auto text-caption">
                                                                        Cmment
                                                                    </div>
                                                                    <div class="col text-right">
                                                                        {{ props.row.cmment }}
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
                                                                <div class="q-pa-sm"><q-checkbox  dense v-model="props.selected"></q-checkbox></div>
                                                                <q-card-actions>
                                                                    <div class="row q-col-gutter-xs justify-end">
                                                                        <q-btn icon="menu" padding="xs" round flat color="grey">
                                                                            <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                                                <q-list dense rounded nav>
                                                                                    <q-item link clickable v-ripple :to="`/payment_tb/view/${props.row.payment_id}`">
                                                                                        <q-item-section>
                                                                                            <q-icon color="primary"  size="sm" name="visibility"></q-icon>
                                                                                        </q-item-section>
                                                                                        <q-item-section>View</q-item-section>
                                                                                    </q-item>
                                                                                    <q-item link clickable v-ripple :to="`/payment_tb/edit/${props.row.payment_id}`">
                                                                                        <q-item-section>
                                                                                            <q-icon color="positive"  size="sm" name="edit"></q-icon>
                                                                                        </q-item-section>
                                                                                        <q-item-section>Edit</q-item-section>
                                                                                    </q-item>
                                                                                    <q-item link clickable v-ripple @click="deleteItem(props.row.payment_id)">
                                                                                        <q-item-section>
                                                                                            <q-icon color="negative"  size="sm" name="clear"></q-icon>
                                                                                        </q-item-section>
                                                                                        <q-item-section>Delete</q-item-section>
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
		name: 'listPaymenttbPage',
		components: {
        },
		mixins: [PageMixin, ListPageMixin ],
		props: {
			primaryKey : {
				type : String,
				default : 'payment_id',
			},
			pageName : {
				type : String,
				default : 'payment_tb',
			},
			routeName : {
				type : String,
				default : 'payment_tblist',
			},
			apiPath : {
				type : String,
				default : 'payment_tb/index',
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
					return "Payment Tb"
				}
			},
			records: {
				get: function () {
					return this.$store.getters["payment_tb/records"];
				},
				set: function (value) {
					this.$store.commit("payment_tb/setRecords", value);
				},
			},
			currentRecord: {
				get: function () {
					return this.$store.getters["payment_tb/currentRecord"];
				},
				set: function (value) {
					this.$store.commit("payment_tb/setCurrentRecord", value);
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
			...mapActions("payment_tb", ["fetchRecords", "deleteRecord"]),
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
