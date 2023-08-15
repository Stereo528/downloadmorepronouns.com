<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">


<style lang="postcss">
    :global(html) {
        font-family: 'Poppins', sans-serif;
        text-align: center;
        background-color: theme(colors.background);
    }
</style>

<script>
    import Header from "../components/Header.svelte";
    import { page } from '$app/stores';
</script>

<Header />

<main class="mt-8 gap-4 text-text">
    <h1 class="text-4xl font-bold">An Error has occured!</h1>
    <p class="text-xl">The page you are looking for does not exist or is not working currently!</p>
    <br>
    <p class="text-xl">Error code: {$page.status}</p>
    <p class="text-xl">Error message: {$page.error.message}</p>
    <br>
    <a href="/" class="text-xl underline rounded-lg bg-secondary text-accent p-2">Go back to the homepage?</a>
</main>
    