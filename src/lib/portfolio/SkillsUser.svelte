<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Code2, DatabaseZap, Keyboard, QrCode } from 'lucide-svelte';
	import { onMount } from 'svelte';
	export let techdata = {
		lang: 'C++,python,java',
		framework: 'svelte,react js,flutter,vue js',
		database: 'SQL, Mongo DB,postgres SQL',
		others:
			'figma,github,gitlab,vercel,amazon web services,netlify, Miro, Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere Pro, Adobe Lightroom, Adobe InDesign, Adobe XD, Adobe Dimension, Adobe Dreamweaver, Adobe Animate, Adobe Audition, Adobe Character Animator, Adobe Bridge, Adobe Media Encoder, Adobe Prelude, Adobe Fuse, Adobe InCopy, Adobe Acrobat, Adobe Lightroom Classic, Adobe Captivate, Adobe Connect, Adobe Presenter, Adobe RoboHelp, Adobe Technical Communication Suite, Adobe FrameMaker, Adobe ColdFusion, Adobe Contribute, Adobe Flash Builder, Adobe Flash Catalyst, Adobe Flash, Adobe FreeHand, Adobe GoLive, Adobe ImageReady, Adobe LiveMotion, Adobe Muse, Adobe OnLocation, Adobe Soundbooth, Adobe SpeedGrade, Adobe Story, Adobe Ultra, Adobe Visual Communicator, Adobe Wallaby, Adobe Device Central, Adobe Encore, Adobe Fireworks, Adobe FlashPaper, Adobe Flex, Adobe Font Folio, Adobe Fontographer, Adobe HomePublisher, Adobe Kuler, Adobe LiveCycle, Adobe PageMaker, Adobe Persuasion, Adobe PressReady, Adobe Streamline, Adobe Type Manager, Adobe TypeAlign, Adobe Type Reunion, Adobe TypeTwister, Adobe Type Manager Light, Adobe Type Reunion Deluxe, Adobe Type Manager Deluxe, Adobe Type Manager Deluxe Update, Adobe Type Manager Light Update, Adobe Type Reunion Update, Adobe TypeTwister Update, Adobe TypeAlign Update, Adobe Type Manager Deluxe Network Version, Adobe Type Manager Network Version, Adobe Type Reunion Deluxe Network Version, Adobe TypeTwister Network Version, Adobe TypeAlign Network Version, Adobe Type Manager Deluxe Update Network Version, Adobe Type Manager Update Network Version, Adobe Type Reunion Deluxe Update Network Version, Adobe TypeTwister Update Network Version, Adobe TypeAlign Update Network Version, Adobe Type Manager Deluxe Network Version, Adobe Type Manager Network Version, Adobe Type Reunion Deluxe Network Version, Adobe TypeTwister Network Version, Adobe TypeAlign Network Version, Adobe Type Manager Deluxe Update Network Version, Adobe Type Manager Update Network Version, Adobe Type Reunion Deluxe Update Network Version, Adobe TypeTwister Update Network Version, Adobe TypeAlign Update Network Version, Adobe Type Manager Deluxe Network Version, Adobe Type Manager Network Version, Adobe Type Reunion Deluxe Network Version, Adobe TypeTwister Network Version, Adobe TypeAlign Network Version, Adobe Type Manager Deluxe Update Network Version, Adobe Type Manager Update Network Version, Adobe Type Reunion Deluxe Update Network Version, Adobe TypeTwister Update Network Version, Adobe Type '
	};
	let alldata = [
		{
			id: 0,
			name: 'Languages',
			icon: Code2,
			dv: ['C++']
		},
		{
			id: 1,
			name: 'Frameworks',
			icon: Keyboard,
			dv: ['Svelte']
		},
		{
			id: 2,
			name: 'Database',
			icon: DatabaseZap,
			dv: ['Mongo DB']
		},
		{
			id: 3,
			name: 'Others',
			icon: QrCode,
			dv: ['Github']
		}
	];
	onMount(() => {
		alldata[2].dv = String(techdata.database || '')
			.split(',')
			.filter((n) => n != ' ');
		alldata[3].dv = String(techdata.others || '')
			.split(',')
			.filter((n) => n != ' ').splice(0, 10);
		alldata[1].dv = String(techdata.framework || '')
			.split(',')
			.filter((n) => n != ' ');
		alldata[0].dv = String(techdata.lang || '')
			.split(',')
			.filter((n) => n != ' ');
	});
	let i = 0;
	let isworking = setInterval(() => {
		i++;
		if (i == 4) i = 0;
	}, 2000);
	setTimeout(() => {
		clearInterval(isworking);
	}, 8000);
</script>

<div
	id="skills"
	class="border border-slate-300 md:border-slate-700 px-4 md:px-6 py-7 mt-7 bg-white"
>
	<h1 class="text-2xl md:text-3xl font-bold text-center md:text-left">Tech & Skills</h1>

	{#each alldata as coding}
		<div class="group">
			<div
				class="my-6 flex gap-2 flex-col border border-slate-400 p-4 group-hover:border-slate-800 group-hover:bg-green-200 transition-all duration-150 {i ===
				coding.id
					? 'border-slate-800 bg-green-200 '
					: ''}"
			>
				<h1
					class="text-primary text-2xl font-baloo group-hover:text-gray-950 transition-all duration-150 flex gap-1 {i ===
					coding.id
						? ' text-primary '
						: 'md:text-gray-700'} "
				>
					<svelte:component this={coding.icon} strokeWidth="1.5" />
					{coding.name}
				</h1>
				<div class="flex gap-5 flex-wrap">
					{#each coding.dv as item}
						<Button
							class="md:text-[17px] md:py-5 md:px-8  transition-all duration-150 bg-yellow-200/80 text-primary border border-primary group-hover:bg-primary group-hover:text-white capitalize {i ===
							coding.id
								? ' bg-primary  text-white'
								: ''} ">{item}</Button
						>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>


