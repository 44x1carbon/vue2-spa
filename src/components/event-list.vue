<template>
	<div>
		<div class="event-list">			
			<Event v-for="event in events" :event="event"></Event>
		</div>
	</div>
</template>

<script>
import Event from './event.vue'
import { getEvents } from '../api.js'

export default {
	props: {
		events: {
			type: Array,
			required: true,
			twoWay: true
		}
	},
	components: {
		Event
	}
}
</script>