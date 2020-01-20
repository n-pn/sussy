<script>
    import XIcon from './XIcon.svelte'

    export let mods = ''
    export let text = 'Button'

    export let icon_prefix
    export let icon_suffix
</script>

<button class="m-button {mods}">
    {#if icon_prefix}
        <XIcon name={icon_prefix} />
    {/if}

    {#if text}
        <span>{text}</span>
    {/if}

    {#if icon_suffix}
        <XIcon name={icon_suffix} />
    {/if}
</button>
