<script>
  import XIcon from '../_shared/XIcon.svelte'
  import XButton from '../_shared/XButton.svelte'

  const colors = [
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'indigo',
    'purple',
    'pink',
  ]
  const styles = ['text', 'line', 'solid', 'raise']
  const sizes = ['tiny', 'small', 'medium', 'large', 'huge']
  const variants = [
    'default',
    'primary',
    'success',
    'warning',
    'harmful',
    'disable',
  ]

  // your script goes here
</script>

<style type="text/scss">
  .button-list {
    // display: block;
    display: flex;
    // justify-content: space-around;

    &._color .m-button {
      width: 6rem;
    }
  }

  :global(.m-button + .m-button) {
    margin-left: 1rem;
  }
</style>

<svelte:head>
  <title>Buttons - Molds</title>
</svelte:head>

<article>
  <h1>Buttons</h1>

  <hr />

  <h2>Sizes</h2>

  <div class="button-list">
    {#each sizes as size}
      <XButton mods="_{size}" text={size + ' button'} />
    {/each}
  </div>

  <hr />

  <h2>Widths</h2>

  <div class="button-list">
    <XButton mods="_narrow _line" text="Narrow button" />
    <XButton mods="_normal _success _solid" text="Normal button" />
    <XButton mods="_widely _disable _raise _pill" text="Widely button" />
  </div>

  <div class="button-list">
    <XButton mods="_block _raise _large _primary" text="Block button" />
  </div>

  <hr />

  <h2>Styles</h2>

  <div class="button-list">
    {#each styles as style}
      <button class="m-button _{style} _primary">
        <span>{style}</span>
      </button>
    {/each}
  </div>

  <hr />

  <h2>Icons</h2>

  <div class="button-list">

    <button class="m-button _pill">
      <XIcon name="feather" />
    </button>

    <button class="m-button _harmful">
      <XIcon name="x" />
      <span>Close</span>
    </button>

    <button class="m-button _primary _raise">
      <span>Next</span>
      <XIcon name="arrow-right" />
    </button>
    <button class="m-button _line ">
      <XIcon name="chevron-left" />
      <span>Left and right</span>
      <XIcon name="chevron-right" />
    </button>
  </div>

  <hr />

  <h2>Variants</h2>

  {#each styles as style}
    <div class="button-list">
      {#each variants as variant}
        <XButton mods="_{style} _{variant}" text={variant} />
      {/each}
      <a href="/" class="m-button _{style}">
        <span>Link</span>
      </a>
    </div>
  {/each}

  <hr />

  <h2>Colors</h2>

  {#each colors as color}
    <div class="button-list _color">
      {#each styles as style}
        <button class="m-button _{style} _{color}">
          <span>{color}</span>
        </button>
      {/each}
    </div>
  {/each}

  <hr />

</article>
