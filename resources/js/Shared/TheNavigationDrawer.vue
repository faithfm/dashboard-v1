<template>
	<v-navigation-drawer app :value="drawer" clipped>
		<v-list dense>
			<template v-for="item in items">
				<v-list-group
					v-if="item.children"
					:key="item.text"
					v-model="item.active"
					prepend-icon="mdi-view-dashboard"
				>
					<template v-slot:activator>
						<v-list-item-content>
							<v-list-item-title>{{ item.text }}</v-list-item-title>
						</v-list-item-content>
					</template>
					<v-list-item
						v-for="(child, i) in item.children"
						:key="i"
						link
						:href="child.href"
						class="color: cyan lighten-5"
					>
						<v-list-item-action v-if="child.icon">
							<v-icon>{{ child.icon }}</v-icon>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title>{{ child.text }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-group>
				<v-list-item
					v-else
					:key="item.text"
					link
					:to="item.to"
					:href="item.href"
				>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{ item.text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</template>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	props: {
		drawer: Boolean,
	},
	data() {
		return {
			items: [
				{ icon: "mdi-home", text: "Home", href: "/" },
				{ icon: "mdi-tag-multiple-outline", text: "Free Offers", href: "/" },
				{ icon: "mdi-playlist-edit", text: "Generate Playlist", href: "/" },
				{
					active: false,
					text: "Livestream Dashboard",
					children: [
						{
							icon: "mdi-view-dashboard-outline",
							text: "Adelaide - Dashboard",
							href: "/",
						},
						{
							icon: "mdi-view-dashboard-outline",
							text: "Newcastle - Dashboard",
							href: "/",
						},
						{
							icon: "mdi-view-dashboard-outline",
							text: "Tasmania - Dashboard",
							href: "/",
						},
					],
				},
				{ icon: "mdi-pulse", text: "Live Stream Status", href: "" },
				{ icon: "mdi-playlist-play", text: "Playlists", href: "/" },
				{ icon: "mdi-monitor", text: "Site Monitor", href: "/" },
			],
		};
	},
};
</script>