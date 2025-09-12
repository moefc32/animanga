<script>
    import { Search, RefreshCw, Plus, Trash2, Check } from 'lucide-svelte';
    import { toast } from 'svoast';
    import Fuse from 'fuse.js';

    import fuseOptions from '$lib/fuseOptions';

    export let animanga;

    const mediaType = {
        anime: 'Anime',
        manga: 'Manga',
    };

    let pageItems = [];
    let searchKeyword = '';
    let searchResult = [];
    let editContext = {
        id: '',
        url: '',
    };

    function search() {
        if (!searchKeyword) {
            searchResult = [];
            return;
        }

        let searchData = animanga;

        if (searchKeyword) {
            const fuse = new Fuse(searchData, fuseOptions);
            searchData = fuse.search(searchKeyword);
            searchData = searchData.map(item => item.item);
        }

        searchResult = searchData;
    }

    function openCreate() {
        editContext = {
            id: '',
            url: '',
        };

        animanga_detail.showModal();
    }

    function trimText(text, maxLength = 30) {
        if (!text) return '';
        if (text.length <= maxLength) return text;

        const nextSpace = text.indexOf(' ', maxLength);
        const end = nextSpace > 0 ? nextSpace : text.length;

        return text.slice(0, end) + ' ...';
    }

    async function submitCreate() {
        try {
            const response = await fetch('/administration/animanga', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editContext),
            });
            if (!response.ok) throw new Error();

            const { data } = await response.json();
            animanga = data;

            animanga_detail.close();
            toast.success('New animanga added successfully.');
        } catch (e) {
            console.error(e);
            toast.error('Error when adding new animanga!');
        }
    }

    async function submitUpdateAll() {
        try {
            for (let i = 0; i < animanga.length; i++) {
                const response = await fetch(
                    `/administration/animanga?id=${animanga[i].id}`,
                    {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                );
                if (!response.ok) throw new Error();

                const { data } = await response.json();
                const index = animanga.findIndex(i => i.id === data.id);
                if (index !== -1) animanga[index] = data;

                const title = trimText(data.title_english || data.title);
                toast.success(
                    `${mediaType[data.media]} "${title}" updated successfully.`,
                );

                await new Promise(r => setTimeout(r, 1250));
            }
        } catch (e) {
            console.error(e);
            toast.error('Error when updating the animanga!');
        }
    }

    async function submitUpdate() {
        try {
            const response = await fetch(
                `/administration/animanga?id=${editContext?.id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            if (!response.ok) throw new Error();

            const { data } = await response.json();
            const index = animanga.findIndex(i => i.id === data.id);
            if (index !== -1) animanga[index] = data;

            const title = trimText(data.title_english || data.title);
            toast.success(
                `${mediaType[data.media]} "${title}" updated successfully.`,
            );
        } catch (e) {
            console.error(e);
            toast.error('Error when updating the animanga!');
        }
    }

    async function submitDelete() {
        try {
            const response = await fetch(
                `/administration/animanga?id=${editContext?.id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            if (!response.ok) throw new Error();

            const { data } = await response.json();
            animanga = data;

            animanga_delete.close();
            toast.success('Animanga deleted successfully.');
        } catch (e) {
            console.error(e);
            toast.error('Error when deleting the animanga!');
        }
    }

    $: {
        [searchKeyword], search();
        pageItems = searchKeyword ? searchResult : animanga;
    }
</script>

<div class="flex flex-col gap-6">
    <div class="flex justify-end items-center gap-3 w-full">
        <label class="input flex-1">
            <Search size={16} />
            <input
                type="text"
                placeholder="Search..."
                bind:value={searchKeyword}
            />
        </label>
        <div class="flex items-center gap-1 ms-auto">
            <button class="btn btn-success" on:click={() => openCreate()}>
                <Plus size={16} /> Add New
            </button>
            <button
                class="btn bg-blue-500 text-white"
                on:click={() => {
                    submitUpdateAll();
                }}
            >
                <RefreshCw size={12} /> Refresh All
            </button>
        </div>
    </div>
    <div class="overflow-x-auto w-full max-h-[calc(100dvh-265px)]">
        <table class="table">
            <thead class="sticky bg-white top-0 z-10">
                <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Media</th>
                    <th>Year</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {#if pageItems.length}
                    {#each pageItems as item, i}
                        <tr
                            class="{i % 2 === 0
                                ? 'bg-black/5 hover:bg-black/9'
                                : 'hover:bg-black/7'} transition duration-100"
                        >
                            <td class="text-right w-[60px] whitespace-nowrap">
                                {i + 1}
                            </td>
                            <td class="max-w-80">
                                <div
                                    class="flex flex-col justify-center gap-2 ps-[95px] bg-size-[80px]! min-h-[120px]"
                                    style="background: url({item.image_thumb}) left top no-repeat;"
                                >
                                    <span class="text-lg"
                                        >{item.title_english ||
                                            item.title}</span
                                    >
                                    <span class="text-gray-500 text-xs">
                                        {item.title_japanese}
                                    </span>
                                </div>
                            </td>
                            <td>{mediaType[item.media]}</td>
                            <td>{item.year || '-'}</td>
                            <td class="whitespace-nowrap"
                                >{item.status || '-'}</td
                            >
                            <td class="w-[1%] whitespace-nowrap">
                                <button
                                    class="btn btn-sm bg-blue-500 text-white"
                                    title="Refresh metadata"
                                    on:click={() => {
                                        editContext.id = item.id;
                                        submitUpdate();
                                    }}
                                >
                                    <RefreshCw size={12} />
                                </button>
                                <button
                                    class="btn btn-sm btn-error text-white"
                                    title="Delete this entry"
                                    on:click={() => {
                                        editContext.id = item.id;
                                        animanga_delete.showModal();
                                    }}
                                >
                                    <Trash2 size={12} />
                                </button>
                            </td>
                        </tr>
                    {/each}
                {:else}
                    <tr>
                        <td class="py-12 text-gray-500 text-center" colspan="6">
                            - No title found -
                        </td>
                    </tr>
                {/if}
            </tbody>
        </table>
    </div>
</div>

<dialog id="animanga_detail" class="modal">
    <div class="modal-box">
        <h3 class="text-lg font-bold">Add New Animanga</h3>
        <div class="flex flex-col gap-2 pt-4">
            <input
                type="text"
                class="input w-full"
                placeholder="Animanga URL"
                bind:value={editContext.url}
            />
        </div>
        <div class="modal-action">
            <button
                class="btn btn-success"
                disabled={!editContext.url}
                on:click={() => submitCreate()}
            >
                <Check size={16} /> Add New
            </button>
            <button class="btn" on:click={() => animanga_detail.close()}>
                Cancel
            </button>
        </div>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>

<dialog id="animanga_delete" class="modal">
    <div class="modal-box">
        <h3 class="text-lg font-bold">Delete Animanga</h3>
        <p class="py-4">Are you sure you want to delete this animanga?</p>
        <div class="modal-action">
            <button
                class="btn btn-error text-white"
                on:click={() => submitDelete()}
            >
                <Trash2 size={16} /> Yes, Delete
            </button>
            <button class="btn" on:click={() => animanga_delete.close()}>
                Cancel
            </button>
        </div>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
