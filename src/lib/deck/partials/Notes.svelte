<script>
  export let notes;
</script>

<aside class="notes">
  {@html notes}
</aside>

<style>
  :global(#speaker-controls ol li + li, #speaker-controls ul li + li) {
    margin-top: 0.5rem;
  }
</style>
