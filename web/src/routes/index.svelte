<style lang="scss">
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;

    @include screen-width-min(pl) {
      font-size: 4em;
    }
  }

  p {
    margin: 1em auto;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="__bs-5 __bgc-gray2 __rd __p-4-b">
  <h1>Great success!</h1>

  <p>
    <strong>
      Try editing this file (src/routes/index.svelte) to test live reloading.
    </strong>
  </p>
</div>
