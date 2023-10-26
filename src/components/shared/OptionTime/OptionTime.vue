<script setup lang="ts">
	import { inject, ref } from 'vue';
	import type { Provide } from '../../../interfaces/Provide';
	import './OptionTime.css';

	interface Props {
		text?: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		text: 'Default',
	});

	const state = inject<Provide>('state');
	const current = ref(state?.currentState);
</script>

<template>
	<span
		class="option-time"
		:class="{ active: current === text.toLowerCase() }"
		@click="state?.updateDashboard(props.text)"
		>{{ props.text }}</span
	>
</template>
