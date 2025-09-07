export default async function getUrlSegments(url) {
    const regex = /^https:\/\/myanimelist\.net\/(anime|manga)\/(\d+)/;

    try {
        if (regex.test(url)) {
            const matches = url.match(regex);

            if (matches) {
                const mal_id = matches[2];
                const media = matches[1];

                return { mal_id, media }
            }
        }

        throw new Error('The URL is invalid!');
    } catch (e) {
        console.error(e);
        throw e;
    }
}
