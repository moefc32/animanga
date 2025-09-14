<script>
    import { Star } from 'lucide-svelte';

    export let item;
</script>

<div class="flex flex-col gap-3" data-aos="fade-up">
    <a
        href={`${item.media}-${item.mal_id}`}
        class="block card pt-[150%] bg-cover! w-full rounded-lg border-[1px] border-gray-300 overflow-hidden shadow-lg relative"
        style="background: url({item.image_thumb}) center center no-repeat;"
        title={item.title_english || item.title}
    >
        <div
            class="badge {item.media === 'anime'
                ? 'bg-blue-600 border-blue-600'
                : 'bg-green-600 border-green-600'} text-white absolute bottom-2 left-2"
        >
            {item.media}
        </div>
        <div class="badge badge-warning absolute bottom-2 right-2">
            <Star size={12} />
            {item.score ?? 'N/A'}
        </div>
    </a>
    <a
        href={`${item.media}-${item.mal_id}`}
        class="mb-3 text-xl line-clamp-2"
        title={item.title_english || item.title}
    >
        {item.title_english || item.title}
    </a>
</div>
