module.exports = function createDreamTeam(members) {
  let result = [];
  if (!Array.isArray(members)) return false;
  for (let member of members) {
    if (typeof member !== "string") continue
    result.push(member.trim()[0].toUpperCase())
  }
  let dreamTeamName = result.sort().join("");
  return dreamTeamName;
};