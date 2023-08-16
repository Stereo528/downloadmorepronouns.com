<style lang="postcss">
    :global(html) {
        font-family: 'Poppins', sans-serif;
        text-align: center;
        background-color: theme(colors.dull-lavender.100);
    }
</style>

<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
</script>
  
<Header />

<main class="mt-8 gap-4 text-dull-lavender-950 justify-center flex">
    <slot />
</main>