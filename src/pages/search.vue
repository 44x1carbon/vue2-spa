<template>
	<div>
		<form>
			<input type="text" v-model="keyword" @keyup.enter="searchEvents(keyword)">
			<button type="button"  @click="searchEvents(keyword)">検索</button>
		</form>
		<div v-show="loading">読み込み中...</div>
		<EventList :events="events"></EventList>
	</div>
</template>

<script>
import EventList from '../components/event-list.vue'
import { getEvents } from '../api.js'

export default {
	data(){
		return {
			events: [],
			keyword: '',	//入力されているキーワード
			dispKeyword: '',//表示中のキーワード
			loading: false
		}
	},
	created() {
		this.loading = true
		getEvents().then((res) => {
			this.$set(this, 'events', res.events)
			this.loading = false
		})
	},
	methods: {
		searchEvents(keyword) {
			this.loading = true
			getEvents({ keyword }).then((res) => {
				this.$set(this, 'events', res.events)
				this.$set(this, 'dispKeyword', keyword)
				this.loading = false
			})	
		}
	},
	components: {
		EventList
	}
}
</script>