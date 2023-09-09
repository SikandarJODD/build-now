<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	let projectTech = ['React Js', 'Mongo DB', 'Node Js', 'Express Js', 'Tailwind CSS', 'Vercel'];
	let colors = ['#9ceaef', '#a2d2ff', '#ffafcc', '#cdb4db', '#80ed99', '#affc41'];
	let colorss = [];
</script>

<div class="bg-white border border-primary px-3 py-5">
	<h1 class="text-3xl font-bold w-fit px-0">Coding Dev</h1>
	<div class="flex flex-wrap gap-2 my-2">
		{#each projectTech as item, i}
			<Badge variant="outline" style="background:{colors[i % colors.length]}">{item}</Badge>
		{/each}
	</div>
	<div class="my-2 mx-1">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi animi facere amet
			repudiandae voluptate iste magnam quas libero. Animi officia dolorem rerum veritatis illum,
			doloribus maxime numquam facere alias? Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Esse autem praesentium repudiandae fugit nisi eius. Sequi ab repellat harum quis
			molestias obcaecati voluptatum omnis iure nostrum, est tenetur! Officiis, numquam!
		</p>
	</div>
	<div class="flex gap-2 justify-end">
		<Button>View Project</Button>
		<Button>Github</Button>
	</div>
</div>

<style>
	h1 {
		position: relative;
		z-index: 1;
	}

	h1::before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 0;
		bottom: 0;
		left: -0.1em;
		right: -0.25em;
		border-radius: 0px 10px 10px 0px;
		background-color: #0fb3ffff;
		transform-origin: center right;
		transform: scaleX(0);
		transition: transform 0.2s ease-in-out;
	}

	h1:hover::before {
		transform: scaleX(1.05);
		transform-origin: center left;
	}
</style>
