<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

<script>

    import { page } from '$app/stores';
</script>

<div class="align-content border-2 dark:border-dull-lavender-300 border-dull-lavender-800 rounded-lg p-10 bg-dull-lavender-400 dark:bg-dull-lavender-600">
    <h1 class="text-4xl font-bold">This page is being built!</h1>
    <p class="text-xl">Come back soon!</p>
    <br>
    <p class="text-xl">Error code: {$page.status}</p>
    <p class="text-xl">Error message: {$page.error.message}</p>
    <br>
    <a href="/" class="text-xl underline rounded-lg bg-dull-lavender-500 dark:bg-dull-lavender-700 text-dull-lavender-950 dark:text-dull-lavender-200 p-2">Go back to the homepage?</a>
</div>