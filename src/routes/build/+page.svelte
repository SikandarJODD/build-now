<script lang="ts">
	import { enhance } from '$app/forms';
	import ProfileBox from '$lib/build/profileBox.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>


<div class="container">
	<ProfileBox />
</div>
