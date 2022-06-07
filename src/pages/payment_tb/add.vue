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
                                        <div class="text-h6 text-primary">Add New Payment Tb</div>
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
                                                    Amount In *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Amount In" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlamount_in" v-model.trim="formData.amount_in"  label="Amount In" type="number" placeholder="Enter Amount In"   step="0.1" list="amount_in_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="amount_in_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Amount Out *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Amount Out" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlamount_out" v-model.trim="formData.amount_out"  label="Amount Out" type="number" placeholder="Enter Amount Out"   step="0.1" list="amount_out_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="amount_out_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Amount Balance *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Amount Balance" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlamount_balance" v-model.trim="formData.amount_balance"  label="Amount Balance" type="number" placeholder="Enter Amount Balance"   step="0.1" list="amount_balance_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="amount_balance_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cmment 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{}" name="Cmment" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlcmment" v-model.trim="formData.cmment"  label="Cmment" type="text" placeholder="Enter Cmment"   list="cmment_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="cmment_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
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
		name: 'addPaymenttbPage',
		components: {
		},
		mixins: [PageMixin, AddPageMixin ],
		props:{
			pageName : {
				type : String,
				default : 'payment_tb',
			},
			routeName : {
				type : String,
				default : 'payment_tbadd',
			},
			apiPath : {
				type : String,
				default : 'payment_tb/add',
			},
		},
		data() {
            return {
				formData: {
					vendor_id: "", amount_in: "", amount_out: "", amount_balance: "", cmment: "", date: "", 
				},
				datePicker:false,
			}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Add New Payment Tb"
				}
			},
		},
		meta () {
			return {
				title: this.pageTitle
			}
		},
		methods: {
			...mapActions('payment_tb', ['saveRecord']),
			async startSaveRecord(){
				const isFormValid = await this.$refs.observer.validate();
				if(isFormValid){
					this.saving = true;
					let payload = this.normalizedFormData();
					let url = this.apiUrl;
					let data = { url, payload  }
					this.saveRecord(data).then((response) => {
						this.record = response.data ?? {};
						this.id = this.record['payment_id'] ?? null;
						this.saving = false;
						this.resetForm();
						this.closeDialogs();// close page dialog that if opened
						this.flashMsg(this.msgAfterSave);
						this.$emit("submitted", this.record);
						if(this.redirect) this.navigateTo(`/payment_tb`);
					},
					 (response) => {
						this.saving = false;
						this.showPageRequestError(response);
					});
				}
			},
			resetForm (){
				this.formData = {vendor_id: "", amount_in: "", amount_out: "", amount_balance: "", cmment: "", date: "", };
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
