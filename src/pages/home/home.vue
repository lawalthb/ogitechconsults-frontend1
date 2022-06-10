<template>
    <q-page  class="main-page">
        <section class="page-section q-mb-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col comp-grid" >
                        <div class="" >
                            <div class="row  items-center q-col-gutter-sm q-px-sm">
                                <div class="col">
                                    <div class="text-h6 text-bold">Dashboard</div>
                                </div>
                            </div>
                        </div>
                        <q-separator class="q-my-sm"></q-separator>
                        <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/products_tb/shop`" class="full-width" >
                            <q-icon name="account_balance"></q-icon>                                
                            Enter Shop 
                        </q-btn>
                    </div>
                </div>
            </div>
        </section>
        <q-card  :flat="isSubPage" class="page-section q-mt-lg q-mb-sm no-box-shadow nice-shadow-18" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col-sm-12 col-lg-4 col-md-4 comp-grid" >
                        <record-count api-path="components_data/getcount_totalorders" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`user_orders_view`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="shopping_cart"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Total Orders </div>
                                <div class="text-caption">Total Orders complete and incomplete</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                        <div class="">
                            <div><br></div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4 col-12 comp-grid" >
                        <record-count api-path="components_data/getcount_totalordersapproved" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`order_tb`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="lock_open"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Total Orders Approved</div>
                                <div class="text-caption">Total Order Tb</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                        <div class="">
                            <div><br></div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4 col-12 comp-grid" >
                        <record-count api-path="components_data/getcount_totalorderpending" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`user_orders_view`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="lock"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Total order Pending</div>
                                <div class="text-caption">Total orders rejected</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                        <div class="">
                            <div><br> <br></div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4 col-12 comp-grid" >
                        <record-count api-path="components_data/getcount_totalorderrejected" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`user_orders_view`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="cancel"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Total order rejected</div>
                                <div class="text-caption">Total orders rejected</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                        <div class="">
                            <div><br> <br></div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4 col-12 comp-grid" >
                        <record-count api-path="components_data/getcount_totalitem" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`products_tb/shop`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="business"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Total item</div>
                                <div class="text-caption">Total item for my department</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                        <div class="">
                            <div><br> <br></div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4 col-12 comp-grid" >
                        <record-count api-path="components_data/getcount_totalamountspent" max="" v-slot="record">
                        <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`#`" padding="md" class="full-width animated zoomIn" >
                            <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="monetization_on"></q-icon>
                            <div class="flex-column text-left">
                                <div class="text-bold">Total Amount Spent</div>
                                <div class="text-caption">Total amount paid</div>
                            </div>
                            <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                <span v-if="!record.loading">N{{ record.num }}</span>
                                <q-spinner v-else size="14px" />
                            </div>
                        </q-btn>
                        </record-count>
                    </div>
                </div>
            </div>
        </q-card>
        <q-separator class="q-my-sm"></q-separator>
        <section class="page-section q-mb-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div class="col-sm-12 col-lg-6 col-md-6 comp-grid" >
                        <div class="">
                            <div class="reset-grid">
                                <list-productstb-page is-sub-page ref="productsTbListPage"  :limit="10" sort-by="products_tb.product_id" sort-type="DESC" :show-header="false" :show-breadcrumbs="true" :show-footer="false" :paginate="false" v-if="ready">
                                    </list-productstb-page>
                                </div>
                            </div>
                        </div>
                        <div class="col col-sm-12 col-lg-6 col-md-6 comp-grid" >
                            <div class="">
                                <div class="reset-grid">
                                    <list-ordertb-page is-sub-page ref="orderTbListPage"  :limit="10" :show-header="false" :show-breadcrumbs="true" :show-footer="false" :paginate="false" v-if="ready">
                                        </list-ordertb-page>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="page-section q-mb-md" >
                    <div class="container-fluid">
                        <div class="row q-col-gutter-x-md">
                            <div class="col comp-grid" >
                            </div>
                        </div>
                    </div>
                </section>
            </q-page>
</template>
<script>
	import listProductstbPage from "../products_tb/list.vue";
import listOrdertbPage from "../order_tb/list.vue";
	import { PageMixin } from "../../mixins/page.js";
	export default {
		name: '',
		components: {
			listProductstbPage,listOrdertbPage,
		},
		mixins: [PageMixin ],
		props: {
		},
		data: function() {
			return {
				ready: false,
			}
		},
		computed: {
		},
		methods: {
		},
		watch: {
		},
		mounted: function(){
			this.ready = true;
		},
		created: function(){
		}
	};
</script>
