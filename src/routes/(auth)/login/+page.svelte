<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { goto } from '$app/navigation';
</script>

<div class="justify-center flex h-[90.5vh] items-center bg-slate-200">
	<Card.Root class="md:w-[400px] shadow-md shadow-slate-300">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">Login to Continue</Card.Title>
			<Card.Description>Enter your email and password to Visit Dashboard</Card.Description>
		</Card.Header>
		<form method="POST" use:enhance>
			<Card.Content class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="m@example.com" name="email" />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input id="password" type="password" placeholder="Password" name="password" />
				</div>
			</Card.Content>
			<Card.Footer>
				<Button
					class="w-full"
					on:click={() => {
						setTimeout(() => {
							goto('/build');
						}, 1);
					}}
					type="submit">Log In</Button
				>
			</Card.Footer>
		</form>
		<Card.Footer>
			<div>
				Don't have an account? <a href="/signup" class="text-blue-500 underline underline-offset-1"
					>Sign Up</a
				>
			</div>
		</Card.Footer>
	</Card.Root>
</div>
