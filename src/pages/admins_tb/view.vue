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
                                        <div class="text-h6 text-primary">Admins Tb Details</div>
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
                    <div class="col comp-grid" >
                        <q-card  :flat="isSubPage" class=" nice-shadow-18">
                            <div >
                                <div class="relative-position" style="min-height:100px">
                                    <template v-if="!loading && item">
                                        <div class="row q-col-gutter-x-md">
                                            <div class="col">
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Admin Id: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.admin_id }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Firstname: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.firstname }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Lastname: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.lastname }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Email: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.email }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Username: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.username }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Admin Type: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.admin_type }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Status: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.status }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Reg Date: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.reg_date }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Deleted: </q-item-label>
                                                        <q-item-label class="text-bold">{{ item.deleted }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section>
                                                        <q-item-label caption>Photo: </q-item-label>
                                                        <q-item-label class="text-bold">
                                                            <image-viewer image-size="large" image-preview-size="" :src="item.photo" width="400px" height="400px" :num-display="1">
                                                            </image-viewer>
                                                        </q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-card-actions class="row q-col-gutter-xs justify-end">
                                                    <q-btn icon="menu" padding="xs" round flat color="grey">
                                                        <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                            <q-list dense rounded nav>
                                                                <q-item link clickable v-ripple :to="`/admins_tb/edit/${item.admin_id}`">
                                                                    <q-item-section>
                                                                        <q-icon color="positive"  size="sm" name="edit"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Edit</q-item-section>
                                                                </q-item>
                                                                <q-item link clickable v-ripple @click="deleteItem(item.admin_id)">
                                                                    <q-item-section>
                                                                        <q-icon color="negative"  size="sm" name="clear"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Delete</q-item-section>
                                                                </q-item>
                                                            </q-list>
                                                        </q-menu>
                                                    </q-btn>
                                                </q-card-actions>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-if="loading">
                                        <div class="q-pa-sm text-center">
                                            <q-inner-loading :showing="loading">
                                                <q-spinner :size="40" color="primary" indeterminate></q-spinner>
                                            </q-inner-loading>
                                        </div>
                                    </template>
                                </div>
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
	import { ViewPageMixin } from "../../mixins/viewpage.js";
	import { mapActions, mapGetters, mapState } from "vuex";
	export default {
		name: 'viewAdminstbPage',
		components: {
		},
		mixins: [PageMixin, ViewPageMixin ],
		props: {
			pageName: {
				type : String,
				default : 'admins_tb',
			},
			idName: {
				type: String,
				default: 'admin_id',
			},
			routeName : {
				type : String,
				default : 'admins_tbview',
			},
			pagePath: {
				type : String,
				default : 'admins_tb/view',
			},
			apiPath: {
				type : String,
				default : 'admins_tb/view',
			},
		},
		data() {
            return {
				item: {
					default :{
					},
				},
			}
		},
		computed: {
			pageTitle:{
				get: function () {
					return "Admins Tb Details"
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
		meta() {
			return {
				title: this.pageTitle
			}
		},
		methods: {
			...mapActions("admins_tb", [ "fetchRecord", "deleteRecord"]),
		},
		watch: {
			$route (to, from){
				//only fetch data when navigated to this page
				if(to.name == this.routeName){
					this.load();
				}
			},
		},
		async mounted() {
		},
		async created() {
		},
	};
</script>
<style scoped>
</style>
