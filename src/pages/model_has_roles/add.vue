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
                                        <div class="text-h6 text-primary">Add New Model Has Roles</div>
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
                                                    Role Id *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'role_id')"  api-path="components_data/role_id_option_list"  :query-params="filters" v-slot="req">
                                                        <ValidationProvider :rules="{required:true}" name="Role Id" v-slot="{ errors, invalid, validated }">
                                                            <q-select   :loading="req.loading"  outlined dense  ref="ctrlrole_id" emit-value map-options  v-model="formData.role_id" :options="req.response" label="Role Id"  :error="invalid && validated" :error-message="errors[0]" >
                                                            </q-select> 
                                                        </ValidationProvider>
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Model Type *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Model Type" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlmodel_type" v-model.trim="formData.model_type"  label="Model Type" type="text" placeholder="Enter Model Type"   list="model_type_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="model_type_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Model Id *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Model Id" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlmodel_id" v-model.trim="formData.model_id"  label="Model Id" type="number" placeholder="Enter Model Id"   step="any" list="model_id_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="model_id_list">
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
		name: 'addModelhasrolesPage',
		components: {
		},
		mixins: [PageMixin, AddPageMixin ],
		props:{
			pageName : {
				type : String,
				default : 'model_has_roles',
			},
			routeName : {
				type : String,
				default : 'model_has_rolesadd',
			},
			apiPath : {
				type : String,
				default : 'model_has_roles/add',
			},
		},
		data() {
            return {
				formData: {
					role_id: "", model_type: "", model_id: "", 
				},
			}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Add New Model Has Roles"
				}
			},
		},
		meta () {
			return {
				title: this.pageTitle
			}
		},
		methods: {
			...mapActions('model_has_roles', ['saveRecord']),
			async startSaveRecord(){
				const isFormValid = await this.$refs.observer.validate();
				if(isFormValid){
					this.saving = true;
					let payload = this.normalizedFormData();
					let url = this.apiUrl;
					let data = { url, payload  }
					this.saveRecord(data).then((response) => {
						this.record = response.data ?? {};
						this.id = this.record['model_id'] ?? null;
						this.saving = false;
						this.resetForm();
						this.closeDialogs();// close page dialog that if opened
						this.flashMsg(this.msgAfterSave);
						this.$emit("submitted", this.record);
						if(this.redirect) this.navigateTo(`/model_has_roles`);
					},
					 (response) => {
						this.saving = false;
						this.showPageRequestError(response);
					});
				}
			},
			resetForm (){
				this.formData = {role_id: "", model_type: "", model_id: "", };
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
