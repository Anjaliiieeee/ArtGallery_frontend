export class Artist {
  artistId: number;
  artistName: string;
  artistBio: string;
  image: Uint8Array;

  constructor() {
      this.artistId = 0;
      this.artistName = "";
      this.artistBio = "";
      this.image = new Uint8Array();
  }
}
