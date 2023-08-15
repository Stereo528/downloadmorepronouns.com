<script>
    import {base} from "$app/paths";
    import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<div class="justify-between flex p-1 items-center text-text dark:text-text-dark border-b-2 border-primary dark:border-accent-dark px-0 sm:px-1 lg:px-5 mx-auto w-4/5 lg:w-1/2">
    <h1 class="text-4xl sm:text-3xl">Download More Pronouns</h1>
    <nav>
        <a href="{base}/" class="p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl hover:text-accent-dark">Home</a>
        <a href="{base}/pronouns" class=" p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl hover:text-accent-dark">Pronouns</a>
        <a href="{base}/blog" class=" p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl hover:text-accent-dark">Blog</a>
        <ThemeSwitcher />
    </nav>
    
</div>