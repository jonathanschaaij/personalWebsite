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
<div class="snap-mandadory snap-both">
    <div class="snap-always snap-center w-full h-screen flex flex-col justify-center">
        <div class="h-3/5 flex flex-row justify-center">
            <Hero />
        </div>
    </div>
    <div class="snap-always snap-center w-full h-screen flex flex-col justify-center items-center">
        <Skills />
    </div>
</div>

<Footer />
