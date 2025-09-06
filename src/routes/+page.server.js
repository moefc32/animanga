import model from '$lib/server/model/animanga';

export async function load({ params }) {
    const animanga = await model.getData();

    return {
        animanga,
    };
}
