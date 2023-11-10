/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResetDto } from '../models/ResetDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TestService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static reset(
requestBody: ResetDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/test/reset',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
