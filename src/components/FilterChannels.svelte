<style>
.container {
    @apply block relative pl-8 mb-6 cursor-pointer text-base select-none items-center;
  }

.container input {
    @apply absolute opacity-0 cursor-pointer h-0 w-0;
  }

.checkmark {
    @apply absolute top-0 left-0 h-5 w-5 border-2 border-gray-200 rounded;
  }

.container:hover input ~ .checkmark {
    @apply bg-gray-300;
  }

.container input:checked ~ .checkmark {
    @apply bg-blue-400;
}

/* create the checkmark (hidden) */
.checkmark:after {
  content: "";
  @apply absolute hidden;
}

/* Show checkmark when checked */
.container input:checked ~ .checkmark:after {
  @apply block;
}

/* Style the checkmark*/
.container .checkmark:after {
  @apply left-1 top-0.5 w-1.5 h-2.5 border-white transform rotate-45;
  border-width: 0 2px 2px 0;
}

</style>



<div class="static w-1/6 h-full inline-flex align-top justify-start content-start p-4 border-r-2 border-black">
  <div class="justify-items justify-self-center font-bold uppercase mb-6">Channels</div>

  <span>
    <label class="container">Commercial
      <input type="checkbox" checked="checked">
      <span class="checkmark"></span>
    </label>
    
    <label class="container">Employer
      <input type="checkbox">
      <span class="checkmark"></span>
    </label>
    
    <label class="container">Government
      <input type="checkbox">
      <span class="checkmark"></span>
    </label>
    
    <label class="container">Medicare
      <input type="checkbox">
      <span class="checkmark"></span>
    </label>

    <label class="container">State Medicaid
      <input type="checkbox">
      <span class="checkmark"></span>
    </label>
  </span>
</div>