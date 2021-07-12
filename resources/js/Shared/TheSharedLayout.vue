<template>
	<v-app>
		<v-app-bar
			:clipped-left="$vuetify.breakpoint.lgAndUp"
			app
			color="blue darken-3"
			dark
		>
			<v-toolbar-title style="width: 300px" class="ml-0 pl-4">
				<span>{{ app.config.name }}</span>
			</v-toolbar-title>
			<v-text-field
				flat
				solo-inverted
				hide-details
				prepend-inner-icon="mdi-magnify"
				label="Search"
				class="hidden-sm-and-down"
			></v-text-field>
			<v-spacer></v-spacer>

			<template v-if="app.guest">
				<v-btn href="/login">Login</v-btn>
			</template>

			<template v-else>
				<span class="mx-1">{{ app.user.name }}&nbsp;</span>
				<v-btn @click="logout()">Logout</v-btn>
			</template>
		</v-app-bar>
		<v-main>
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
export default {
	data() {
		return {};
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