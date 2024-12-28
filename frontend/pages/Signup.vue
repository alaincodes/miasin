<template>
	<div class="grid place-content-center p-6 mx-auto">
		<h1 class="mb-6 text-3xl text-center">Signup</h1>
		<form class="text-c-black">
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				<label>
					<span class="text-white">Nickname</span>
					<input
						type="email"
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder="alanus_tranus"
					/>
				</label>

				<label>
					<span class="text-white">Email</span>
					<input
						type="email"
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder="alanus.tranus@gmail.com"
					/>
				</label>

				<label>
					<span class="text-white">Password</span>
					<input
						type="email"
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder="******"
					/>
				</label>

				<label>
					<span class="text-white">Repeat Password</span>
					<input
						type="email"
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder="******"
					/>
				</label>

				<div class="col-span-full flex justify-between gap-6">
					<label class="inline-flex items-center">
						<input
							placeholder="Submit"
							type="submit"
							class="py-2 px-3 rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-c-black focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
						/>
						<span class="sr-only">Submit</span>
					</label>
				</div>
			</div>
		</form>
	</div>
</template>