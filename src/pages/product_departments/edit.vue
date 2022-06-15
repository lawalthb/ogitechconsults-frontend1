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
                                        <div class="text-h6 text-primary">Edit Product Departments</div>
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
                                                                Department Id *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <api-data-source @loaded="response => mapOptionField(response, 'department_id')"  api-path="components_data/department_id_option_list_2"  :query-params="filters" v-slot="req">
                                                                    <ValidationProvider :rules="{required:true}" name="Department Id" v-slot="{ errors, invalid, validated }">
                                                                        <q-select   :loading="req.loading"  outlined dense  ref="ctrldepartment_id" emit-value map-options  v-model="formData.department_id" :options="req.response" label="Department Id"  :error="invalid && validated" :error-message="errors[0]" >
                                                                        </q-select> 
                                                                    </ValidationProvider>
                                                                </api-data-source>
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
		name: 'editProductdepartmentsPage',
		components: {
		},
		mixins: [PageMixin, EditPageMixin ],
		props: {
			pageName: {
				type: String,
				default: 'product_departments',
			},
			idName: {
				type: String,
				default: 'product_department_id',
			},
			routeName: {
				type: String,
				default: 'product_departmentsedit',
			},
			pagePath: {
				type : String,
				default : 'product_departments/edit',
			},
			apiPath: {
				type: String,
				default: 'product_departments/edit',
			},
		},
		data() {
            return {
				formData: {
					product_id: "", department_id: "", 
				},
        	}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Edit Product Departments"
				}
			},
			currentRecord: {
				get: function () {
					return this.$store.getters["product_departments/currentRecord"];
				},
				set: function (value) {
					this.$store.commit("product_departments/setCurrentRecord", value);
				},
			},
		},
		meta () {
			return {
				title: this.pageTitle // set browser page title
			}
		},
		methods: {
			...mapActions('product_departments', ['updateRecord', 'fetchRecord']),
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
							if(this.redirect) this.navigateTo(`/product_departments`);
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
				this.formData = {product_id: "", department_id: "", };
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
