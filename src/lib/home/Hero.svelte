<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		AppWindow,
		BarChart2,
		Camera,
		CheckCircle,
		CheckSquare,
		Crop,
		DatabaseZap,
		FileCheck2,
		Layout,
		LayoutGrid,
		MailCheck,
		Monitor,
		PenLine,
		Tv2,
		User
	} from 'lucide-svelte';

	let herosec = {
		subtitle: 'The easiest way to build your portfolio',
		subtext: 'Generate your portfolio in seconds with our easy to use dashboard',
		btn1: 'Dashboard',
		btn2: 'Log In'
	};
	let iconsData = [
		{
			component: Layout,
			right: 'right-10',
			top: 'top-3'
		},
		{
			component: User,
			right: 'right-1/2',
			top: 'top-32'
		},
		{
			component: MailCheck,
			right: 'right-64',
			top: 'top-20'
		},
		{
			component: BarChart2,
			right: 'left-40',
			top: 'top-10'
		},
		{
			component: AppWindow,
			right: 'right-0',
			top: 'top-0'
		},
		{
			component: LayoutGrid,
			right: 'right-0',
			top: 'top-0'
		},
		{
			component: PenLine,
			right: 'right-0',
			top: 'top-0'
		},
		{
			component: DatabaseZap,
			right: 'right-0',
			top: 'top-0'
		}
	];

	let iconColor = '#010E2EFF';
	let strokeWidth = '1.3';
</script>

<section class="bg-gray-50 relative">
	<div class="relative hidden md:flex">
		<Layout strokeWidth={strokeWidth} class="absolute top-20 left-1/2 rotate-45" color={iconColor} />
		<MailCheck strokeWidth={strokeWidth} class="absolute top-32 right-80 rotate-0" color={iconColor} />
		<LayoutGrid
			strokeWidth={strokeWidth}
			class="absolute top-[440px] right-80 rotate-0"
			color={iconColor}
		/>
		<Monitor strokeWidth={strokeWidth} class="absolute top-[440px] left-80 rotate-45" color={iconColor} />
		<AppWindow strokeWidth={strokeWidth} class="absolute top-[140px] left-80 rotate-45" color={iconColor} />
		<DatabaseZap strokeWidth={strokeWidth} class="absolute top-[520px] left-1/2 " color={iconColor} />
		<BarChart2 strokeWidth={strokeWidth} class="absolute top-[510px] right-1/3 " color={iconColor} />
		<User strokeWidth={strokeWidth} class="absolute top-[500px] left-1/3 " color={iconColor} />
		<!-- <Tv2 strokeWidth={strokeWidth} class="absolute top-[570px] left-20 -rotate-12 " color={iconColor} /> -->
		<!-- <Crop strokeWidth={strokeWidth} class="absolute top-[570px] right-20 -rotate-12 " color={iconColor} /> -->
		<!-- <CheckSquare
			strokeWidth={strokeWidth}
			class="absolute top-[20px] right-20 -rotate-12 "
			color={iconColor}
		/> -->
		<FileCheck2 strokeWidth={strokeWidth} class="absolute top-[300px] right-32  " color={iconColor} />
		<CheckCircle strokeWidth={strokeWidth} class="absolute top-[300px] left-32  " color={iconColor} />
		<!-- <Camera strokeWidth={strokeWidth} class="absolute top-[30px] left-20 rotate-12 " color={iconColor} /> -->
	</div>
	<div class="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-[90vh] lg:items-center">
		<div class="mx-auto max-w-6xl text-center">
			<h1 class="text-5xl font-extrabold sm:text-6xl capitalize">
				<span class="md:bg-primary md:text-white md:px-6 rounded-md">Build Your Portfolio</span>
				<strong
					class="hidden md:flex font-extrabold text-[#0F53FFFF] sm:block md:my-4 text-3xl sm:text-5xl"
				>
					{herosec.subtitle}
				</strong>
			</h1>

			<p class="mt-4 sm:text-xl/relaxed text-gray-600 font-light">
				{herosec.subtext}
			</p>

			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<Button size="lg" class="lg:px-16" href="/dashboard">
					<Layout size="19" strokeWidth="1.8" class="mr-2" />
					{herosec.btn1}</Button
				>
				<Button
					href="/login"
					size="lg"
					class="lg:px-16 border-slate-700 hover:bg-primary hover:text-primary-foreground"
					variant="outline"
				>
					<User size="19" strokeWidth="1.8" class="mr-2" />
					{herosec.btn2}</Button
				>
			</div>
		</div>
	</div>
</section>
