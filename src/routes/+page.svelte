<script>
  import { onMount } from "svelte";
  import { toast } from "svoast";
  import Fuse from "fuse.js";

  import Title from "$lib/component/Title.svelte";

  // const animangaModalEl = document.querySelector("#animanga-modal");
  // const animangaModal =
  //   animangaModalEl && new bootstrap.Modal(animangaModalEl, {});

  const fuseOptions = {
    isCaseSensitive: false,
    findAllMatches: true,
    keys: ["title", "title_english", "title_japanese", "studios.name"],
    threshold: 0.2,
    ignoreLocation: true,
  };

  const mediaType = [
    {
      name: "anime",
      pretty: "Anime",
    },
    {
      name: "manga",
      pretty: "Manga",
    },
  ];

  let dataLoading = true;
  let animanga = [];
  let randomPick = [];
  let animangaCurrentPage = 1;
  let animangaPageSize = 36;
  let pageSize = 12;
  let searchKeyword = "";
  let mediaFilter = "";
  let searchResult = [];
  let modal = {
    authors: [],
    studios: [],
    genres: [],
    loadedImage: "",
  };

  async function loadModalImage() {
    try {
      let img = new Image();

      await new Promise((resolve, reject) => {
        img.addEventListener("load", () => {
          modal.loadedImage = img.src;
          resolve();
        });

        img.addEventListener("error", () => {
          reject(new Error("Failed to load image!"));
        });

        img.src = modal.image_large;
      });
    } catch (e) {
      throw e;
    }
  }

  function openModal(item) {
    modal.loadedImage = "";
    const tempObject = { ...modal, ...item };

    tempObject.authors = tempObject.authors.map((item, i) => {
      return `${i !== 0 ? " " : ""} <a href="${item.url}" target="_blank">${item.name}</a>`;
    });

    tempObject.studios = tempObject.studios.map((item, i) => {
      return `${i !== 0 ? " " : ""} <a href="${item.url}" target="_blank">${item.name}</a>`;
    });

    tempObject.genres = tempObject.genres.map((item, i) => {
      return `${i !== 0 ? " " : ""} <a href="${item.url}" target="_blank">${item.name}</a>`;
    });

    if (tempObject.season) {
      const words = tempObject.season.toLowerCase().split(" ");
      const titleCasedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });

      tempObject.season = titleCasedWords.join(" ");
    }

    modal = tempObject;
    loadModalImage();
    animangaModal.show();
  }

  function search() {
    if (!searchKeyword && !mediaFilter) {
      searchResult = [];

      AOS.refresh();
      return;
    }

    let searchData = animanga;

    if (mediaFilter)
      searchData = searchData.filter((item) => item.media === mediaFilter);

    if (searchKeyword) {
      const fuse = new Fuse(searchData, fuseOptions);
      searchData = fuse.search(searchKeyword);
      searchData = searchData.map((item) => item.item);
    }

    searchResult = searchData;
    animangaCurrentPage = 1;
    AOS.refresh();
  }

  function resetFilter(e) {
    animangaCurrentPage = 1;
    searchKeyword = "";
    mediaFilter = "";
    searchResult = [];
  }

  function getPageItems() {
    const startIndex = (animangaCurrentPage - 1) * animangaPageSize;
    return searchKeyword || mediaFilter
      ? searchResult.slice(startIndex, startIndex + animangaPageSize)
      : animanga.slice(startIndex, startIndex + animangaPageSize);
  }

  function totalPages() {
    return searchKeyword || mediaFilter
      ? Math.ceil(searchResult.length / animangaPageSize)
      : Math.ceil(animanga.length / animangaPageSize);
  }

  function goToPage(page) {
    if (page !== animangaCurrentPage && page >= 1 && page <= totalPages()) {
      animangaCurrentPage = page;

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 10);
    }
  }

  function prevPage() {
    if (animangaCurrentPage > 1) {
      animangaCurrentPage--;

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 10);
    }
  }

  function nextPage() {
    if (animangaCurrentPage < totalPages()) {
      animangaCurrentPage++;

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 10);
    }
  }

  onMount(async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND);
      const { data } = await response.json();

      animanga = data.animanga;
      randomPick = data.randomPick;
      dataLoading = false;
    } catch (e) {
      console.error(e);
      toast.error(
        "Cannot fetch data from the backend, please try again later."
      );
    }
  });
</script>

<Title />

<main class="flex-1 mx-12 my-6">
  <h1>Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
  </p>
</main>
