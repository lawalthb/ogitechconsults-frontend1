<template>
    <div class="main-page">
        <section class="page-section q-mb-md" >
            <div class="container">
                <div class="row q-col-gutter-x-md">
                    <div class="col-md-9 col-12 comp-grid" >
                        <div class="">
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
                                                                Matric No 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Matric No" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlmatric_no" v-model.trim="formData.matric_no"  label="Matric No" type="text" placeholder="Enter Matric No"   list="matric_no_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="matric_no_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                                                Phone 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Phone" v-slot="{ errors, invalid, validated }">
                                                                    <q-input outlined dense  ref="ctrlphone" v-model.trim="formData.phone"  label="Phone" type="text" placeholder="Enter Phone"   list="phone_list"    
                                                                    class="" :error="invalid && validated" :error-message="errors[0]">
                                                                    </q-input>
                                                                    <datalist id="phone_list">
                                                                    <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                                    </datalist>
                                                                </ValidationProvider>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-sm-3 col-12">
                                                                Department *
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <api-data-source @loaded="response => mapOptionField(response, 'department')"  api-path="components_data/department_id_option_list_2"  :query-params="filters" v-slot="req">
                                                                    <ValidationProvider :rules="{required:true}" name="Department" v-slot="{ errors, invalid, validated }">
                                                                        <q-select   :loading="req.loading"  outlined dense  ref="ctrldepartment" emit-value map-options  v-model="formData.department" :options="req.response" label="Department"  :error="invalid && validated" :error-message="errors[0]" >
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
                                                                Gender 
                                                            </div>
                                                            <div class="col-sm-9 col-12">
                                                                <ValidationProvider :rules="{}" name="Gender" v-slot="{ errors, invalid, validated }">
                                                                    <q-field :error="invalid && validated" :error-message="errors[0]"  borderless  >
                                                                    <q-option-group ref="ctrlgender" v-model="formData.gender" :options="$menus.genderItems"  :error="invalid && validated" :error-message="errors[0]"   size="md" ></q-option-group>
                                                                    </q-field>
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
                        </div>
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
		name: 'accounteditUserstbPage',
		components: {
		},
		mixins: [PageMixin, EditPageMixin ],
		props: {
			pageName: {
				type: String,
				default: 'users_tb',
			},
			idName: {
				type: String,
				default: 'user_id',
			},
			routeName: {
				type: String,
				default: 'users_tbaccountedit',
			},
			pagePath: {
				type : String,
				default : 'account/edit',
			},
			apiPath: {
				type: String,
				default: 'account/edit',
			},
		},
		data() {
            return {
				formData: {
					matric_no: "", firstname: "", lastname: "", phone: "", department: "", level: "", gender: "", photo: "", 
				},
        	}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "My Account"
				}
			},
			currentRecord: {
				get: function () {
					return this.$store.getters["users_tb/currentRecord"];
				},
				set: function (value) {
					this.$store.commit("users_tb/setCurrentRecord", value);
				},
			},
		},
		meta () {
			return {
				title: this.pageTitle // set browser page title
			}
		},
		methods: {
			...mapActions('users_tb', ['updateRecord', 'fetchRecord']),
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
							location.reload();
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
				this.formData = {matric_no: "", firstname: "", lastname: "", phone: "", department: "", level: "", gender: "", photo: "", };
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
