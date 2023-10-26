<script setup lang="ts">
	import { ref, provide } from 'vue';
	import UserCard from './components/UserCard/UserCard.vue';
	import ActivityCard from './components/ActivityCard/ActivityCard.vue';

	const activities = ref([]);
	const currentState = ref<string>('weekly');

	const getActivitiesByUser = async () => {
		const result = await fetch('../src/db/data.json');
		activities.value = await result.json();
	};

	getActivitiesByUser();

	const updateDashboard = (stateChange: string): void => {
		currentState.value = stateChange.toLowerCase();
	};

	provide('state', {
		currentState,
		updateDashboard,
	});
</script>

<template>
	<div class="dashboard">
		<UserCard />
		<div class="activities">
			<ActivityCard v-for="activity in activities" :activity="activity" />
		</div>
	</div>
</template>

<style scoped>
	.dashboard {
		margin: 200px auto 0;

		display: flex;
		align-items: center;
		justify-content: center;
		column-gap: 4rem;
		position: relative;
	}

	.activities {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		row-gap: 3rem;
		column-gap: 3rem;
		position: relative;
		top: 20px;
	}

	@media (max-width: 1200px) {
		.dashboard {
			flex-direction: column;
			margin: 60px auto;
		}

		.activities {
			margin-top: 60px;
			grid-template-columns: 1fr;
			gap: 4rem;
		}
	}
</style>
