<script lang="ts">
	import type { PageData } from './$types';

	type Props = { data: PageData };

	const { data }: Props = $props();
	const { categories } = $derived(data);
</script>

<div>
	<h1>All Categories</h1>
	{#if categories}
		<ul>
			{#each categories as category}
				<li>
					<a href="/categories/{category.slug}">{category.title}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
