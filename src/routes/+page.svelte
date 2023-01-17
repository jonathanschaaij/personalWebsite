<script>
    import Skills from "../lib/Skills.svelte";
    import Hero from "$lib/Hero.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "../lib/Footer.svelte";
</script>

<Navbar />

<div class="w-full h-screen flex flex-col justify-center items-center">
    <Hero />
</div>
<div class="w-full h-screen bg-base-200 flex flex-col justify-center items-center">
    <Skills />
</div>

<Footer />
