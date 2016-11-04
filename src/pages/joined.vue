<template>
	<div>
		<EventList :events="events"></EventList>
	</div>
</template>

<script>
import userMixin from '../mixins/user-mixin.js'
import EventList from '../components/event-list.vue'
import { getEvents } from '../api.js'

export default {
	mixins: [ userMixin ],
	data(){
		return {
			events: []
		}
	},
	created() {
		getEvents({
			nickname: this.userName
		}).then((res) => {
			this.$set(this, 'events', res.events)
		})
	},
	components: {
		EventList
	}
}
</script>