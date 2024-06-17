export class Artwork {
    artworkId: number;
    artworkTitle: string;
    price: number;
    year: number;
    image: Uint8Array;

    constructor() {
        this.artworkId = 0;
        this.artworkTitle = "";
        this.price = 0;
        this.year = 0;
        this.image = new Uint8Array();
    }
}
