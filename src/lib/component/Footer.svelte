<script>
    const getYear = new Date().getFullYear();
    const currentYear = (getYear > 2018 ? `2018 - ` : '') + getYear;
</script>

<footer
    class="flex flex-col md:flex-row mx-6 mt-5 px-6 py-5 border-t-[1px] border-gray-300 text-gray-500 text-center"
>
    <div class="flex-1 text-center md:text-left">
        <a
            href="https://mf-chan.com"
            target="_blank"
            class="text-blue-500 hover:text-green-500"
        >
            Mfc
        </a>
        &copy; {currentYear}
    </div>
    <div class="flex-1 text-center md:text-right">
        This web page is licensed under
        <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            class="text-blue-500 hover:text-green-500"
        >
            MIT
        </a>
    </div>
</footer>
