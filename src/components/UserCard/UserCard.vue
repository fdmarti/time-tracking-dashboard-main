<script setup lang="ts">
	import './UserCard.css';
	import OptionTime from '../shared/OptionTime/OptionTime.vue';

</script>

<template>
	<div class="card-user">
		<section class="user-info">
			<img class="user-img" src="/images/image-jeremy.png" alt="user image" />
			<section class="text-user">
				<span class="report-us">Report for</span>
				<span class="user-name">Jeremy Robson</span>
			</section>
		</section>
		<section class="user-time">
			<OptionTime text="Daily" />
			<OptionTime text="Weekly"/>
			<OptionTime text="Monthly" />
		</section>
	</div>
</template>
