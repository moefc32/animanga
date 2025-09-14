<script>
    import { Star, ExternalLink } from 'lucide-svelte';

    export let data;

    const { content } = data;

    const mediaType = {
        anime: 'Anime',
        manga: 'Manga',
    };

    let details = [];

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    $: {
        details = [
            content.status,
            content.season
                ? content.year
                    ? `${capitalize(content.season)} ${content.year}`
                    : capitalize(content.season)
                : content.year,
            content.episodes
                ? `${content.episodes} ${content.episodes > 1 ? 'Episodes' : 'Episode'}`
                : null,
            content.chapters
                ? `${content.chapters} ${content.chapters > 1 ? 'Chapters' : 'Chapter'}`
                : null,
            content.volumes
                ? `${content.volumes} ${content.volumes > 1 ? 'Volumes' : 'Volume'}`
                : null,
        ].filter(Boolean);
    }
</script>

<main
    class="flex flex-1 flex-col md:flex-row md:items-start gap-9 md:gap-12 mx-12 mt-[125px] mb-6"
>
    <img
        src={content.image_large}
        class="card mx-auto max-w-[25vw] sm:max-w-[30vw] lg:max-w-max lg:h-[68vh] aspect-2/3 border-[1px] border-gray-300 shadow-lg"
        alt={content.title}
    />
    <div class="flex flex-1 flex-col gap-3">
        <div class="flex flex-col gap-1 mb-3 w-full">
            <h1 class="text-3xl">{content.title_english || content.title}</h1>
            <h2 class="text-gray-400 text-lg">{content.title_japanese}</h2>
        </div>
        <div class="flex flex-col gap-2">
            <div
                class="flex items-start flex-col-reverse lg:flex-row gap-3 mb-3"
            >
                <div class="flex items-center gap-1">
                    <div
                        class="badge {content.media === 'anime'
                            ? 'bg-blue-600 border-blue-600'
                            : 'bg-green-600 border-green-600'} text-white"
                    >
                        {mediaType[content.media]}
                    </div>
                    <div class="badge badge-warning">
                        <Star size={12} />
                        {content.score ?? 'N/A'}
                    </div>
                </div>
                <div class="flex items-center gap-1">
                    {details.join(', ')}
                </div>
            </div>
            {#if content.synopsis}
                <div class="flex flex-col gap-2 my-3">
                    <span class="font-semibold">Synopsis</span>
                    <p class="text-justify">{content.synopsis}</p>
                </div>
            {/if}
            {#if content.authors.length}
                <div class="flex flex-col md:flex-row items-start gap-1">
                    <span class="font-semibold w-[70px]">
                        {content.authors.length > 1 ? 'Authors' : 'Author'}
                    </span>
                    <div class="flex flex-1 flex-wrap gap-1">
                        {#each content.authors as item, i}
                            <a
                                href={item.url}
                                class="badge badge-error text-white whitespace-nowrap"
                                target="_blank"
                            >
                                {item.name}
                            </a>
                        {/each}
                    </div>
                </div>
            {/if}
            {#if content.studios.length}
                <div class="flex flex-col md:flex-row items-start gap-1">
                    <span class="font-semibold w-[70px]">
                        {content.studios.length > 1 ? 'Studios' : 'Studio'}
                    </span>
                    <div class="flex flex-1 flex-wrap gap-1">
                        {#each content.studios as item, i}
                            <a
                                href={item.url}
                                class="badge badge-error text-white whitespace-nowrap"
                                target="_blank"
                            >
                                {item.name}
                            </a>
                        {/each}
                    </div>
                </div>
            {/if}
            {#if content.genres.length}
                <div class="flex flex-col md:flex-row items-start gap-1">
                    <span class="font-semibold w-[70px]">
                        {content.genres.length > 1 ? 'Genres' : 'Genre'}
                    </span>
                    <div class="flex flex-1 flex-wrap gap-1">
                        {#each content.genres as item, i}
                            <a
                                href={item.url}
                                class="badge badge-accent whitespace-nowrap"
                                target="_blank"
                            >
                                {item.name}
                            </a>
                        {/each}
                    </div>
                </div>
            {/if}
            <a
                href={content.url}
                class="btn btn-primary self-start mt-6"
                target="_blank"
            >
                <ExternalLink size={16} /> View on MyAnimeList
            </a>
        </div>
    </div>
</main>
