<script>
  export let data = {
    text: "pointiepointpoint",
    color: "var(--c-text)",
    background: "var(--c-highlight)",
    position: "top left",
    classes: "",
  };
</script>

<span class="pointer {data.classes}" style="color: {data.color}; background: {data.background}; --bg: {data.background};" data-position={data.position}>
  {@html data.text}
</span>
