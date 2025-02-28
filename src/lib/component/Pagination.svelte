<script>
    import { ChevronLeft, ChevronRight } from 'lucide-svelte';

    export let currentPage;
    export let getTotalPages;
    export let navigate;
</script>

<div class="flex justify-center items-center gap-3">
    <div class="join shadow">
        <select
            class="select pe-9 border-[1px] border-gray-200 rounded-s-md"
            bind:value={currentPage}
            on:click={() => navigate(currentPage)}
        >
            {#each Array(getTotalPages()) as _, i}
                <option value={i + 1}>
                    {(i + 1).toString().padStart(2, '0')}
                </option>
            {/each}
        </select>
        <button
            class="join-item px-3 text-sm font-normal border-[1px] border-gray-200"
        >
            <span class="text-nowrap">
                of {getTotalPages()}
                {getTotalPages() > 1 ? 'pages' : 'page'}
            </span>
        </button>
        <button
            class="join-item btn px-3"
            disabled={currentPage === 1}
            on:click={() => navigate(currentPage - 1)}
        >
            <ChevronLeft size={18} />
        </button>
        <button
            class="join-item btn px-3"
            disabled={currentPage === getTotalPages()}
            on:click={() => navigate(currentPage + 1)}
        >
            <ChevronRight size={18} />
        </button>
    </div>
</div>
