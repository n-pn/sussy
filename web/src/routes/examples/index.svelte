<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`examples.json`)
            .then(r => r.json())
            .then(posts => {
                return { posts }
            })
    }
</script>

<script>
    export let posts
</script>

<svelte:head>
    <title>Examples</title>
</svelte:head>

<article>
    <h1>Recent posts</h1>
    <hr />
    <ul>
        {#each posts as post}
            <li>
                <a rel="prefetch" href="examples/{post.slug}">{post.title}</a>
            </li>
        {/each}
    </ul>
</article>
