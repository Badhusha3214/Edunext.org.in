<template>

<nav class="bg-white dark:bg-gray-900 w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex md:-ml-5 items-center space-x-3 rtl:space-x-reverse">
        <img src="/assets/logo.png" class="h-8" alt="Edunext ">
      </a>
     
      <div class="flex md:order-2 md:-mr-4 z-50space-x-3 md:space-x-0 rtl:space-x-reverse">
        <!-- <img src="/assets/Bell_fill.png " class="h-7 pt-2 px-2" alt="Edunext ">
        <button type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 pt-1 pb-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Support
          Us</button> -->
        <button data-collapse-toggle="navbar-sticky" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div class="z-50 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#"
              class="block font-normal py-2 px-3 text-gray-900 rounded hover:font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              @click.prevent="navigateTo('/about')"
              :class="{ 'text-blue-500 font-semibold	': currentRoute === '/about' }">
              We
            </a>
          </li>
          <li>
            <a href="#"
              class="block font-normal py-2 px-3 text-gray-900 rounded hover:font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              @click.prevent="navigateTo('/redefine')"
              :class="{ 'text-blue-500 font-semibold': currentRoute === '/redefine' }">
              Redefine
            </a>
          </li>
          <li>
            <a href="#"
              class="block font-normal py-2 px-3 text-gray-900 rounded hover:font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              @click.prevent="navigateTo('/learning')"
              :class="{ 'text-blue-500 font-semibold': currentRoute === '/learning' }">
              Learning
            </a>
          </li>
          <li>
            <a href="#"
              class="block font-normal py-2 px-3 text-gray-900 rounded hover:font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              @click.prevent="navigateTo('/Experiences')"
              :class="{ 'text-blue-500 font-semibold': currentRoute === '/Experiences' }">
              Experiences
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import router from '@/router'

export default {
  name: 'Navbar',
  data() {
    return {
      currentRoute: window.location.pathname
    }
  },
  methods: {
    navigateTo(path) {
      router.push(path)
      this.currentRoute = path
    }
  }
}
</script>
