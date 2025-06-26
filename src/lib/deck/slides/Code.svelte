<script>
  import Notes from "../partials/Notes.svelte";

  export let transition = "fade";
  export let autoAnimate = false;
  export let data = {
    codeBlocks: [
      {
        dataId: "code",
        language: "html",
        code: "console.log('Hello, world!');",
        highlight: true,
      },
    ],
  };
</script>

<section
  class="code"
  data-transition={transition}
  data-background-color="var(--background)"
  data-auto-animate={autoAnimate}
>
  {#if data.codeBlocks}
    {#each data.codeBlocks as codeBlock, index}
      <pre data-id={codeBlock.dataId + index}>
        <code
          data-trim
          data-noescape
          class={`language-${codeBlock.language}`}
          data-line-numbers={codeBlock.highlight}>
        {codeBlock.code}
      </code></pre>
    {/each}
  {/if}
  {#if data.notes}
    <Notes notes={data.notes} />
  {/if}
</section>

<style>
  .code {
    text-align: left;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  pre {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;
    overflow: hidden;
    text-transform: none;
    min-width: 50vw;
    margin: 2rem !important;
    margin-right: 5rem !important;
    font-size: 1.5rem;
    line-height: 1.2;
  }
  code {
    border-radius: 0.5em;
    width: 100%;
  }
  :global(.hljs-ln-numbers) {
    min-width: 47px;
  }
</style>
