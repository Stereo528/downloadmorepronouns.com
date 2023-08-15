<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">


<style lang="postcss">
    :global(html) {
        font-family: 'Poppins', sans-serif;
        text-align: center;
    }
</style>

<script>
    import Header from "../components/Header.svelte";
    import {base} from "$app/paths";
</script>

<Header />

<main class="flex py-2 bg-background justify-center">
    <div class="text-text dark:text-dark-text container flex justify-center">
        <div class="rounded-lg border-accent">
            <h1 class="text-6xl self-center">Download More Pronouns</h1>
            <p class="text-2xl ">Download more pronouns for your device!</p>
            <div class="justify-evenly mt-8">
                <a href="{base}/pronouns" class="bg-secondary rounded-lg p-2 m-2">Download for Windows</a>
                <a href="{base}/pronouns" class="bg-secondary rounded-lg p-2 m-2">Download for Mac</a>
                <a href="{base}/pronouns" class="bg-secondary rounded-lg p-2 m-2">Download for Linux</a>
            </div>
            <p class="mt-4">Use another OS? <a href="{base}/pronouns" class="bg-primary rounded-lg p-1 m-2">No Worries</a></p>
        </div>
        
    </div>
    
</main>