<script lang="ts">
  import "$lib/styles/app.css";
  import "@fontsource/libre-baskerville";
  import "@fontsource/niconne";
  import TopBar from "$lib/components/TopBar.svelte";

  // Simulate a loading state
  let loading = true;
  setTimeout(() => {
    loading = false;
  }, 1500);
</script>

{#if loading}
  <div class="loading">
    <h1>Loading...</h1>
  </div>
{:else}
  <TopBar />
  <main>
    <slot></slot>
  </main>
{/if}

<style>
  .loading {
    position: fixed;
    inset: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    font-size: 3rem;
    font-family: "Niconne";
  }
</style>
