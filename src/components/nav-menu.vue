<template>
	<header>
		<div>vue2.0 × vue-router2.0  SPAハンズオン</div>
		<nav>
			<router-link class="link" to="/search">検索</router-link>
			<router-link class="link" to="/joined">参加</router-link>
			<router-link class="link" to="/holding">開催</router-link>
		</nav>
	</header>
</template>

<style scoped>
nav {
	display: flex;
}

a {
	background-color: #41b883; 
	color: #35495e;
	text-decoration: none;
	flex:1;
	text-align: center;
}

.router-link-active {
	border-bottom: solid 4px #35495e;
}
</style>