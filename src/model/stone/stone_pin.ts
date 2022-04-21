
export class StonePin{
    async getStonePin() {
        const response = await fetch('https://fgm.3dtour.ua/rings/api/ring_params/diamond_pin/');
        const data = await response.json();

        if (response.ok) {
            return data
        } else {
            throw new Error(data);
        }
    }
}
