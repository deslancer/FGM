export class MetalSurfaces {
    async getMetalSurfaces() {
        const response = await fetch('https://fgm.3dtour.ua/rings/api/ring_params/ring_surface/');
        const data = await response.json();

        if (response.ok) {
            return data
        } else {
            throw new Error(data);
        }
    }
}
