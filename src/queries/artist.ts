import { callAxios } from "../hooks/useAxios";

export const getArtistById = async (id: string) =>
  callAxios({
    url: `artists/${id}`,
    method: "GET",
  });

export const getTopTracks = async (id: string) =>
  callAxios({
    url: `artists/${id}/top-tracks`,
    method: "GET",
  });

export const getTopAlbums = async (id: string) =>
  callAxios({
    url: `artists/${id}/albums`,
    method: "GET",
    params: { limit: 10 },
  });