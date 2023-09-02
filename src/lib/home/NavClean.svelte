<script>
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { AlignJustify, Plus, X } from 'lucide-svelte';
	import { fade, fly, scale, slide } from 'svelte/transition';
	let nav = {
		title: 'Build Now',
		img: 'https://cdn-icons-png.flaticon.com/512/650/650237.png',
		listnavs: [
			{
				name: 'Home',
				link: '/'
			},
			{
				name: 'Build Now',
				link: '/build'
			},
			{
				name: 'Portfolio',
				link: '/portfolio/demo'
			}
		]
	};

	let profileNavs = [
		{
			name: 'Dashboard',
			link: '/build'
		},
		{
			name: 'Sign out',
			link: '/'
		}
	];
	$: isActive = $page.route.id;

	let isProfileMenu = false;
	let isMobileMenu = false;
</script>

<nav class="bg-white shadow border-b border-slate-500">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center w-full">
			<div class="flex md:w-[80%] items-center">
				<div class="-ml-2 mr-2 flex items-center md:hidden">
					<!-- Mobile menu button -->
					<button
						type="button"
						class="relative inline-flex items-center justify-center rounded-md p-2 bg-gray-200/80 border-none outline-none transition-all"
						aria-controls="mobile-menu"
						aria-expanded="false"
						on:click={() => (isMobileMenu = !isMobileMenu)}
					>
						<span class="absolute -inset-0.5" />
						<AlignJustify
							class="{isMobileMenu ? 'hidden' : 'block'} h-6 w-6 transition-all duration-150"
						/>
						<X class="{isMobileMenu ? 'block' : 'hidden'} h-6 w-6 transition-all duration-150" />
					</button>
				</div>
				<a
					href="/"
					class="flex flex-shrink-0 items-center gap-x-2 bg-green-100 px-3 py-2 rounded-md border border-slate-500 cursor-pointer hover:bg-green-200 transition-all duration-150"
				>
					<img class="h-6 md:h-7 w-auto" src={nav.img} alt="Your Company" />
					<h1 class="font-semibold font-mono md:text-xl">{nav.title}</h1>
				</a>
				<!-- Change Justify-Start to Center, End -->
				<!-- <div class="hidden md:ml-6 md:flex md:space-x-8 w-full justify-center mr-4">
					{#each nav.listnavs as item}
						<a
							href={item.link}
							class="{isActive === item.link.split('/')[1]
								? 'border-indigo-500 text-gray-900'
								: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
							>{item.name}</a
						>
					{/each}
				</div> -->
				<div class="hidden sm:ml-6 sm:flex w-full justify-center">
					<div class="flex space-x-4">
						{#each nav.listnavs as item}
							<a
								href={item.link}
								class="{isActive === item.link
									? 'bg-gray-900 text-white'
									: 'text-gray-500 hover:bg-gray-800 hover:text-white'}  rounded-md px-3 py-2 text-sm font-medium transition-all duration-150"
								>{item.name}</a
							>
						{/each}
					</div>
				</div>
			</div>
			<div class="flex items-center justify-end w-full md:w-fit">
				<div class="flex-shrink-0">
					<Button class="hidden md:flex">
						<Plus size="18" class="mr-1" />
						Create Portfolio</Button
					>
					<Button class=" md:hidden" size="sm">Create</Button>
				</div>
				<div class="md:ml-4 md:flex md:flex-shrink-0 md:items-center">
					<!-- Profile dropdown -->
					<div class="relative ml-3">
						<div>
							<button
								type="button"
								class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
								on:click={() => (isProfileMenu = !isProfileMenu)}
							>
								<span class="absolute -inset-1.5" />
								<span class="sr-only">Open user menu</span>
								<img
									class="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</button>
						</div>
						<div
							class="{isProfileMenu
								? 'transform opacity-100 scale-100'
								: 'hidden transform opacity-0 scale-95'} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
						>
							<!-- Active: "bg-gray-100", Not Active: "" -->
							{#each profileNavs as item}
								{#if item.name === 'Sign out'}
									<form method="POST">
										<button
											formaction="/?/logout"
											class="w-full text-left hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
											role="menuitem"
											tabindex="-1"
											id="user-menu-item-0">{item.name}</button
										>
									</form>
								{:else}
									<a
										href={item.link}
										class="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-0">{item.name}</a
									>
								{/if}
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#key isMobileMenu}
		<div transition:slide={{ duration: 600 }}>
			<div class="md:hidden {isMobileMenu ? 'block' : 'hidden'} duration-700" id="mobile-menu">
				<div class="space-y-1 pb-3 pt-2">
					{#each nav.listnavs as item}
						<a
							href={item.link}
							class="{isActive === item.link
								? 'bg-zinc-100 border-slate-800 text-primary'
								: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block border-l-4 py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6"
							>{item.name}</a
						>
					{/each}
				</div>
			</div>
		</div>
	{/key}
</nav>
