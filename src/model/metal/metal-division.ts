export class MetalDivision {
    async getMetalDivision() {
        const response = await fetch('https://fgm.3dtour.ua/rings/api/ring_params/ring_design/');
        const data = await response.json();

        if (response.ok) {
            data.reverse();
            return data
        } else {
            throw new Error(data);
        }
    }
}
