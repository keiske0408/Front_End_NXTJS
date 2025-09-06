import getConfig from 'next/config';

const {
    publicRunConfig : { processEnv },
} = getConfig();

export const config = {
    get value() {
        return {
            API_URL: processEnv.env.NEXT_PRIVATE_API_URL!,
        };
    },
};