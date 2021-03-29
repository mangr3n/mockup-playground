<script>

  import {appRoot} from '../appRoot';
</script>
<style>
nav {
  @apply absolute top-0 left-0 right-0;
  @apply h-12;
  @apply flex;
  @apply flex-row;
  @apply flex-nowrap;
  @apply w-screen;
}

img.power {
  @apply mx-6;
  @apply p-2;
}
img.logo {
  @apply flex-grow-0;
  @apply m-auto;
  @apply h-12;
  @apply p-1;
}

img.user {
  @apply h-12;
  @apply ml-2;
  @apply p-2;
}

div.options {
  @apply flex flex-row flex-grow-0;
  @apply ml-auto;
  @apply items-center;
  @apply mr-16;
}

.options i {
  @apply mx-3 px-3;
  transition: color .5s;
}

.options i:hover {
  color: #72bf44;
  cursor: pointer;
}
/* Navbar container */
.navbar {
  @apply select-none;
  background-color: #133547;
  color: white;
}

/* Links inside the navbar */
.navbar a {
  @apply text-base text-white text-center py-3 px-5;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  @apply text-base text-white text-center py-3 px-5;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: #72bf44;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  @apply hidden absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  @apply float-none py-3 px-5 block text-left;
  color: black;
  text-decoration: none;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  @apply bg-gray-200;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  @apply block;
}
</style>
<nav class="navbar">
<img class="power" src="{$appRoot}/OneVision_Logo_Sept2018.png"/>
  <div class="dropdown">
    <button class="dropbtn">Dashboards
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Access</a>
      <a href="#">Lives</a>
      <a href="#">Plan Profile</a>
    </div>
  </div>
  <a href="#dashboard">Reports</a>
  <a href="#reports">FTP</a>

<!--<img class="logo" src="/logo.png"/>-->
<div class="options"> 
  <i class="fas fa-bookmark fa-lg"></i>
  <i class="fas fa-user fa-lg"></i>
</div>
</nav>