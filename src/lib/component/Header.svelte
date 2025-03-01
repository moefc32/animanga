<script>
    import { goto } from '$app/navigation';

    function handleClick() {
        if (window.location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            goto('/');
        }
    }
</script>

<header class="fixed px-6 py-[15px] top-0 left-0 w-full z-1000">
    <div
        class="flex justify-center items-center px-6 h-[70px] bg-white/85 border-[1px] border-gray-300 rounded-xl shadow-lg backdrop-blur-xs"
    >
        <button
            class="text-2xl me-auto cursor-pointer outline-none ring-0 active:ring-0 focus:ring-0"
            on:click={() => handleClick()}
        >
            {import.meta.env.VITE_APP_NAME}
        </button>
    </div>
</header>
