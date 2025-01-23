<script lang="ts">
  export let active_nav: any;

  function toggleActive() {
    active_nav.update((value: string) => (value === "" ? "active" : ""));
  }
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button type="button" on:click={toggleActive} class={$active_nav}>
  <span id="line-1"></span><span id="line-2"></span>
</button>

<style lang="scss">
  button {
    width: 3rem;
    aspect-ratio: 1/1;
    border: none;
    background: transparent;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: #334;
    cursor: pointer;
    position: relative;
    transition: transform 0.6s;
    &:hover {
      transform: rotate(180deg);
    }
  }
  span {
    height: 4px;
    position: absolute;
    background: #334;
    width: 100%;
    transition: all 0.6s;
  }
  .active span#line-1 {
    transform: rotate(45deg);
    top: 50%;
  }
  .active span#line-2 {
    transform: rotate(135deg);
    top: 50%;
  }
  #line-1 {
    top: 75%;
  }
  #line-2 {
    top: 25%;
  }
</style>
