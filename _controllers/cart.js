import { axios, authAxios } from "@/setups/axios";
import QS from "query-string";

export const getCharityProjects = async (id) => {
    const res = await axios()({
        url: "/charitable-projects",
        method: "GET",
    });

    return res.data;
};

