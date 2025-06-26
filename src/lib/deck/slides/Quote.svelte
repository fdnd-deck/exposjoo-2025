<script>
  import { Notes } from "$lib/deck/partials";

  export let transition = "fade";
  export let data = {
    quotes: [
      {
        content: "Quote",
        classes: "large-heading",
        cite: "Author",
      },
    ],
  };
</script>

<section class="quote-slide" data-transition={transition}>
  {#each data.quotes as quote, index}
    <div class="quote {quote.classes} {index > 0 ? 'fragment' : ''}">
      <blockquote class="font-bold">
        {@html quote.content}
      </blockquote>
      {#if quote.cite}
        <cite class="font-medium small-heading">
          {@html quote.cite}
        </cite>
      {/if}
    </div>
  {/each}
  {#if data.notes}
    <Notes notes={data.notes} />
  {/if}
</section>

<style>
  .quote-slide {
    width: 100%;
    height: 100%;
    display: flex !important; /* override reveal.js */
    flex-direction: column;
    justify-content: center;
    padding: var(--padding);
    text-align: left;
    .quote {
      position: absolute;
      max-width: 80%;
      padding: var(--border-radius);
      border-radius: var(--border-radius);
      background-color: var(--c-highlight);
      &:global(:has(~ .visible)) {
        opacity: 0;
      }
    }
    blockquote {
      line-height: 1.5;
      :global(mark) {
        background-color: var(--c-highlight-2);
      }
    }
    cite {
      display: block;
      font-style: normal;
      padding: var(--border-radius) 0 0;
    }
  }
</style>
