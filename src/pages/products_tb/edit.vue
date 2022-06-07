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
                                        <div class="text-h6 text-primary">Edit Products Tb</div>
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
                                                                Product Name *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Product Name" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlproduct_name" v-model.trim="formData.product_name"  label="Product Name" type="text" placeholder="Enter Product Name"   list="product_name_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="product_name_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Unit 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Unit" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlunit" v-model.trim="formData.unit"  label="Unit" type="text" placeholder="Enter Unit"   list="unit_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="unit_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Description *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Description" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrldescription" rows="5"  v-model="formData.description" placeholder="Enter Description"    type="textarea"  :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Image *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Image" v-slot="{ errors, invalid, validated }">
                                                                    <div class="q-mb-sm">
                                                                        <q-uploader-input :max-files="1" :max-file-size="3" accept=".jpg,.png,.gif,.jpeg" :multiple="false" square flat bordered style="width:100%" label="Choose files or drop files here" upload-path="fileuploader/upload/image" v-model="formData.image"></q-uploader-input>
                                                                        <small class="q-pa-sm text-negative" v-if="invalid && validated">{{errors[0]}}</small>
                                                                        <div class="q-pa-xs"><file-viewer removable v-model="formData.image"></file-viewer></div>
                                                                    </div>
                                                                </ValidationProvider>
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
                                                                Department Id *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <api-data-source @loaded="response => mapOptionField(response, 'department_id')"  api-path="components_data/department_id_option_list"  :query-params="filters" v-slot="req">
                                                                    <ValidationProvider :rules="{required:true}" name="Department Id" v-slot="{ errors, invalid, validated }">
                                                                        <q-select   :loading="req.loading"  outlined dense  ref="ctrldepartment_id" emit-value map-options  v-model="formData.department_id" :options="req.response" label="Department Id"  :error="invalid && validated" :error-message="errors[0]" >
                                                                        </q-select> 
                                                                    </ValidationProvider>
                                                                </api-data-source>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Level 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Level" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrllevel" v-model.trim="formData.level"  label="Level" type="text" placeholder="Enter Level"   list="level_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="level_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Sell Rate *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Sell Rate" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlsell_rate" v-model.trim="formData.sell_rate"  label="Sell Rate" type="number" placeholder="Enter Sell Rate"   step="0.1" list="sell_rate_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="sell_rate_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Purchase Rate *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Purchase Rate" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlpurchase_rate" v-model.trim="formData.purchase_rate"  label="Purchase Rate" type="number" placeholder="Enter Purchase Rate"   step="0.1" list="purchase_rate_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="purchase_rate_list">
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
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Available For *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Available For" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlavailable_for" v-model.trim="formData.available_for"  label="Available For" type="text" placeholder="Enter Available For"   list="available_for_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="available_for_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Admin Id *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Admin Id" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrladmin_id" v-model.trim="formData.admin_id"  label="Admin Id" type="number" placeholder="Enter Admin Id"   step="any" list="admin_id_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="admin_id_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Vendor Email 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{email:true}" name="Vendor Email" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlvendor_email" v-model.trim="formData.vendor_email"  label="Vendor Email" type="email" placeholder="Enter Vendor Email"   list="vendor_email_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="vendor_email_list">
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
                                                                <ValidationProvider :rules="{required:true}" name="Qty" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlqty" v-model.trim="formData.qty"  label="Qty" type="number" placeholder="Enter Qty"   step="any" list="qty_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="qty_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
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
		name: 'editProductstbPage',
		components: {
		},
		mixins: [PageMixin, EditPageMixin ],
		props: {
			pageName: {
				type: String,
				default: 'products_tb',
			},
			idName: {
				type: String,
				default: 'product_id',
			},
			routeName: {
				type: String,
				default: 'products_tbedit',
			},
			pagePath: {
				type : String,
				default : 'products_tb/edit',
			},
			apiPath: {
				type: String,
				default: 'products_tb/edit',
			},
		},
		data() {
            return {
				formData: {
					product_name: "", unit: "", description: "", image: "", vendor_id: "", department_id: "", level: "", sell_rate: "", purchase_rate: "", status: "1", available_for: "", admin_id: "", vendor_email: "", qty: "", 
				},
        	}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Edit Products Tb"
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
		meta () {
			return {
				title: this.pageTitle // set browser page title
			}
		},
		methods: {
			...mapActions('products_tb', ['updateRecord', 'fetchRecord']),
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
							if(this.redirect) this.navigateTo(`/products_tb`);
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
				this.formData = {product_name: "", unit: "", description: "", image: "", vendor_id: "", department_id: "", level: "", sell_rate: "", purchase_rate: "", status: "1", available_for: "", admin_id: "", vendor_email: "", qty: "", };
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
