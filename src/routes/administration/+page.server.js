import model from '$lib/server/model/animanga';

export async function load() {
    const animanga = await model.getData();

    return {
        animanga,
    };
}
