<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">


<script>
    import { page } from '$app/stores';
</script>

<div class="align-content border-2 border-dull-lavender-800 rounded-lg p-10 bg-dull-lavender-400 ">
    <h1 class="text-4xl font-bold">An Error has occured!</h1>
    <p class="text-xl">The page you are looking for does not exist or is not working currently!</p>
    <br>
    <p class="text-xl">Error code: {$page.status}</p>
    <p class="text-xl">Error message: {$page.error.message}</p>
    <br>
    <a href="/" class="text-xl underline rounded-lg bg-dull-lavender-500 text-dull-lavender-950 p-2">Go back to the homepage?</a>
</div>

    