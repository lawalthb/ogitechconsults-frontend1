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
                                        <div class="text-h6 text-primary">Add New Order Tb</div>
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
                    <div class="col-md-9 col-12 comp-grid" >
                        <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-18">
                            <div >
                                <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="startSaveRecord()" @reset="resetForm">
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Order No *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <check-duplicate v-model="formData.order_no" check-path="components_data/order_tb_order_no_exist/" v-slot="checker">
                                                    <ValidationProvider :rules="{required:true}" name="Order No" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlorder_no" v-model.trim="formData.order_no"  label="Order No" type="number" placeholder="Enter Order No"   step="any" list="order_no_list"  readonly  
                                                        class="" :error="(invalid && validated) || checker.exist" :error-message="errors[0] || 'Not available'">
                                                        </q-input>
                                                        <datalist id="order_no_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                    </check-duplicate>
                                                </div>
                                            </div>
                                        </div>
                                        <input name="ctrlproduct_id"  ref="ctrlproduct_id" v-model="formData.product_id" type="hidden" />
                                        <input name="ctrlvendor_id"  ref="ctrlvendor_id" v-model="formData.vendor_id" type="hidden" />
                                        <input name="ctrluser_id"  ref="ctrluser_id" v-model="formData.user_id" type="hidden" />
                                        <input name="ctrlmat_no"  ref="ctrlmat_no" v-model="formData.mat_no" type="hidden" />
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Rate *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Rate" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlrate" v-model.trim="formData.rate"  label="Rate" type="text" placeholder="Enter Rate"   list="rate_list"  readonly  
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="rate_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Qty *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true, min_value:1, max_value:20}" name="Qty" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlqty" v-model.trim="formData.qty"  label="Qty" type="number" placeholder="Enter Qty"   min="1" max="20" step="1" list="qty_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="qty_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Total Amount *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Total Amount" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrltotal_amount" v-model.trim="formData.total_amount"  label="Total Amount" type="number" placeholder="Enter Total Amount"   step="1" list="total_amount_list"  readonly  
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="total_amount_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <input name="ctrlpayment_optn"  ref="ctrlpayment_optn" v-model="formData.payment_optn" type="hidden" />
                                        <input name="ctrldate"  ref="ctrldate" v-model="formData.date" type="hidden" />
                                        <input name="ctrlorder_status"  ref="ctrlorder_status" v-model="formData.order_status" type="hidden" />
                                        <input name="ctrlsales_status"  ref="ctrlsales_status" v-model="formData.sales_status" type="hidden" />
                                        <input name="ctrlremark"  ref="ctrlremark" v-model="formData.remark" type="hidden" />
                                    </div>
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn type="submit"    :rounded="false"  color="primary"  no-caps  unelevated   :disabled="invalid" icon-right="send" :loading="saving">
                                            <q-spinner-oval slot="loading" /> Send order 
                                        </q-btn>
                                    </div>
                                </ValidationObserver>
                                <slot :submit="submit" :saving="saving"></slot>
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
	import { AddPageMixin } from "../../mixins/addpage.js";
	import { mapActions, mapGetters, mapState } from "vuex";
	export default {
		name: 'shopcartOrdertbPage',
		components: {
		},
		mixins: [PageMixin, AddPageMixin ],
		props:{
			pageName : {
				type : String,
				default : 'order_tb',
			},
			routeName : {
				type : String,
				default : 'order_tbshop_cart',
			},
			apiPath : {
				type : String,
				default : 'order_tb/shop_cart',
			},
			submitButtonText: {
				type: String,
				default: "Send order ",
			},
			msgAfterSave: {
				type: String,
				default: "Order sent successfully",
			},
		},
		data() {
            return {
				formData: {
					order_no: this.$utils.randomNum(5), product_id: "", vendor_id: "", user_id: this.$UserID, mat_no: "", rate: "", qty: "1", total_amount: "1", payment_optn: "Cash", date: this.$utils.dateNow(), order_status: "1", sales_status: "1", remark: "no comment", 
				},
			}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Add New Order Tb"
				}
			},
		},
		meta () {
			return {
				title: this.pageTitle
			}
		},
		methods: {
			...mapActions('order_tb', ['saveRecord']),
			async startSaveRecord(){
				const isFormValid = await this.$refs.observer.validate();
				if(isFormValid){
					this.saving = true;
					let payload = this.normalizedFormData();
					let url = this.apiUrl;
					let data = { url, payload  }
					this.saveRecord(data).then((response) => {
						this.record = response.data ?? {};
						this.id = this.record['order_id'] ?? null;
						this.saving = false;
						this.resetForm();
						this.closeDialogs();// close page dialog that if opened
						this.flashMsg(this.msgAfterSave);
						this.$emit("submitted", this.record);
						if(this.redirect){ this.navigateTo(`/user_orders_view`); }
					},
					 (response) => {
						this.saving = false;
						this.showPageRequestError(response);
					});
				}
			},
			resetForm (){
				this.formData = {order_no: this.$utils.randomNum(5), product_id: "", vendor_id: "", user_id: this.$UserID, mat_no: "", rate: "", qty: "1", total_amount: "1", payment_optn: "Cash", date: this.$utils.dateNow(), order_status: "1", sales_status: "1", remark: "no comment", };
				requestAnimationFrame(() => {
					this.$refs.observer.reset();
				});
				this.updateFormData();
				this.$EventBus.$emit("resetForm");
			},
		},
		watch: {
			'formData.qty'(val) {
   this.formData.total_amount = (this.formData.rate * val);
                },
		},
		async mounted() {
			this.formData.total_amount = this.formData.rate * this.formData.qty;
		},
		async created() {
		},
	};
</script>
<style scoped>
</style>
