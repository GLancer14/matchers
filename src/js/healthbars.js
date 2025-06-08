export default function sortCharactersByHealth(charatersStats) {
  return charatersStats.sort((a, b) => b.health - a.health);
}