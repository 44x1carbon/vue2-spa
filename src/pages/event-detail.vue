<template>
	<div v-html="event.description"></div>
</template>

<script>
import { getEvents } from '../api.js'

export default {
	data(){
		return {
			event: null
		}
	},
	created() {
		getEvents({
			event_id: this.$route.params.id
		}).then((res) => {
			this.$set(this, 'event', res.events[0])
		})
	}
}
</script>