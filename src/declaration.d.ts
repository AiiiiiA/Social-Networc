import 'axios';
import { PhotoType } from './types/types'

declare module "*.png";
declare module '*.ts';

declare module 'axios' {
    export interface AxiosRequestConfig {
        photo?: any;
    }
}

declare module 'formik'