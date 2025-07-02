<script>
  import { Notes } from "$lib/deck/partials";
  export let data;
  export let transition;
  const randomRotate = (size) => {
    if (data.noRotate) {
      return `--width: ${size}vw;`;
    }
    return `--width: ${size}vw; --rotate: ${Math.random() * 8 - 4}deg;`;
  };
</script>

<section class="click-to-reveal" data-transition={transition} data-background-color="var(--background)">
  {#each data.reveals as reveal, i}
    {#if !data.revealFirst && i == 0}
      <div class="{reveal.class} reveal-item" style={randomRotate(reveal.size || data.size)}>
        {@html reveal.element}
      </div>
    {:else}
      <div class="fragment {reveal.class} reveal-item" style={randomRotate(reveal.size || data.size)}>
        {@html reveal.element}
      </div>
    {/if}
  {/each}
  <Notes notes={data.notes} />
</section>

<style lang="scss">
  .reveal-item {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  transition: rotate 0.4s ease-out,  all 0.2s ease;
    
    :global(img),
    :global(video) {
      display: block;
      width: var(--width);
      max-height: 80%;
      height: auto;
      object-fit: contain;
    }
  }
</style>
