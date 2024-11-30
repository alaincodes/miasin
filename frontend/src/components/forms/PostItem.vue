<template>
  <div class="container max-w-96 mx-auto mb-8">
    <form>
      <div class="grid gap-4">
        <div class="col-span-full">
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text">Item you want to add...</span>
              <span class="label-text-alt">Top Right label</span>
            </div>
            <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          </label>
        </div>
        <div class="col-span-full">
          <label class="form-control">
            <div class="label">
              <span class="label-text">Your message</span>
              <span class="label-text-alt">Why ?</span>
            </div>
            <textarea class="textarea textarea-bordered h-24" placeholder="Why you want this item so bad ?"></textarea>
          </label>
        </div>
        <div class="text-center">
          <input type="submit" value="Submit" class="btn" />
        </div>
      </div>
    </form>
  </div>
</template>
