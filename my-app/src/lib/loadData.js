export async function loadJSON() {
    let response = await fetch('/data.json');
    return response.json();
}

export function simulateDataLoading (time) {
    return new Promise((resolve, reject) => {
        setTimeout(async ()=>{
            try {
                const json = await loadJSON();
                resolve(json);
            } catch (err) {
                reject(err)
            }
        }, time);
    });
}