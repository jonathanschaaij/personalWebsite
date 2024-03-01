<script>
  import Skills from "../lib/Skills.svelte";
  import Hero from "$lib/Hero.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "../lib/Footer.svelte";
  import AboutMe from "$lib/AboutMe.svelte";

  let bigLetters = `
░░░░░██╗░█████╗░███╗░░██╗░█████╗░████████╗██╗░░██╗░█████╗░███╗░░██╗
░░░░░██║██╔══██╗████╗░██║██╔══██╗╚══██╔══╝██║░░██║██╔══██╗████╗░██║
░░░░░██║██║░░██║██╔██╗██║███████║░░░██║░░░███████║███████║██╔██╗██║
██╗░░██║██║░░██║██║╚████║██╔══██║░░░██║░░░██╔══██║██╔══██║██║╚████║
╚█████╔╝╚█████╔╝██║░╚███║██║░░██║░░░██║░░░██║░░██║██║░░██║██║░╚███║
░╚════╝░░╚════╝░╚═╝░░╚══╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝

░██████╗░█████╗░██╗░░██╗░█████╗░░█████╗░██╗░░░░░██╗
██╔════╝██╔══██╗██║░░██║██╔══██╗██╔══██╗██║░░░░░██║
╚█████╗░██║░░╚═╝███████║███████║███████║██║░░░░░██║
░╚═══██╗██║░░██╗██╔══██║██╔══██║██╔══██║██║██╗░░██║
██████╔╝╚█████╔╝██║░░██║██║░░██║██║░░██║██║╚█████╔╝
╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░╚════╝░`;

  console.log(bigLetters);
</script>

<svelte:head>
  <script
    data-goatcounter="https://jschaaij.goatcounter.com/count"
    async
    src="//gc.zgo.at/count.js"
  ></script>
  <title>Hire Jonathan</title>
</svelte:head>

<Navbar />

<div class="w-screen h-screen snap-y snap-mandatory overflow-scroll">
  <Hero />
  <Skills />
  <AboutMe />
  <Footer />
</div>
