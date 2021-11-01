import { SoundcloudLikeCollectionSchema } from "./like-collection";
import response from "./testing-response";

it("should be able to parse the testing response", () => {
  expect(() =>
    SoundcloudLikeCollectionSchema.parse(response.collection)
  ).not.toThrow();
});
