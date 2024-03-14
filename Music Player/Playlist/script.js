//Simulate some recently played songs (replace with actual functionality)
const recentlyPlayed = [
  { title: "Song 1", artist: "Artist 1" },
  { title: "Song 2", artist: "Artist 2" },
  { title: "Song 3", artist: "Artist 3" },
];

// Display recently played songs
const lastListening = document.querySelector('.last-listening');
const lastListeningList = document.createElement('ul');
lastListening.appendChild(lastListeningList);

recentlyPlayed.forEach(song => {
  const listItem = document.createElement('li');
  listItem.textContent = ${song.title} - ${song.artist};
  lastListeningList.appendChild(listItem);
});

// Add functionality to playlists (replace with actual functionality)
const playlists = document.querySelectorAll('.playlist');

playlists.forEach(playlist => {
  playlist.addEventListener('click', () => {
    const playlistId = playlist.dataset.id;
    // Handle playlist click (e.g., navigate to playlist details)
    console.log(playlist {playlistId}.clicked);
  });
});