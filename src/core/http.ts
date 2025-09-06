import axios, { AxiosError } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { config } from './config';

const http = axios.create();
export const commonsApi = axios.create({ baseURL: config.value.API_URL });

//next JS -> SSR
type RequestHandlerCallback = 
(
    req: NextApiRequest, 
    res: NextApiResponse
) => Promise<void>;

export const buildRequestHandler = 
    (callbackFn: RequestHandlerCallback) => async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            await callbackFn(req,res);
        } catch (error) {
            if (error instanceof AxiosError) {
                res 
                    .status(error.response?.status ?? 500)
                    .json(error.response?.data ?? "Something went wrong");
                    return;
            }
            res.status(500).json("Something went wrong")
        }
    };

export default http;
