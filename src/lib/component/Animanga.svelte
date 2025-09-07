<script>
    import { Search, RefreshCw, Plus, Trash2, Check } from 'lucide-svelte';
    import { toast } from 'svoast';

    export let animanga;

    const mediaType = {
        anime: 'Anime',
        manga: 'Manga',
    };

    let searchKeyword = '';
    let editContext = {
        id: '',
        url: '',
    };

    function openCreate() {
        editContext = {
            id: '',
            url: '',
        };

        animanga_detail.showModal();
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
            toast.success('New animanga created successfully.');
        } catch (e) {
            console.error(e);
            toast.error('Error when creating new animanga!');
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
                    body: JSON.stringify(editContext),
                },
            );
            if (!response.ok) throw new Error();

            const { data } = await response.json();
            animanga = data;

            animanga_detail.close();
            toast.success('Animanga updated successfully.');
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
</script>

<div class="flex flex-col gap-6">
    <div class="flex justify-end items-center gap-3 w-full">
        <label class="input w-full">
            <Search size={16} />
            <input
                type="text"
                placeholder="Search..."
                bind:value={searchKeyword}
            />
        </label>
        <button class="btn btn-success ms-auto" on:click={() => openCreate()}>
            <Plus size={16} /> Add New
        </button>
    </div>
    <div class="overflow-x-auto w-full">
        <table class="table">
            <thead>
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
                {#each animanga as item, i}
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
                                <span class="text-lg">{item.title}</span>
                                <span class="text-gray-500 text-xs">
                                    {item.title_japanese}
                                </span>
                            </div>
                        </td>
                        <td>{mediaType[item.media]}</td>
                        <td>{item.year || '-'}</td>
                        <td class="whitespace-nowrap">{item.status}</td>
                        <td class="w-[1%] whitespace-nowrap">
                            <button class="btn btn-sm bg-blue-500 text-white">
                                <RefreshCw size={12} />
                            </button>
                            <button
                                class="btn btn-sm btn-error text-white"
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
