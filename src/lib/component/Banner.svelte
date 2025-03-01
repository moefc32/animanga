<script>
    export let dataLoading;
    export let count;
</script>

<section
    class="mb-5 px-3 pt-[120px] pb-5 bg-[linear-gradient(to_bottom_left,rgba(33,150,243,0.75),rgba(76,175,80,0.75))] bg-fixed text-white text-center h-[250px]"
>
    <h1 class="m-3 text-3xl">Anime and Manga Collection</h1>
    <p class="mx-3">
        {dataLoading
            ? 'Loading data, please wait...'
            : `There are currently ${count} ${count > 1 ? 'titles' : 'title'} recommended by Mfc`}
    </p>
</section>
