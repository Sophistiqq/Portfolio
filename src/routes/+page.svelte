<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    // Select the "Art" text element
    const artText = document.querySelector(".art-text") as HTMLElement;
    const section_1 = document.querySelector("#section-1") as HTMLElement;
    // Create the parallax effect
    gsap.to(artText, {
      yPercent: 100, // Move the text up by 50% of its height
      ease: "none",
      scrollTrigger: {
        trigger: "#section-1",
        start: "top bottom", // When the top of the section hits the bottom of the viewport
        end: "bottom top", // When the bottom of the section hits the top of the viewport
        scrub: true, // Smoothly animate the effect
      },
    });

    // slide from bottom transition but with blur effect on load
    gsap.from("#section-1 > *", {
      duration: 2,
      y: 100,
      opacity: 0,
      ease: "back",
      stagger: 0.5,
      scrollTrigger: {
        trigger: section_1,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
  });
</script>

<section id="section-1">
  <p>Welcome to the<br />playground</p>
  <span>
    <h6 id="of">of</h6>
    <p>
      Hi! I'm Roi,<br />an Artist and a Programmer<br />from Philippines
    </p>
  </span>
  <p id="name">Roi</p>
  <!-- Add a real element for the "Art" text -->
  <div class="art-text">Art</div>
  <p id="axp">Artist & Programmer</p>
</section>

<section id="section-2">
  <h1>Page</h1>
  <p>Page content</p>
</section>

<style>
  #section-1 {
    margin-top: 15vh;
    padding: 2rem;
    line-height: 0.75;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    height: 85vh;
    font-size: 8.5rem;
    position: relative;
    #name {
      font-family: "Niconne";
      font-size: 10rem;
    }
    .art-text {
      position: absolute;
      font-size: 30rem;
      color: #911;
      z-index: -1;
      opacity: 0.3;
      right: 15%;
      top: -5%;
    }
    span {
      display: flex;
      align-items: center;
      gap: 4rem;
      #of {
        font-size: 5rem;
      }
      p {
        font-size: 1.5rem;
        position: relative;
        &::before {
          content: "(";
          position: absolute;
          left: -1.5rem;
          top: 0;
          bottom: 0;
          font-size: 5rem;
          color: #112;
          opacity: 0.5;
        }
        &::after {
          content: ")";
          position: absolute;
          right: -1.5rem;
          top: 0;
          bottom: 0;
          font-size: 5rem;
          color: black;
          opacity: 0.5;
        }
      }
    }
    #axp {
      font-size: 4rem;
      margin-block: 2rem;
    }
  }
  #section-2 {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    height: 100vh;
    background-color: red;
  }
</style>
