export class MetalColors {
    async getMetalColors() {
        const response = await fetch('https://fgm.3dtour.ua/rings/api/ring_params/ring_metal/');
        const data = await response.json();

        if (response.ok) {
            console.log(data)
            return data
        } else {
            throw new Error(data);
        }
    }
}
