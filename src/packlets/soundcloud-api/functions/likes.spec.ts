import { getLikes } from "./likes";

/**
 * https://soundcloud.com/qwaston
 */
const testUserId: string = "265457448";
jest.setTimeout(30000);

it("should be able to get all my likes", async () => {
  const likes = await getLikes(testUserId);

  expect(likes.length).toBeGreaterThan(800);

  // no duplicates
  const sawIds: number[] = [];
  for (const like of likes) {
    if (!like.track) {
      continue;
    }

    expect(sawIds.includes(like.track.id)).toBe(false);
    sawIds.push(like.track.id);
  }
});
