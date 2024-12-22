<template>
	<div class="grid place-content-center p-6 mx-auto">
		<h1 class="mb-6 text-3xl text-center">Add new case</h1>
		<form>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				<label>
					<span class="text-gray-700">Identity of the Offender/Criminal</span>
					<input
						type="text"
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder="Alanus Tranus"
					/>
				</label>

				<label>
					<span class="text-gray-700">What type of crime is it?</span>
					<select
						class="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
					>
						<option value="" disabled selected>Select crime</option>
						<option>Crime 1</option>
						<option>Crime 2</option>
						<option>Crime 3</option>
						<option>Crime 4</option>
						<option>Crime 5</option>
						<option>Other</option>
					</select>
				</label>

				<label>
					<span class="text-gray-700">When it happened ?</span>
					<input
						type="date"
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
					/>
				</label>

				<label class="block">
					<span class="text-gray-700">What time ?</span>
					<input
						type="time"
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
					/>
				</label>

				<label class="col-span-full">
					<span class="text-gray-700">Crime title</span>
					<input
						type="text"
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder="Crime type..."
					/>
				</label>

				<label class="col-span-full">
					<span class="text-gray-700">Details</span>
					<textarea
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
						rows="4"
						placeholder="I am a victim of hate speech, here's the details of what happened..."
					></textarea>
				</label>

				<div class="col-span-full flex justify-between gap-6">
					<label class="inline-flex items-center">
						<input
							placeholder="Submit"
							type="submit"
							class="py-2 px-3 rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
						/>
						<span class="sr-only">Submit</span>
					</label>

					<label class="inline-flex items-center">
						<input
							type="checkbox"
							class="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
						/>
						<span class="ml-2">I prefer to stay anonymous.</span>
					</label>
				</div>
			</div>
		</form>
	</div>
</template>
