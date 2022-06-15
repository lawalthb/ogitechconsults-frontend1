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
                                        <div class="text-h6 text-primary">Edit Admins Tb</div>
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
                                                                Firstname *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Firstname" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlfirstname" v-model.trim="formData.firstname"  label="Firstname" type="text" placeholder="Enter Firstname"   list="firstname_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="firstname_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Lastname *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Lastname" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrllastname" v-model.trim="formData.lastname"  label="Lastname" type="text" placeholder="Enter Lastname"   list="lastname_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="lastname_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Email *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true, email:true}" name="Email" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlemail" v-model.trim="formData.email"  label="Email" type="email" placeholder="Enter Email"   list="email_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="email_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Username *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Username" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlusername" v-model.trim="formData.username"  label="Username" type="text" placeholder="Enter Username"   list="username_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="username_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Admin Type *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Admin Type" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrladmin_type" v-model.trim="formData.admin_type"  label="Admin Type" type="text" placeholder="Enter Admin Type"   list="admin_type_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="admin_type_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Status 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Status" v-slot="{ errors, invalid, validated }">
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
                                                                Deleted *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{required:true}" name="Deleted" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrldeleted" v-model.trim="formData.deleted"  label="Deleted" type="number" placeholder="Enter Deleted"   step="any" list="deleted_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="deleted_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Photo 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Photo" v-slot="{ errors, invalid, validated }">
                                                                    <div class="q-mb-sm">
                                                                        <q-uploader-input :max-files="1" :max-file-size="3" accept=".jpg,.png,.gif,.jpeg" :multiple="false" square flat bordered style="width:100%" label="Choose files or drop files here" upload-path="fileuploader/upload/photo" v-model="formData.photo"></q-uploader-input>
                                                                        <small class="q-pa-sm text-negative" v-if="invalid && validated">{{errors[0]}}</small>
                                                                        <div class="q-pa-xs"><file-viewer removable v-model="formData.photo"></file-viewer></div>
                                                                    </div>
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
		name: 'editAdminstbPage',
		components: {
		},
		mixins: [PageMixin, EditPageMixin ],
		props: {
			pageName: {
				type: String,
				default: 'admins_tb',
			},
			idName: {
				type: String,
				default: 'admin_id',
			},
			routeName: {
				type: String,
				default: 'admins_tbedit',
			},
			pagePath: {
				type : String,
				default : 'admins_tb/edit',
			},
			apiPath: {
				type: String,
				default: 'admins_tb/edit',
			},
		},
		data() {
            return {
				formData: {
					firstname: "", lastname: "", email: "lawalthb@gmail.com", username: "", admin_type: "sales_rep", status: "1", deleted: "0", photo: "", 
				},
        	}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Edit Admins Tb"
				}
			},
			currentRecord: {
				get: function () {
					return this.$store.getters["admins_tb/currentRecord"];
				},
				set: function (value) {
					this.$store.commit("admins_tb/setCurrentRecord", value);
				},
			},
		},
		meta () {
			return {
				title: this.pageTitle // set browser page title
			}
		},
		methods: {
			...mapActions('admins_tb', ['updateRecord', 'fetchRecord']),
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
							if(this.redirect) this.navigateTo(`/admins_tb`);
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
				this.formData = {firstname: "", lastname: "", email: "lawalthb@gmail.com", username: "", admin_type: "sales_rep", status: "1", deleted: "0", photo: "", };
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
