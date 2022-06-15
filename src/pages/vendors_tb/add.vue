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
                                        <div class="text-h6 text-primary">Add New Vendors Tb</div>
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
                                                    Title *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Title" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrltitle" v-model.trim="formData.title"  label="Title" type="text" placeholder="Enter Title"   list="title_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="title_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Name *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{required:true}" name="Name" v-slot="{ errors, invalid, validated }">
                                                        <q-input outlined dense  ref="ctrlname" v-model.trim="formData.name"  label="Name" type="text" placeholder="Enter Name"   list="name_list"    
                                                        class="" :error="invalid && validated" :error-message="errors[0]">
                                                        </q-input>
                                                        <datalist id="name_list">
                                                        <option v-for="(menu, index) in $menus.product_nameItems" :key="index" :value="menu.value">{{ menu.label }}</option>
                                                        </datalist>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Email 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <ValidationProvider :rules="{email:true}" name="Email" v-slot="{ errors, invalid, validated }">
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
		name: 'addVendorstbPage',
		components: {
		},
		mixins: [PageMixin, AddPageMixin ],
		props:{
			pageName : {
				type : String,
				default : 'vendors_tb',
			},
			routeName : {
				type : String,
				default : 'vendors_tbadd',
			},
			apiPath : {
				type : String,
				default : 'vendors_tb/add',
			},
		},
		data() {
            return {
				formData: {
					title: "", name: "", email: "", department_id: "", status: "1", password: "$2y$10$j3/.1g7A1GREXIPPaoaHUO5r8LirGsQIYWPozTQNgN6DjswASmcIy", confirm_password: "", 
				},
			}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Add New Vendors Tb"
				}
			},
		},
		meta () {
			return {
				title: this.pageTitle
			}
		},
		methods: {
			...mapActions('vendors_tb', ['saveRecord']),
			async startSaveRecord(){
				const isFormValid = await this.$refs.observer.validate();
				if(isFormValid){
					this.saving = true;
					let payload = this.normalizedFormData();
					let url = this.apiUrl;
					let data = { url, payload  }
					this.saveRecord(data).then((response) => {
						this.record = response.data ?? {};
						this.id = this.record['vendor_id'] ?? null;
						this.saving = false;
						this.resetForm();
						this.closeDialogs();// close page dialog that if opened
						this.flashMsg(this.msgAfterSave);
						this.$emit("submitted", this.record);
						if(this.redirect) this.navigateTo(`/vendors_tb`);
					},
					 (response) => {
						this.saving = false;
						this.showPageRequestError(response);
					});
				}
			},
			resetForm (){
				this.formData = {title: "", name: "", email: "", department_id: "", status: "1", password: "$2y$10$j3/.1g7A1GREXIPPaoaHUO5r8LirGsQIYWPozTQNgN6DjswASmcIy", confirm_password: "", };
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
