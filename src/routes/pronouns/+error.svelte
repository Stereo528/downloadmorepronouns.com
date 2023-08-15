<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

<script>

    import { page } from '$app/stores';
</script>

<h1 class="text-4xl font-bold">This page is being built!</h1>
<p class="text-xl">Come back soon!</p>
<br>
<p class="text-xl">Error code: {$page.status}</p>
<p class="text-xl">Error message: {$page.error.message}</p>
<br>
<a href="/" class="text-xl underline rounded-lg bg-primary dark:bg-primary-dark text-accent dark:text-accent-dark p-2">Go back to the homepage?</a>