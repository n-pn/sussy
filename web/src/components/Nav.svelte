<script>
    export let segment
</script>

<style lang="scss">
    nav {
        position: fixed;
        top: 0;
        width: 100%;
        @include z-index(9);
        background-color: #fff;
        border-bottom: 1px solid rgba(255, 62, 0, 0.1);
        font-weight: 300;
        padding: 0 rem(4bs);
        @include box-shadow(3);
    }

    ul {
        margin: 0;
        padding: 0;
    }

    /* clearfix */
    ul::after {
        content: '';
        display: block;
        clear: both;
    }

    li {
        display: block;
        float: left;
    }

    .selected {
        position: relative;
        display: inline-block;
    }

    .selected::after {
        position: absolute;
        content: '';
        width: calc(100% - 1em);
        height: 2px;
        background-color: color(primary, 5);
        display: block;
        bottom: -1px;
    }

    a {
        @include color(primary, 6);
        font-weight: 500;
        text-decoration: none;
        padding: rem(3bs) rem(2bs);
        display: block;
    }
</style>

<nav>
    <ul>
        <li>
            <a class:selected={segment === undefined} href=".">home</a>
        </li>
        <li>
            <a class:selected={segment === 'about'} href="about">about</a>
        </li>

        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
        <li>
            <a rel="prefetch" class:selected={segment === 'blog'} href="blog">
                blog
            </a>
        </li>
    </ul>
</nav>
