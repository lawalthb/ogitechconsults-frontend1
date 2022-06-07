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
                                        <div class="text-h6 text-primary">Edit Order Tb</div>
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
                                <template v-if="!loading">
                                    <div class="row  q-col-gutter-x-md">
                                        <div class="col">
                                            <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="startRecordUpdate()">
                                                <!--[form-content-start]-->
                                                <div class="row q-col-gutter-x-md">
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Order No 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Order No" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlorder_no" v-model.trim="formData.order_no"  label="Order No" type="text" placeholder="Enter Order No"   list="order_no_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="order_no_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Product Id *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <api-data-source @loaded="response => mapOptionField(response, 'product_id')"  api-path="components_data/product_id_option_list"  :query-params="filters" v-slot="req">
                                                                    <ValidationProvider :rules="{required:true}" name="Product Id" v-slot="{ errors, invalid, validated }">
                                                                        <q-select   :loading="req.loading"  outlined dense  ref="ctrlproduct_id" emit-value map-options  v-model="formData.product_id" :options="req.response" label="Product Id"  :error="invalid && validated" :error-message="errors[0]" >
                                                                        </q-select> 
                                                                    </ValidationProvider>
                                                                </api-data-source>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Vendor Id *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <api-data-source @loaded="response => mapOptionField(response, 'vendor_id')"  api-path="components_data/vendor_id_option_list"  :query-params="filters" v-slot="req">
                                                                    <ValidationProvider :rules="{required:true}" name="Vendor Id" v-slot="{ errors, invalid, validated }">
                                                                        <q-select   :loading="req.loading"  outlined dense  ref="ctrlvendor_id" emit-value map-options  v-model="formData.vendor_id" :options="req.response" label="Vendor Id"  :error="invalid && validated" :error-message="errors[0]" >
                                                                        </q-select> 
                                                                    </ValidationProvider>
                                                                </api-data-source>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                User Id *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="User Id" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrluser_id" v-model.trim="formData.user_id"  label="User Id" type="text" placeholder="Enter User Id"   list="user_id_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="user_id_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Mat No 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Mat No" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlmat_no" v-model.trim="formData.mat_no"  label="Mat No" type="text" placeholder="Enter Mat No"   list="mat_no_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="mat_no_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Rate *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Rate" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlrate" v-model.trim="formData.rate"  label="Rate" type="number" placeholder="Enter Rate"   step="0.1" list="rate_list"    
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
                                                                    <q-input outlined dense  ref="ctrltotal_amount" v-model.trim="formData.total_amount"  label="Total Amount" type="number" placeholder="Enter Total Amount"   step="0.1" list="total_amount_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="total_amount_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Payment Optn 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Payment Optn" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlpayment_optn" v-model.trim="formData.payment_optn"  label="Payment Optn" type="text" placeholder="Enter Payment Optn"   list="payment_optn_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="payment_optn_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Date *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Date" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  v-model.trim="formData.date" label="Date" :error="invalid && validated" :error-message="errors[0]"    >
                                                                    <template v-slot:append>
                                                                        <q-icon name="date_range" class="cursor-pointer">
                                                                        <q-popup-proxy ref="ctrldate" transition-show="scale" transition-hide="scale">
                                                                        <q-date   mask="YYYY-MM-DD" v-model="formData.date" @input="$refs.ctrldate.hide()" />
                                                                        </q-popup-proxy>
                                                                        </q-icon>
                                                                    </template>
                                                                    </q-input>      
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Order Status *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Order Status" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlorder_status" v-model.trim="formData.order_status"  label="Order Status" type="number" placeholder="Enter Order Status"   step="any" list="order_status_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="order_status_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Sales Status *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Sales Status" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlsales_status" v-model.trim="formData.sales_status"  label="Sales Status" type="number" placeholder="Enter Sales Status"   step="any" list="sales_status_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="sales_status_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Remark 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Remark" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlremark" rows="5"  v-model="formData.remark" placeholder="Enter Remark"    type="textarea"  :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--[form-content-end]-->
                                                <div v-if="showSubmitButton" class="text-center q-my-md">
                                                    <q-btn    :rounded="false"  color="primary"  no-caps  unelevated   type="submit" :disabled="invalid" icon-right="send" :loading="saving">
                                                        <q-spinner-oval slot="loading" /> Update
                                                    </q-btn>
                                                </div>
                                            </ValidationObserver>
                                            <slot :submit="submit" :saving="saving"></slot>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="q-pa-sm text-center">
                                        <q-spinner :size="40" color="accent" indeterminate></q-spinner>
                                    </div>
                                </template>
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
	import { EditPageMixin } from "../../mixins/editpage.js";
	import { mapActions, mapGetters, mapState } from "vuex";
	export default {
		name: 'editOrdertbPage',
		components: {
		},
		mixins: [PageMixin, EditPageMixin ],
		props: {
			pageName: {
				type: String,
				default: 'order_tb',
			},
			idName: {
				type: String,
				default: 'order_id',
			},
			routeName: {
				type: String,
				default: 'order_tbedit',
			},
			pagePath: {
				type : String,
				default : 'order_tb/edit',
			},
			apiPath: {
				type: String,
				default: 'order_tb/edit',
			},
		},
		data() {
            return {
				formData: {
					order_no: "", product_id: "", vendor_id: "", user_id: this.$UserID, mat_no: "", rate: "", qty: "", total_amount: "", payment_optn: "Cash", date: "", order_status: "", sales_status: "", remark: "", 
				},
				datePicker:false,
        	}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Edit Order Tb"
				}
			},
			currentRecord: {
				get: function () {
					return this.$store.getters["order_tb/currentRecord"];
				},
				set: function (value) {
					this.$store.commit("order_tb/setCurrentRecord", value);
				},
			},
		},
		meta () {
			return {
				title: this.pageTitle // set browser page title
			}
		},
		methods: {
			...mapActions('order_tb', ['updateRecord', 'fetchRecord']),
			async startRecordUpdate(){
				const isFormValid = await this.$refs.observer.validate();
				if(isFormValid){
					this.saving = true;
					let id = this.id;
					let url = this.apiUrl;
					let payload = this.normalizedFormData();
					let data = { id, url, payload }
					this.updateRecord(data).then(
						(response) => {
							this.saving = false;
							this.flashMsg(this.msgAfterUpdate);
							this.resetForm();
							this.closeDialogs();// close page dialog that if opened
							if(this.redirect) this.navigateTo(`/order_tb`);
						},
						(response) => {
							this.saving = false;
							this.showPageRequestError(response);
						}
					);
				}
			},
			updateFormFields: function(){
				//update form fields value after load from api
				//e.g convert fieldvalue (value,value2,value2) to array 
            },
			resetForm (){
				//reset form fields value
				this.formData = {order_no: "", product_id: "", vendor_id: "", user_id: this.$UserID, mat_no: "", rate: "", qty: "", total_amount: "", payment_optn: "Cash", date: "", order_status: "", sales_status: "", remark: "", };
				requestAnimationFrame(() => {
					this.$refs.observer.reset();
				});
				//raise event to reset other custom form components
				this.$EventBus.$emit("resetForm");
			},
		},
		watch: {
		},
		async mounted() {
		},
		async created() {
		},
	};
</script>
<style scoped>
</style>
