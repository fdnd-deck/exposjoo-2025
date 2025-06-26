<script>
  import { Notes } from "$lib/deck/partials";
  export let data;
  export let transition;
  let video;
</script>

<section class="website" style="--ratio: {data.ratio}" data-transition={transition}>
  <!-- svelte-ignore a11y_media_has_caption -->
  {#if data.image}
    <img src={data.image.url} alt="{data.image.alt}" />
  {:else}
    <video bind:this={video} src={data.video} {...data.controls} playsinline></video>
  {/if}
  {#if data.notes}
    <Notes notes={data.notes} />
  {/if}
</section>


<style lang="scss">
  .website {
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    max-width: 100%;
    max-height: 100%;
    aspect-ratio: var(--ratio);
    box-sizing: border-box !important;

    video, img {
      border-radius: 1rem;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
</style>

