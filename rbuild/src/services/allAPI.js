import commonAPI from "./commonAPI";
import { serverURL } from "./serverURL";

// Add resume to the server - POST - reqBody
// Its called by steps component

export const addResumeAPI = async (resumeData) =>{
    return await commonAPI('POST', `${serverURL}/resumes`, resumeData)
}