<template>
  <nav class="bg-white py-2 md:py-4">
    <div class="container px-4 mx-auto md:flex md:items-center">

      <div class="flex justify-between items-center">
        <router-link to="/" href="#" class="font-bold text-xl text-indigo-600">MARZI</router-link>
        <button
          class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
          id="navbar-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
        <router-link to="/create" class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">CREATE</router-link>
      </div>
    </div>
  </nav>
</template>