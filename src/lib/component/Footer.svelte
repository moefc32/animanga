<script>
  const getYear = new Date().getFullYear();
  const currentYear = (getYear > 2018 ? `2018 - ` : "") + getYear;
</script>

<footer class="container mt-5 py-4 border-top text-center text-muted">
  <div class="row">
    <div class="col-md-6 text-center text-md-start">
      <a
        href="https://mf-chan.com"
        class="text-decoration-none"
        target="_blank"
      >
        Mfc
      </a>
      &copy; {currentYear}
    </div>
    <div class="col-md-6 text-center text-md-end">
      This web page licensed under
      <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>
    </div>
  </div>
</footer>
