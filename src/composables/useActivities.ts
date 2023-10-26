import { ref, provide } from 'vue';

const UserActivities = () => {
	const activities = ref([]);
	const currentState = ref<string>('weekly');

	const getActivitiesByUser = async () => {
		const result = await fetch('db/data.json');
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

	return {
		activities,
	};
};

export default UserActivities;
