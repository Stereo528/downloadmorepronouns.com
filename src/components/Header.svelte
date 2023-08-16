<script>
    import {base} from "$app/paths";
    import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<div class="justify-between flex p-1 items-center text-dull-lavender-950 dark:text-dull-lavender-200 border-b-2 border-dull-lavender-400 dark:border-dull-lavender-60 px-0 sm:px-1 lg:px-5 mx-auto w-4/5 lg:w-1/2">
    <h1 class="text-4xl sm:text-3xl">Download More Pronouns</h1>
    <nav>
        <a href="{base}/" class="p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl hover:text-dull-lavender-600 dark:hover:text-dull-lavender-800">Home</a>
        <a href="{base}/pronouns" class=" p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl hover:text-dull-lavender-600 dark:hover:text-dull-lavender-800">Pronouns</a>
        <a href="{base}/blog" class=" p-1 lg:p-2 text-sm sm:text-xl lg:text-2xl hover:text-dull-lavender-600 dark:hover:text-dull-lavender-800">Blog</a>
        <ThemeSwitcher />
    </nav>
    
</div>