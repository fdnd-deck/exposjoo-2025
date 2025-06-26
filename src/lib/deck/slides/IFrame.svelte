<script>
  import { Notes } from "$lib/deck/partials";
  export let data;
  export let transition;
</script>

<section class="iframe-container" data-transition={transition} data-background-color="var(--background)">
  <iframe title={data.title} src={data.url} style="--aspect-ratio: {data.ratio}"></iframe>
  {#if data.notes}
    <Notes notes={data.notes} />
  {/if}
</section>

<style>
  .iframe-container {
    display: flex !important;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 90vh;
    padding: var(--padding);
    box-sizing: border-box;
    
    iframe {
      border-radius: 1rem;
      border: none;
      aspect-ratio: var(--aspect-ratio);
      height: 100%;
      background-color: #fff;
    }
  }
</style>
