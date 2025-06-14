<script lang="ts">
import { Home, UserCircle, Library, CirclePlus } from "lucide-svelte";
import { link } from "svelte-spa-router";
const { showHire, show_hire } = $props();
</script>

<header>
  <nav class="nav" >
    <a href="/" use:link><Home /></a>
    <a href="/profile" use:link><UserCircle /></a>
    <a href="/projects" use:link><Library /></a>
  </nav>

  <button type="button" class="hire-btn" onclick={showHire} >
    <CirclePlus size="18" /> 
    {#if show_hire == true}
      Hire Me?
    {:else}
      Back
    {/if}
  </button>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    box-shadow: 5px 10px 15px 0px rgba(0, 0, 0, 0.2);
  min-width: 500px;
  height: 100%;
  width: 40vw;
  max-width: 45vw;
    .nav {
      display: flex;
      gap: 1rem;
      & > a {
        color: black;
      }
    }
  }
  .hire-btn {
    color: white;
    background: black;
    font-weight: bold;
    border: none;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    transition: all 0.25s ease-in-out;
    cursor: pointer;
    &:hover {
      background: hsl(0, 0%, 20%);
    }
  }
@media screen and (max-width: 768px) {
    header {
      min-width: 100%;
    }
  }
</style>
