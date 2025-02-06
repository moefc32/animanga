<script>
  import "../app.css";
  import { Toasts } from "svoast";

  import Header from "$lib/component/Header.svelte";
  import Footer from "$lib/component/Footer.svelte";
</script>

<svelte:head>
  <title>
    {import.meta.env.VITE_APP_NAME} | Faizal Chan's Website
  </title>

  <meta property="og:title" content={import.meta.env.VITE_APP_NAME} />
  <meta property="og:site_name" content="Faizal Chan's Website" />
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Anime and manga collection by Faizal Chan."
  />
  <meta property="og:image" content="https://mf-chan.com/og.jpg" />

  <script
    src="https://www.googletagmanager.com/gtag/js?id=UA-131278165-1"
    async
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "UA-131278165-1");
  </script>
</svelte:head>

<Header />
<slot />
<Footer />
<Toasts position={"bottom-center"} />
