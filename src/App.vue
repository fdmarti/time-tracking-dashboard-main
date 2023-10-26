<script setup lang="ts">
	import UserActivities from './composables/useActivities';
	import UserCard from './components/UserCard/UserCard.vue';
	import ActivityCard from './components/ActivityCard/ActivityCard.vue';

	const { activities } = UserActivities();
</script>

<template>
	<div class="dashboard">
		<UserCard />
		<div class="activities">
			<ActivityCard v-for="activity in activities" :activity="activity" />
		</div>
	</div>
</template>
