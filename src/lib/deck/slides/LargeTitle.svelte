<script>
  import { CustomPill, Pointer, Notes } from "$lib/deck/partials";
  export let transition;
  export let data = {
    customPill: {
      text: "{Custom Pill}",
      color: "var(--c-text)",
      background: "var(--c-highlight)",
      position: "top left",
    },
    title: {
      content: "{Title}",
      level: 2,
      classes: "xlarge-heading",
    },
  };
</script>

<section class="large-title" data-transition={transition}>
  {#if data.customPill}
    <CustomPill data={data.customPill} />
  {/if}
  {#if data.title}
    <svelte:element
      this={`h${Math.min(Math.max(data.title.level, 1), 6)}`}
      class={data.title.classes | 'xlarge-heading'}
        >{@html data.title.content}</svelte:element
      >
  {/if}
  {#if data.notes}
    <Notes notes={data.notes} />
  {/if}
</section>


<style>
  .large-title {
    width: 100%;
    height: 100%;
    display: flex !important; /* override reveal.js */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--padding);
    text-align: center;
  }
</style>
