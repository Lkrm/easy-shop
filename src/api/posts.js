import api from "./api";
import {ENDPOINTS} from "./api.constants";
// todo: prettier and spaces

/**
 @func fetchPosts
 Function for fetching posts of API.
 In fulfilled case - return array of posts
 In failure case - return object of error
 @param limit - count of posts
 @param offset - offset from that start to receive posts
 */
export const fetchPosts = (limit, offset) => api.get(ENDPOINTS.posts, { params: { limit, offset }})
  .then((res) => res.data);
