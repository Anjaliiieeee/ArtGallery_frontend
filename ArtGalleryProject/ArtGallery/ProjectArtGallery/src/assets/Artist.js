const artists = {
    artist1: {
        name: "Bhaskar Lahiri",
        bio:"Bhaskar Lahiri,a talented artist, draws inspiration from the fascinating and colorful folk art of his home state, West Bengal. His paintings offer a contemporary view of the Bengal he loves. He has exhibited his artworks in various cities and his paintings are cherished by art enthusiasts across Dubai, Bangalore, Mumbai, Delhi, Kolkata, and Chennai. If you're interested, you can explore more of his attractive artworks in our gallery.Moreover, Bhaskar Lahiri's passion for ancient civilizations, including India's rich heritage of philosophy, history, religion, folk culture, literature, and art, deeply influences his artistic expressions. He strives to capture the essence of these age-old treasures in his compositions, paying homage to the cultural heritage of West Bengal.Education:Diploma in Fine Arts, Indian College of Art & Draftsmanship Kolkata, 1986 (3 years course),College of Visual Arts, Kolkata, 1986 (under the guidance of eminent painter, Subhaprasanna)",
        works: [
            "Images/Bhaskar-lahiri/indian-folk.jpg",
            "Images/Bhaskar-lahiri/indian-folk2.jpg",
            "Images/Bhaskar-lahiri/indian-folk3.jpg"
        ],
        image: "Images/Bhaskar-lahiri/Bhaskar-Lahiri.jpg"
    },
    artist2: {
        name: "Gopal Sharma",
        bio:"Gopal was born and brought up in a small and conservative family in Lakhisarai a small town in Bihar. He had a passion for art since childhood and therefore he took art as his profession also. He completed his graduation in painting in 2008. His art generally insist on the physical reality of the objects he observe.",
        works: [
            "Images/gopal-sharma/Indian-contemporary.jpg",
            "Images/gopal-sharma/indian-contemporary2.jpg"
        ],
        image: "Images/gopal-sharma/gopal-sharma.jpeg"
    },

    // Add more artists as needed
    artist3: {
        name: "Vaishali Rajapurkar",
        bio:"After completing my education, I trained under various renowned artists. I have been painting professionally for the last 17 years. I also currently own an art gallery in Pune called Paint Box Art Gallery where I teach art and conduct other art-related activities and workshops such as art appreciation, Tanjore, pottery, and so on.",
        works: [
            "Images/vaishali rajapurkar abstract/Abstract-painting1.jpg",
            "Images/vaishali rajapurkar abstract/Abstract-painting3.jpg",
            "Images/vaishali rajapurkar abstract/1588891156DT_Dwelling-Abstract-painting2.jpg"
        ],
        image: "Images/vaishali rajapurkar abstract/vaishali-rajapurkar.jpeg"
    },

};

function showDetails(artistId) {
    const artist = artists[artistId];
    document.getElementById('artist-list').style.display = 'none';
    document.getElementById('artist-details').style.display = 'block';

    const artistContent = document.getElementById('artist-content');
    artistContent.innerHTML = `
        <h2>${artist.name}</h2>
        <img src="${artist.image}" alt="${artist.name}" style="width:200px; height:200px; border-radius:50%;">
        <p>${artist.bio}</p>
        <h3>Works</h3>
        <div class="works-gallery">
            ${artist.works.map(work => `<img src="${work}" alt="Work" style="width:150px; height:150px; margin: 10px;">`).join('')}
        </div>
    `;
}

function goBack() {
    document.getElementById('artist-list').style.display = 'block';
    document.getElementById('artist-details').style.display = 'none';
}
