interface Profile {
  displayName: string;
  bio?: string;
  website?: string;
  avatarUrl?: string;
}
function renderProfile(profile: Profile): string {
  const bioText = profile.bio ? profile.bio : "No bio provided";
  const webText = profile.website ? ` | Web: ${profile.website}` : "";
  return `${profile.displayName} - ${bioText}${webText}`;
}
// EXPLORE:If you call profile.bio.toUpperCase() directly, TypeScript throws: "Object is possibly undefined".
// Why? Because strictNullChecks forces you to acknowledge that an optional property might not exist. Calling a string method on undefined crashes the JavaScript engine.