<template>
	<v-app>
		<v-app-bar
			:clipped-left="$vuetify.breakpoint.mdAndUp"
			app
			color="cyan darken-4"
			dark
			flat
		>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-img
				src="/faithfm-white-R4.png"
				alt="Faith FM logo"
				max-width="125"
				class="d-flex align-self-center"
			></v-img>
			
			<v-spacer class="d-none d-sm-flex"></v-spacer>

			<inertia-link
				href="/"
				as="v-toolbar-title"
				class="d-flex align-self-center"
			>
				<v-toolbar-title class="hidden-sm-and-down">
					{{ app.config.name }}
				</v-toolbar-title>
			</inertia-link>

			<v-spacer class="d-none d-sm-flex"></v-spacer>
			<v-text-field
				flat
				solo-inverted
				hide-details
				prepend-inner-icon="mdi-magnify"
				label="Search"
				class="d-none d-sm-flex align-self-center"
			></v-text-field>
			<v-spacer></v-spacer>

			<template v-if="app.guest">
				<v-btn class="d-flex align-self-center" href="/login">Login</v-btn>
			</template>

			<template v-else>
				<span class="mx-1 text-body-1 d-none d-sm-flex align-self-center">{{
					app.user.name
				}}</span>
				<v-btn @click="logout()" class="d-flex align-self-center">Logout</v-btn>
			</template>
		</v-app-bar>
		<v-main>
			<the-navigation-drawer :drawer="drawer" />
			<v-container v-if="app.guest">
				<v-card class="ma-4 pa-8" min-height="400px">
					<v-card-title>Not Logged In</v-card-title>
					<v-card-text>You are not logged in.</v-card-text>
				</v-card>
			</v-container>

			<slot v-else-if="userPermission" />

			<v-container v-else>
				<v-card class="ma-4 pa-8" min-height="400px">
					<v-card-title>No Access</v-card-title>
					<v-card-text>
						Your user account does not currently have access to the
						{{ app.name }} system.<br /><br />
						Please contact a system administator if you need access to this
						system - providing the email address you used to sign-up / log-in.
					</v-card-text>
				</v-card>
			</v-container>
		</v-main>
	</v-app>
</template>
<script>
import TheNavigationDrawer from "./TheNavigationDrawer.vue";

export default {
	components: {
		TheNavigationDrawer,
	},
	data() {
		return {
			drawer: false,
		};
	},
	computed: {
		app() {
			return this.$page.props.LaravelAppGlobals;
		},
		userPermission() {
			return this.app.user.permissions.some((p) => p.permission === "use-app");
		},
	},
	methods: {
		login() {
			this.form.post(this.route("login.store"));
		},
		logout() {
			document.getElementById("logout-form").submit();
		},
	},
};
</script>