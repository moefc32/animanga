<script>
    import { Search, ImagePlay, X } from 'lucide-svelte';

    export let searchKeyword;
    export let mediaFilter;
    export let resetFilter;
</script>

<div class="flex items-center flex-wrap gap-2">
    <label class="input md:flex-1 w-full md:max-w-[450px]">
        <Search size={16} />
        <input type="text" placeholder="Search..." bind:value={searchKeyword} />
    </label>
    <label class="input md:flex-1 w-full md:max-w-[300px] pe-0">
        <ImagePlay size={16} />
        <select
            class="select grow md:flex-1 -ms-3 bg-transparent w-auto border-0 focus:outline-none focus:ring-0"
            bind:value={mediaFilter}
        >
            <option value="" selected>All Media</option>
            <option value="anime">Anime</option>
            <option value="manga">Manga</option>
        </select>
    </label>
    {#if searchKeyword || mediaFilter}
        <div class="w-full md:w-fit">
            <button class="btn btn-warning" on:click={() => resetFilter()}>
                <X size={16} /> Reset Filter
            </button>
        </div>
    {/if}
</div>
