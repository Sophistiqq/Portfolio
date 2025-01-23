<script lang="ts">
  import { writable } from "svelte/store";
  import NavBtn from "$lib/components/NavBtn.svelte";
  import { onMount } from "svelte";
  import { fly, slide } from "svelte/transition";

  // Create the active_nav store
  const active_nav = writable("");

  // Use the store to control the overlay
  $: isOverlayVisible = $active_nav === "active";
  onMount(() => {
    document.addEventListener(
      "keyup",
      function handleKeyUp(event: KeyboardEvent) {
        if (event.key === "Escape") {
          active_nav.set("");
        }
      },
    );
  });
</script>

<main>
  <nav class="nav">
    <a href="/">
      <span>Borromeo</span>
      <span>Roi</span>
    </a>
    <!-- Pass the active_nav store as a prop -->
    <NavBtn {active_nav} />

    <button> Contacts </button>
  </nav>
  {#if isOverlayVisible}
    <div class="overlay" transition:fly={{ duration: 500, delay: 200 }}>
      <div class="links" transition:slide={{ delay: 200, duration: 1000 }}>
        <a href="/arts">Arts</a>
        <a href="/projects">Projects</a>
        <a href="/about">About Me</a>
      </div>
      <div class="socials" transition:slide={{ delay: 600, duration: 1000 }}>
        <a href="https://facebook.com/PIMD.xD" target="_blank">Facebook</a>
        <a href="https://instagram.com/sophistiqq" target="_blank">Instagram</a>
      </div>
    </div>
  {/if}
</main>

<style lang="scss">
  main {
    position: fixed;
    inset: 0;
    z-index: 100;
  }
  .nav {
    padding: 5rem;
    height: 13dvh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button,
    a {
      display: flex;
      text-decoration: none;
      color: #334;
      flex-direction: column;
      font-size: 3rem;
      border: none;
      background-color: transparent;
      cursor: pointer;
      align-items: center;
      justify-content: flex-start;
      font-family: "Niconne", cursive;
    }
  }
  .overlay {
    height: 87dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 5rem;
    gap: 5rem;
    background-color: white;
    .links,
    .socials {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
  }
  a {
    text-decoration: none;
    color: #334;
    font-size: 4rem;
    font-family: "Libre Baskerville";
  }
</style>
