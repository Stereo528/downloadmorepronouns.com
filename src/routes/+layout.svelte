<style lang="postcss">
    :global(html) {
        font-family: 'Poppins', sans-serif;
        text-align: center;
        background-color: theme(colors.background);
    }
    :global(html.dark) {
        background-color: theme(colors.background-dark);
    }
</style>

<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
</script>
  
<Header />

<main class="mt-8 gap-4 text-text dark:text-text-dark justify-center flex">
    <slot />
</main>