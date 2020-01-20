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
        // border-bottom: 1px solid rgba(255, 62, 0, 0.1);
        // font-weight: 300;
        @include box-shadow(3);
    }

    ul {
        width: 45rem;
        margin: 0 auto !important;
        display: flex;
        @include clearfix();
    }

    a {
        @include color(primary, 6);
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;
        padding: rem(3bs);
        display: block;

        @include hover {
            background-color: rgba(color(primary, 6), 0.1);
        }
        &.selected {
            position: relative;
            display: inline-block;
            &::after {
                position: absolute;
                content: '';
                width: calc(100% - 1.375rem);
                height: rem(2px);
                background-color: color(primary, 5);
                display: block;
                bottom: -1px;
            }
        }
    }
</style>

<nav>
    <ul>
        <li>
            <a class:selected={segment === undefined} href=".">Home</a>
        </li>
        <li>
            <a class:selected={segment === 'typography'} href="typography">
                Typography
            </a>
        </li>
        <li>
            <a class:selected={segment === 'buttons'} href="molds/buttons">
                Buttons
            </a>
        </li>

        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
        <li>
            <a
                rel="prefetch"
                class:selected={segment === 'examples'}
                href="examples">
                Examples
            </a>
        </li>
    </ul>
</nav>
