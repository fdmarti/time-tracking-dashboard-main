<script setup lang="ts">
	import { inject } from 'vue';
	import type { Provide } from '../../interfaces/Provide';
	import './ActivityCard.css';

	interface Props {
		activity: {
			title: string;
			imageName: string;
			timeframes: {
				daily: {
					current: number;
					previous: number;
				};
				weekly: {
					current: number;
					previous: number;
				};
				monthly: {
					current: number;
					previous: number;
				};
			};
		};
	}

	const props = defineProps<Props>();
	const state = inject<Provide>('state');
	//@ts-ignore
	const { currentState } = state;
</script>

<template>
	<div class="activity-card">
		<div class="backgoround-banner" :class="props.activity.title.toLowerCase()">
			<img
				:src="`images/${props.activity.imageName}.svg`"
				alt=" icon default in card activity"
			/>
		</div>
		<section class="content-card">
			<section class="title-card">
				<span class="title"> {{ props.activity.title }}</span>
				<img src="images/icon-ellipsis.svg" alt=" dot options" />
			</section>
			<section class="time-current-block">
				<span v-if="currentState === 'daily'">
					{{ props.activity.timeframes.daily.current }}hrs
				</span>
				<span v-if="currentState === 'weekly'">
					{{ props.activity.timeframes.weekly.current }}hrs
				</span>
				<span v-if="currentState === 'monthly'">
					{{ props.activity.timeframes.monthly.current }}hrs
				</span>
			</section>
			<section class="time-previous-block">
				<span v-if="currentState === 'daily'">
					Last day {{ props.activity.timeframes.daily.previous }}hrs
				</span>
				<span weekan v-if="currentState === 'weekly'">
					Last week {{ props.activity.timeframes.weekly.previous }}hrs
				</span>
				<span v-if="currentState === 'monthly'">
					Last month {{ props.activity.timeframes.monthly.previous }}hrs
				</span>
			</section>
		</section>
	</div>
</template>
