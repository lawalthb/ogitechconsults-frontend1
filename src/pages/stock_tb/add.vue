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
                                        <div class="text-h6 text-primary">Add New Stock Tb</div>
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
                                                    Date 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{}" name="Date" v-slot="{ errors, invalid, validated }">
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
                                                    User Id 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{}" name="User Id" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrluser_id" v-model.trim="formData.user_id"  label="User Id" type="number" placeholder="Enter User Id"   step="any" list="user_id_list"    
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
                                                    Item Id *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'item_id')"  api-path="components_data/product_id_option_list"  :query-params="filters" v-slot="req">
                                                        <ValidationProvider :rules="{required:true}" name="Item Id" v-slot="{ errors, invalid, validated }">
                                                            <q-select   :loading="req.loading"  outlined dense  ref="ctrlitem_id" emit-value map-options  v-model="formData.item_id" :options="req.response" label="Item Id"  :error="invalid && validated" :error-message="errors[0]" >
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
                                                    <api-data-source @loaded="response => mapOptionField(response, 'vendor_id')"  api-path="components_data/vendor_id_option_list_2"  :query-params="filters" v-slot="req">
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
                                                    User Type *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="User Type" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrluser_type" v-model.trim="formData.user_type"  label="User Type" type="number" placeholder="Enter User Type"   step="any" list="user_type_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="user_type_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Item In *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Item In" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlitem_in" v-model.trim="formData.item_in"  label="Item In" type="number" placeholder="Enter Item In"   step="0.1" list="item_in_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="item_in_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Item Out *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Item Out" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlitem_out" v-model.trim="formData.item_out"  label="Item Out" type="number" placeholder="Enter Item Out"   step="0.1" list="item_out_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="item_out_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Item Balance *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Item Balance" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlitem_balance" v-model.trim="formData.item_balance"  label="Item Balance" type="number" placeholder="Enter Item Balance"   step="0.1" list="item_balance_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="item_balance_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Payment Id *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Payment Id" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlpayment_id" v-model.trim="formData.payment_id"  label="Payment Id" type="number" placeholder="Enter Payment Id"   step="any" list="payment_id_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="payment_id_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Status *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Status" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlstatus" v-model.trim="formData.status"  label="Status" type="number" placeholder="Enter Status"   step="any" list="status_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="status_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn type="submit"    :rounded="false"  color="primary"  no-caps  unelevated   :disabled="invalid" icon-right="send" :loading="saving">
                                            <q-spinner-oval slot="loading" /> Submit
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
		name: 'addStocktbPage',
		components: {
		},
		mixins: [PageMixin, AddPageMixin ],
		props:{
			pageName : {
				type : String,
				default : 'stock_tb',
			},
			routeName : {
				type : String,
				default : 'stock_tbadd',
			},
			apiPath : {
				type : String,
				default : 'stock_tb/add',
			},
		},
		data() {
            return {
				formData: {
					date: "", user_id: "", mat_no: "", item_id: "", vendor_id: "", user_type: "1", item_in: "", item_out: "", item_balance: "", payment_id: "", status: "", 
				},
				datePicker:false,
			}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Add New Stock Tb"
				}
			},
		},
		meta () {
			return {
				title: this.pageTitle
			}
		},
		methods: {
			...mapActions('stock_tb', ['saveRecord']),
			async startSaveRecord(){
				const isFormValid = await this.$refs.observer.validate();
				if(isFormValid){
					this.saving = true;
					let payload = this.normalizedFormData();
					let url = this.apiUrl;
					let data = { url, payload  }
					this.saveRecord(data).then((response) => {
						this.record = response.data ?? {};
						this.id = this.record['stock_id'] ?? null;
						this.saving = false;
						this.resetForm();
						this.closeDialogs();// close page dialog that if opened
						this.flashMsg(this.msgAfterSave);
						this.$emit("submitted", this.record);
						if(this.redirect) this.navigateTo(`/stock_tb`);
					},
					 (response) => {
						this.saving = false;
						this.showPageRequestError(response);
					});
				}
			},
			resetForm (){
				this.formData = {date: "", user_id: "", mat_no: "", item_id: "", vendor_id: "", user_type: "1", item_in: "", item_out: "", item_balance: "", payment_id: "", status: "", };
				requestAnimationFrame(() => {
					this.$refs.observer.reset();
				});
				this.updateFormData();
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
