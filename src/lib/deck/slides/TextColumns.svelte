<script>
  import { CustomPill, Pointer, Notes } from "$lib/deck/partials";
  export let transition;
  export let autoAnimate = false;
  export let data = {
    customPill: {
      text: "{Custom Pill}",
      color: "var(--c-text)",
      background: "var(--c-highlight)",
      position: "top left",
    },
    columns: [
      {
        width: "auto",
        pointer: {
          text: "{Pointer}",
          color: "var(--c-text)",
          background: "var(--c-highlight)",
          position: "top right",
        },
        title: {
          content: "{Title}",
          level: 2,
          classes: "medium-heading",
        },
        text: {
          content: "{Content}",
          classes: "small-heading",
        },
      },
    ],
  };
</script>

<section class="text-columns" data-transition={transition} data-auto-animate={autoAnimate}>
  {#if data.customPill}
    <CustomPill data={data.customPill} />
  {/if}
  <div class="text-columns-container" style="--columns: {data.columns.length};">
    {#each data.columns as column}
      <div
        class:has-pointer={column.pointer}
        class="column"
        style="--width: {column.width}"
      >
        {#if column.pointer}
          <Pointer data={column.pointer} />
        {/if}
        {#if column.title}
        <svelte:element
          this={`h${Math.min(Math.max(column.title.level, 1), 6)}`}
          data-id={column.title.dataId}
          class={column.title.classes}
            >{@html column.title.content}</svelte:element
          >
        {/if}
        {#if column.text}
          <div class="text {column.text.classes}">
            {@html column.text.content}
          </div>
        {/if}
      </div>
    {/each}
  </div>
  {#if data.notes}
    <Notes notes={data.notes} />
  {/if}
</section>


<style>
  .text-columns {
    display: flex !important; /* override revealjs */
    flex-direction: column;
    gap: var(--padding);
    justify-content: center;
    padding: var(--padding);
  }
  .text-columns-container {
    display: grid !important; /* override revealjs */
    grid-template-columns: repeat(var(--columns), minmax(300px, 1fr));
    gap: 1em;
    text-align: left;
    :global(li pre) {
      display: inline-block;
      /* margin-right: 0.5em; */
    }
  }
  .column {
    width: var(--width);
    padding: 1em;
    :global(ul, ol) {
      padding-left: 1.5em;
    }
    .text {
      margin-top: 1em;
    }
    &.has-pointer {
      position: relative;
    }
  }
</style>
