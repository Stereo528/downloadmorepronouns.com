<script>
    import {base} from "$app/paths";
    import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<div class="justify-between flex p-1 items-center text-text border-b-2 border-secondary px-0 sm:px-1 lg:px-5 mx-auto w-4/5 lg:w-1/2">
    <h1 class="text-4xl text-text sm:text-3xl">Download More Pronouns</h1>
    <nav>
        <a href="{base}/" class="text-text p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl hover:text-accent">Home</a>
        <a href="{base}/pronouns" class="text-text p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl hover:text-accent">Pronouns</a>
        <a href="{base}/blog" class="text-text p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl hover:text-accent">Blog</a>
    </nav>
</div>