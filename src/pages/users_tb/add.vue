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
                                        <div class="text-h6 text-primary">Add New Users Tb</div>
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
                                                    Firstname *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <check-duplicate v-model="formData.firstname" check-path="components_data/users_tb_firstname_exist/" v-slot="checker">
                                                    <ValidationProvider :rules="{required:true}" name="Firstname" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlfirstname" v-model.trim="formData.firstname"  label="Firstname" type="text" placeholder="Enter Firstname"   list="firstname_list"    
                                                        class="" :error="(invalid && validated) || checker.exist" :error-message="errors[0] || 'Not available'">
                                                        </q-input>
                                                        <datalist id="firstname_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                    </check-duplicate>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Email *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <check-duplicate v-model="formData.email" check-path="components_data/users_tb_email_exist/" v-slot="checker">
                                                    <ValidationProvider :rules="{required:true, email:true}" name="Email" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlemail" v-model.trim="formData.email"  label="Email" type="email" placeholder="Enter Email"   list="email_list"    
                                                        class="" :error="(invalid && validated) || checker.exist" :error-message="errors[0] || 'Not available'">
                                                        </q-input>
                                                        <datalist id="email_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                    </check-duplicate>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Password *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Password" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlpassword" v-model="formData.password"  label="Password" :type="isPwd ? 'password' : 'text'" placeholder="Enter Password"   list="password_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        <template v-slot:append>
                                                            <q-icon
                                                            :name="isPwd ? 'visibility_off' : 'visibility'"
                                                            class="cursor-pointer"
                                                            @click="isPwd = !isPwd"
                                                            />
                                                        </template>
                                                        </q-input>
                                                        <datalist id="password_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Confirm Password *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true, is: formData.password}" name="Confirm Password" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlconfirmpassword" v-model="formData.confirm_password" :type="isCPwd ? 'password' : 'text'" label="Confirm Password" placeholder="Confirm Password" :error="invalid && validated" :error-message="errors[0]" >
                                                        <template v-slot:append>
                                                            <q-icon
                                                            :name="isCPwd ? 'visibility_off' : 'visibility'"
                                                            class="cursor-pointer"
                                                            @click="isCPwd = !isCPwd"
                                                            />
                                                        </template>
                                                        </q-input>
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
                                                        </div>
                                                        <!--photoDropOptions-->
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Email Verified At 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{}" name="Email Verified At" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  v-model.trim="formData.email_verified_at" :error="invalid && validated" :error-message="errors[0]"   >
                                                        <template v-slot:prepend>
                                                            <q-icon name="date_range" class="cursor-pointer">
                                                            <q-popup-proxy transition-show="scale" transition-hide="scale">
                                                            <q-date     mask="YYYY-MM-DD HH:mm" v-model="formData.email_verified_at" />
                                                            </q-popup-proxy>
                                                            </q-icon>
                                                        </template>
                                                        <template v-slot:append>
                                                            <q-icon name="access_time" class="cursor-pointer">
                                                            <q-popup-proxy transition-show="scale" transition-hide="scale">
                                                            <q-time v-model="formData.email_verified_at" mask="YYYY-MM-DD HH:mm" />
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
		name: 'addUserstbPage',
		components: {
		},
		mixins: [PageMixin, AddPageMixin ],
		props:{
			pageName : {
				type : String,
				default : 'users_tb',
			},
			routeName : {
				type : String,
				default : 'users_tbadd',
			},
			apiPath : {
				type : String,
				default : 'users_tb/add',
			},
		},
		data() {
            return {
				formData: {
					firstname: "", email: "", password: "", confirm_password: "", photo: "", email_verified_at: "", 
				},
				email_verified_atPicker:false,
			}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Add New Users Tb"
				}
			},
		},
		meta () {
			return {
				title: this.pageTitle
			}
		},
		methods: {
			...mapActions('users_tb', ['saveRecord']),
			async startSaveRecord(){
				const isFormValid = await this.$refs.observer.validate();
				if(isFormValid){
					this.saving = true;
					let payload = this.normalizedFormData();
					let url = this.apiUrl;
					let data = { url, payload  }
					this.saveRecord(data).then((response) => {
						this.record = response.data ?? {};
						this.id = this.record['user_id'] ?? null;
						this.saving = false;
						this.resetForm();
						this.closeDialogs();// close page dialog that if opened
						this.flashMsg(this.msgAfterSave);
						this.$emit("submitted", this.record);
						if(this.redirect) this.navigateTo(`/users_tb`);
					},
					 (response) => {
						this.saving = false;
						this.showPageRequestError(response);
					});
				}
			},
			resetForm (){
				this.formData = {firstname: "", email: "", password: "", confirm_password: "", photo: "", email_verified_at: "", };
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
