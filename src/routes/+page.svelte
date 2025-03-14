<script>
    import { onMount } from 'svelte';
    import { toast } from 'svoast';
    import AOS from 'aos';
    import Fuse from 'fuse.js';

    import Banner from '$lib/component/Banner.svelte';
    import Filter from '$lib/component/Filter.svelte';
    import AnimangaCard from '$lib/component/AnimangaCard.svelte';
    import Pagination from '$lib/component/Pagination.svelte';

    const fuseOptions = {
        isCaseSensitive: false,
        findAllMatches: true,
        keys: ['title', 'title_english', 'title_japanese', 'studios.name'],
        threshold: 0.2,
        ignoreLocation: true,
    };

    let dataLoading = true;
    let animanga = [];
    let currentPage = 1;
    let pageSize = parseInt(import.meta.env.VITE_PAGINATION_ITEMS, 10);
    let searchKeyword = '';
    let mediaFilter = '';
    let searchResult = [];
    // let modal = {
    //     authors: [],
    //     studios: [],
    //     genres: [],
    //     loadedImage: '',
    // };

    // async function loadModalImage() {
    //     try {
    //         let img = new Image();

    //         await new Promise((resolve, reject) => {
    //             img.addEventListener('load', () => {
    //                 modal.loadedImage = img.src;
    //                 resolve();
    //             });

    //             img.addEventListener('error', () => {
    //                 reject(new Error('Failed to load image!'));
    //             });

    //             img.src = modal.image_large;
    //         });
    //     } catch (e) {
    //         throw e;
    //     }
    // }

    // function openModal(item) {
    //     modal.loadedImage = '';
    //     const tempObject = { ...modal, ...item };

    //     tempObject.authors = tempObject.authors.map((item, i) => {
    //         return `${i !== 0 ? ' ' : ''} <a href="${item.url}" target="_blank">${item.name}</a>`;
    //     });

    //     tempObject.studios = tempObject.studios.map((item, i) => {
    //         return `${i !== 0 ? ' ' : ''} <a href="${item.url}" target="_blank">${item.name}</a>`;
    //     });

    //     tempObject.genres = tempObject.genres.map((item, i) => {
    //         return `${i !== 0 ? ' ' : ''} <a href="${item.url}" target="_blank">${item.name}</a>`;
    //     });

    //     if (tempObject.season) {
    //         const words = tempObject.season.toLowerCase().split(' ');
    //         const titleCasedWords = words.map(word => {
    //             return word.charAt(0).toUpperCase() + word.slice(1);
    //         });

    //         tempObject.season = titleCasedWords.join(' ');
    //     }

    //     modal = tempObject;
    //     loadModalImage();
    //     animangaModal.show();
    // }

    function search() {
        if (!searchKeyword && !mediaFilter) {
            searchResult = [];

            AOS.refresh();
            return;
        }

        let searchData = animanga;

        if (mediaFilter)
            searchData = searchData.filter(item => item.media === mediaFilter);

        if (searchKeyword) {
            const fuse = new Fuse(searchData, fuseOptions);
            searchData = fuse.search(searchKeyword);
            searchData = searchData.map(item => item.item);
        }

        searchResult = searchData;
        currentPage = 1;
        AOS.refresh();
    }

    async function resetFilter() {
        currentPage = 1;
        searchKeyword = '';
        mediaFilter = '';
        searchResult = [];
    }

    function getPageItems() {
        const startIndex = (currentPage - 1) * pageSize;

        return searchKeyword || mediaFilter
            ? searchResult.slice(startIndex, startIndex + pageSize)
            : animanga.slice(startIndex, startIndex + pageSize);
    }

    function getTotalPages() {
        return searchKeyword || mediaFilter
            ? Math.ceil(searchResult.length / pageSize)
            : Math.ceil(animanga.length / pageSize);
    }

    function navigate(page) {
        if (page !== currentPage && page >= 1 && page <= getTotalPages()) {
            currentPage = page;

            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 10);
        }
    }

    onMount(async () => {
        AOS.init();

        try {
            const response = await fetch(import.meta.env.VITE_BACKEND);
            const { data } = await response.json();

            animanga = data.animanga;
            dataLoading = false;
        } catch (e) {
            console.error(e);
            toast.error(
                'Cannot fetch data from the backend, please try again later!',
            );
        }
    });

    $: searchKeyword, mediaFilter, search();
</script>

<Banner {dataLoading} count={animanga.length} />

<main class="flex flex-1 flex-col gap-9 mx-12 my-6">
    <div class="flex flex-col gap-6 w-full">
        <Filter bind:searchKeyword bind:mediaFilter {resetFilter} />
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 pt-2"
        >
            {#if getPageItems().length}
                {#each getPageItems() as item, i}
                    <AnimangaCard {item} />
                {/each}
            {:else if !dataLoading}
                <div class="col-span-full py-24 text-gray-500 text-center">
                    - No title found -
                </div>
            {/if}
        </div>
        {#if searchKeyword || mediaFilter ? searchResult.length : animanga.length}
            <Pagination {currentPage} {getTotalPages} {navigate} />
        {/if}
    </div>
</main>
