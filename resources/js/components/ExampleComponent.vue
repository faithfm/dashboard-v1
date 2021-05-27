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
			<v-container>
				<v-card class="ma-4 pa-8" min-height="400px">
					<v-card-title>Coming Soon</v-card-title>
					<v-card-text
						>We’re working hard to make this website available soon</v-card-text
					>
				</v-card></v-container
			>
		</v-main>
	</v-app>
</template>
<script>
export default {
	data: () => ({
		app: LaravelAppGlobals,
	}),
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