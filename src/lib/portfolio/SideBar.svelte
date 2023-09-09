<script>
	import { CheckCircle, FileCheck2, FolderClosed, Home, ShieldCheck, User } from 'lucide-svelte';
	export let userData = {
		name:'Sikandar Bhide',
		email:'justdoitnike099@gmail.com',
		resumeLink: ''
	};

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { isActive } from '$lib/store';
	let routeId = $page.route.id;
	$: main_id = routeId;
	export let img = '';
	$: isMenuOpen = false;
	let profileData = {
		name: 'Priya Pal',
		email: 'priyapal240302@gmail.com',
		image: 'https://i.pinimg.com/736x/e2/2b/ed/e22bed3bdba0f328efdb3521e07bf823.jpg',
		navs: [
			{
				nv: 'Home',
				link: `#`,
				icon: Home
			},
			{
				nv: 'About',
				link: `#about`,
				icon: User
			},
			{
				nv: 'Skills',
				link: '#skills',
				icon: CheckCircle
			},
			{
				nv: 'Projects',
				link: '#projects',
				icon: FolderClosed
			},
			{
				nv: 'Experience',
				link: '#exp',
				icon: ShieldCheck
			}
		]
	};
	$: {
		profileData.name = userData.name;
		profileData.email = userData.email;
	}
	// $: isActive = '';

	$: {
		if (img.length > 0) {
			profileData.image = img;
		}
	}
</script>

<div>
	<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	<div
		class="{isMenuOpen
			? 'opacity-100 transition-opacity ease-linear duration-300'
			: 'opacity-0 transition-opacity ease-linear duration-300'}   relative z-50 lg:hidden"
		role="dialog"
		aria-modal="true"
	>
		<div
			class="{isMenuOpen
				? 'translate-x-0 transition-opacity ease-linear duration-300'
				: '-translate-x-full transition-opacity ease-linear duration-300'}  fixed inset-0 bg-gray-900"
		/>

		<div
			class="{isMenuOpen
				? 'translate-x-0 transition ease-in-out duration-300 transform'
				: '-translate-x-full transition ease-in-out duration-300 transform '}    fixed inset-0 flex"
		>
			<div
				class="{isMenuOpen
					? 'opacity-100 ease-in-out duration-300'
					: ' opacity-0 ease-in-out duration-300'} relative mr-16 flex w-full max-w-xs flex-1"
			>
				<!--
			Close button, show/hide based on off-canvas menu state.
  
			Entering: "ease-in-out duration-300"
			  From: "opacity-0"
			  To: "opacity-100"
			Leaving: "ease-in-out duration-300"
			  From: "opacity-100"
			  To: "opacity-0"
		  -->
				<div class=" absolute left-full top-0 flex w-16 justify-center pt-5">
					<button
						type="button"
						class="-m-2.5 p-2.5"
						on:click={() => {
							isMenuOpen = false;
							console.log('Close');
						}}
					>
						<span class="sr-only">Close sidebar</span>
						<svg
							class="h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<!-- Sidebar component, swap this element with another sidebar if you like -->
				<div
					class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10"
				>
					<div class="flex h-16 shrink-0 items-center text-white">
						<!-- <img
							class="h-8 w-auto text-white bg-white"
							src="https://cdn-icons-png.flaticon.com/512/2886/2886689.png"
							alt="Your Company"
						/> -->
						<User class="w-auto" strokeWidth="1.9" />
						<h1 class="text-white font-semibold ml-2">{profileData.name}</h1>
					</div>
					<nav class="flex flex-1 flex-col">
						<ul role="list" class="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" class="-mx-2 space-y-1">
									{#each profileData.navs as item}
										<!-- content here -->
										<li>
											<a
												on:click={() => (isMenuOpen = false)}
												href={item.link}
												class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
											>
												<svelte:component this={item.icon} />
												{item.nv}
											</a>
										</li>
									{/each}
									<li>
										<a
											href={userData.resumeLink}
											class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
										>
											<FileCheck2 strokeWidth="1.3" />
											Resume
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>

	<!-- Static sidebar for desktop -->
	<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-80 lg:flex-col">
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div class="flex grow flex-col gap-y-10 overflow-y-auto bg-gray-900 px-6 m-3 rounded-2xl">
			<div class="flex h-64 mt-6 justify-center items-center rounded-xl overflow-hidden">
				<img
					class="w-64 rounded-2xl border border-slate-500 p-2 bg-gray-800"
					src={profileData.image}
					alt="Your Company"
				/>
			</div>
			<nav class="flex flex-1 flex-col">
				<ul role="list" class="flex flex-1 flex-col gap-y-7">
					<li>
						<ul role="list" class="-mx-2 space-y-1">
							<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
							<!-- {isActive===item.link ? "bg-gray-800 text-white":"text-gray-400" } -->
							{#each profileData.navs as item, i}
								<li>
									<!-- svelte-ignore a11y-mouse-events-have-key-events -->
									<a
										on:mouseover={() => {
											console.log(item.link);
											isActive.set(item.link);
											goto(item.link);
										}}
										
										href={item.link}
										class="{$isActive === item.link
											? 'text-white  bg-sky-800/40 border-l-4 border-sky-5'
											: 'text-gray-400'} hover:text-white hover:bg-gray-800 group flex gap-x-3  p-2 text-sm leading-6 font-semibold transition-all duration-150 ease-in  "
									>
										<svelte:component this={item.icon} strokeWidth="1.3" />
										{item.nv}
									</a>
								</li>
							{/each}
							<li>
								<!-- svelte-ignore a11y-mouse-events-have-key-events -->
								<a
									href={userData?.resumeLink}
									target="_blank"
									class="mt-4 justify-center bg-gray-800 text-white border border-white hover:text-[#00B7FFFF] hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
								>
									<FileCheck2 strokeWidth="1.3" />
									Resume
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	</div>

	<div
		class="{isMenuOpen
			? 'hidden'
			: 'visible'} sticky top-0 z-50 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden"
	>
		<button
			type="button"
			class="-m-2.5 p-2.5 text-gray-400 lg:hidden"
			on:click={() => {
				isMenuOpen = true;
				// console.log('Open');
			}}
		>
			<span class="sr-only">Open sidebar</span>
			<svg
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
		<div class="flex-1 text-sm font-semibold leading-6 text-white">
			{profileData.name || 'Dashboard'}
		</div>
		<a href="/">
			<span class="sr-only">Your profile</span>
			<img
				class="h-8 w-8 rounded-full bg-gray-800"
				src={profileData.image ||
					'https://i.pinimg.com/736x/e2/2b/ed/e22bed3bdba0f328efdb3521e07bf823.jpg'}
				alt="profile"
			/>
		</a>
	</div>

	<!-- <main class="py-10  md:py-0 lg:pl-72">
		<div class="px-4 sm:px-6 lg:px-8">
			<slot />
		</div>
	</main> -->
	<main class="py-3 lg:pl-72">
		<div class="px-4 sm:px-6 lg:px-8">
			<!-- Your content -->
			<slot />
		</div>
	</main>
</div>
