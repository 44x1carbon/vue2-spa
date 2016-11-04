<template>
	<div class="event">
		<div class="event-title">
			<h2>{{ event.title }}</h2>
		</div>
		<div class="event-body">
			<div class="event-date">開催日：{{ formatDate('YYYY/MM/DD', event.started_at) }}</div>
			<div class="event-place">開催場所：{{ event.address }}</div>
			<router-link :to="{ path: 'event/' + event.event_id }">詳細</router-link>
		</div>
	</div>
</template>

<script>
import moment from 'moment'

export default {
	props: [ 'event' ],
	created() {
		moment.lang('ja', {
   			weekdays: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    		weekdaysShort: ['日','月','火','水','木','金','土'],
		})
	},
	methods: {
		formatDate(format,date) {
			let m = moment(date)
			return m.format(format)
		}
	}
}
</script>

<style scoped>
.event {
	border: solid 1px #657786;
	border-radius: 3px;
	margin: 8px 0px;
	padding: 8px;
}
.event-title h2 {
	font-size: 18px;
	color: #2c3e50;
}
</style>