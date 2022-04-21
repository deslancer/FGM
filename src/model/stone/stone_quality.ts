
export class StoneQuality{
    async getStoneQuality() {
        const response = await fetch('https://fgm.3dtour.ua/rings/api/ring_params/diamond_quality/');
        const data = await response.json();

        if (response.ok) {
            return data
        } else {
            throw new Error(data);
        }
    }
}
