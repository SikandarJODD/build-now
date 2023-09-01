<script>
	export let data = '';
	// Data from Server - Table About
	let about = {
		positon: 'Full-Stack Developer',
		name: 'Saloni Ravi Maheshwari',
		email: 'code@gmail.com',
		socials: [
			{
				name: 'LinkedIn',
				img: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png',
				link: '/'
			},
			{
				name: 'Github',
				img: 'https://cdn-icons-png.flaticon.com/512/25/25657.png',
				link: '/'
			},
			{
				name: 'Twitter',
				img: 'https://cdn-icons-png.flaticon.com/512/3256/3256013.png',
				link: '/'
			},
			{
				name: 'Mail',
				img: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
				link: '/'
			}
		]
	};
	$: {
		if (Object.keys(data).length !== 0) {
			about.positon = data?.pos;
			about.name = data?.name;
			about.email = data?.email;
			about.socials[0].link = data?.linkedLink;
			about.socials[1].link = data?.githubLink;
			about.socials[2].link = data?.twitterLink;
			about.socials[3].link = data?.email;
		}
	}
</script>

<div class="md:py-7  md:px-5">
	<div
		class="shadow-md bg-gray-50 bgcolor md:shadow-md shadow-slate-500 md:h-40 rounded-xl p-5 flex flex-wrap items-center justify-center md:justify-between md:px-20"
	>
		<div class="md:hidden">
			<img
				class="w-full h-full rounded-xl md:hidden shadow-md"
				src="https://i.pinimg.com/736x/e2/2b/ed/e22bed3bdba0f328efdb3521e07bf823.jpg"
				alt=""
			/>
		</div>
		<div
			class="my-4 md:my-0 bgColorEmerge px-6 py-4 shadow-md shadow-slate-400/90 bg-white animate-in"
		>
			<h1 class="text-2xl md:text-4xl font-bold text-center md:text-left">{about.name}</h1>
			<h2 class="text-xl font-baloo text-center md:text-left text-blue-600">{about.positon}</h2>
		</div>
		<div class="p-3 px-6 rounded-xl hidden gap-x-6 shadowCode md:flex bg-slate-100">
			{#each about.socials as item}
				{#if item.name === 'Mail'}
					<a
						href="mailto:{about.email}"
						target="_blank"
						class="hover:scale-110 scale-95 duration-150 transition-all"
					>
						<img class="w-8 h-8" src={item.img} alt="socials" />
					</a>
				{:else if item.link !== ''}
					<a
						href={item.link}
						target="_blank"
						class="hover:scale-110 scale-95 duration-150 transition-all"
					>
						<img class="w-8 h-8" src={item.img} alt="socials" />
					</a>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2&display=swap');
	.shadowCode {
		border: 2px solid #1a202c;
		box-shadow: 4px 4px #1d2537;
	}
	:global(.font-baloo ){
		font-family: 'Baloo Bhaina 2', cursive;
	}
	.bgcolor {
		background-color: #e5e5f7;
		background-image: linear-gradient(#444cf7 1px, transparent 1px),
			linear-gradient(to right, #444cf7 1px, #ebebf5 1px);
		background-size: 21px 21px;
	}
	.bgColorEmerge {
		border: 2px solid #0a1013c8;
		border-radius: 10px;
	}
</style>
