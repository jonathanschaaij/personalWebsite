<script>
    import Skills from "../lib/Skills.svelte";
    import Hero from "$lib/Hero.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "../lib/Footer.svelte";
    import { onMount } from "svelte";
    import { themeChange } from "theme-change";

    // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
    onMount(() => {
        themeChange(false);
        // 👆 false parameter is required for svelte
    });
</script>

<Navbar />

<div class="w-full h-screen flex flex-col justify-center">
    <Hero />
</div>
<div class="w-full h-screen bg-base-200 flex flex-col justify-center items-center">
    <Skills />
</div>

<Footer />
ls
