<script>
    import { ArrowLeft } from 'lucide-svelte';

    import Animanga from '$lib/component/Animanga.svelte';

    export let data;

    const { animanga } = data;

    const animeCount = animanga
        ? animanga.filter(item => item.media === 'anime').length
        : 0;
    const mangaCount = animanga
        ? animanga.filter(item => item.media === 'manga').length
        : 0;
</script>

<main class="flex flex-1 flex-col gap-3 mx-12 my-6">
    <div
        class="flex gap-3 py-3 bg-blue-500 text-white w-full border-[1px] border-blue-600 rounded-lg shadow-md"
    >
        <a href="/" class="flex flex-row items-center gap-2 m-3 px-3">
            <ArrowLeft size={24} />
            <span class="text-sm leading-6">Back to<br />Home</span>
        </a>
        <div
            class="flex flex-1 flex-col gap-1 px-6 py-3 border-l-[1px] border-gray-200"
        >
            <span class="text-sm">Total Animanga</span>
            <span class="text-3xl">{animanga?.length || 0}</span>
        </div>
        <div
            class="flex flex-1 flex-col gap-1 px-6 py-3 border-l-[1px] border-gray-200"
        >
            <span class="text-sm">
                Anime {animeCount > 1 ? 'Titles' : 'Title'}
            </span>
            <span class="text-3xl">{animeCount}</span>
        </div>
        <div
            class="flex flex-1 flex-col gap-1 px-6 py-3 border-l-[1px] border-gray-200"
        >
            <span class="text-sm">
                Manga {mangaCount > 1 ? 'Titles' : 'Title'}
            </span>
            <span class="text-3xl">{mangaCount}</span>
        </div>
    </div>
    <div
        class="flex flex-col gap-6 px-6 py-3 w-full border-[1px] border-gray-200 rounded-lg shadow-md"
    >
        <Animanga {animanga} />
    </div>
</main>
