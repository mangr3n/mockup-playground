<script>
  import {appRoot} from '../appRoot';

  let username = (window.ovCompSettings && ovCompSettings[0].UserName) || 'Generic, Username'; 
  let email = (window.ovCompSettings && ovCompSettings[0].UserEmail) || 'ugeneric@businessonetech.com';
</script>
<style>
nav {
  @apply absolute top-0 left-0 right-0;
  @apply px-14;
  @apply h-12;
  @apply flex;
  @apply flex-row;
  @apply flex-nowrap;
  @apply w-screen;
}

img.power {
  @apply mr-6;
  @apply p-2;
  margin-top: -6px;
  margin-bottom: 1px;
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
}

.options i {
  @apply mx-3 px-3;
  transition: color .5s;
}

.options i:hover {
  color: #72bf44;
  cursor: pointer;
}

.dropdown.user:hover i {
  color: #72bf44;
}
/* Navbar container */
.navbar {
  @apply select-none;
  background-color: #133547;
  color: white;
  padding-top: 1px;
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
.dropdown.menu .dropbtn {
  @apply text-base text-white text-center py-3 px-5;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}


/* Dropdown buttons user icon */
.dropdown.user .dropdown-content.user {
  @apply text-base text-white text-left;
  background-color: white;
  color: black;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

.user-info {
  @apply px-8 py-3 mx-4 border-solid border-b-2 border-coolGray-200;
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: #72bf44;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  @apply hidden fixed z-20;
  top: 48px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

/* Dropdown user icon (hidden by default) */
.dropdown-content.user {
  @apply hidden fixed z-20;
  top: 20px;
  right: 36px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
.dropdown.menu:hover .dropdown-content.menu {
  @apply block;
}

/* Show the USER dropdown menu on hover */
.dropdown.user:hover .dropdown-content.user {
  @apply block;
}
</style>
<nav class="navbar">
<img class="power" src="{$appRoot}/logo_light.png"/>
  <div class="dropdown menu">
    <button class="dropbtn">Dashboards
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content menu">
      <a href="rdPage.aspx?rdReport=DashboardAccess">Access</a>
      <a href="rdPage.aspx?rdReport=DashboardLives">Lives</a>
      <a href="#profile">Plan Profile</a>
    </div>
  </div>
  <a href="#reports">Reports</a>
  <a href="#ftp">FTP</a>


<div class="options"> 
  <i class="fas fa-bookmark fa-lg"></i>
  <div class="dropdown user">
      <i class="fas fa-user fa-lg user-menu"></i>
    <div class="dropdown-content user">
      <div class="user-info">
        <strong>{username}</strong> <br/>
        {email}
      </div>
      <a href="Auth.aspx?logout=true">Logout</a>
    </div>
  </div>
</div>
</nav>