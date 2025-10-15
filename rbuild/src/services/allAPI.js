import commonAPI from "./commonAPI";
import { serverURL } from "./serverURL";

// Add resume to the server - POST - reqBody
// Its called by steps component

export const addResumeAPI = async (resumeData) =>{
    return await commonAPI('POST', `${serverURL}/resumes`, resumeData)
}

export const addHistoryAPI = async (resumeData) =>{
    return await commonAPI('POST', `${serverURL}/history`, resumeData)
}

export const getHistoryAPI = async () =>{
    return await commonAPI('GET', `${serverURL}/history`)
}
export const getResumesAPI = async () =>{
    return await commonAPI('GET', `${serverURL}/resumes`)
}
export const deleteResumeAPI = async (id) =>{
    return await commonAPI('DELETE', `${serverURL}/resumes/${id}`)
}
export const deleteHistoryAPI = async (id) =>{
    return await commonAPI('DELETE', `${serverURL}/history/${id}`)
}
export const getHistoryAPIById = async (id) =>{
    return await commonAPI('GET', `${serverURL}/history/${id}`,{})
}