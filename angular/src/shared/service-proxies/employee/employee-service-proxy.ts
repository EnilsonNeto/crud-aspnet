import { AppConsts } from '../../AppConsts';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CreateEmployeeUserDto } from './create-employee-user-dto';
import { EmployeeUserDto } from './employee-user-dto';
import { EmployeeDto } from './Employee-dto';
import { CreateEmployeeDto } from './create-employee-dto';
import { PagedResultDtoOfEmployeeDto } from './pagedresult-dto-of-employee-dto';
import { throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';

@Injectable()
export class EmployeeServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient) {
        this.http = http;
        this.baseUrl = AppConsts.remoteServiceBaseUrl;
    }

    /**
     * @param input (optional)
     * @return Success
     */
        addUser(input: CreateEmployeeUserDto | null | undefined): Observable<EmployeeUserDto> {
            let url_ = this.baseUrl + '/api/services/app/Employee/AddUser';
            url_ = url_.replace(/[?&]$/, '');

            const content_ = JSON.stringify(input);

            const options_: any = {
                body: content_,
                observe: 'response',
                responseType: 'blob',
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                })
            };

            return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
                return this.processAddUser(response_);
            })).pipe(_observableCatch((response_: any) => {
                if (response_ instanceof HttpResponseBase) {
                    try {
                        return this.processAddUser(<any>response_);
                    } catch (e) {
                        return <Observable<EmployeeUserDto>><any>_observableThrow(e);
                    }
                } else {
                    return <Observable<EmployeeUserDto>><any>_observableThrow(response_);
                }
            }));
        }

        protected processAddUser(response: HttpResponseBase): Observable<EmployeeUserDto> {
            const status = response.status;
            const responseBlob =
                response instanceof HttpResponse ? response.body :
                    (<any>response).error instanceof Blob ? (<any>response).error : undefined;

            // tslint:disable-next-line:max-line-length
            const _headers: any = {}; if (response.headers) { for (const key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
            if (status === 200) {
                return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                    let result200: any = null;
                    const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
                    result200 = resultData200 ? EmployeeDto.fromJS(resultData200) : new EmployeeDto();
                    return _observableOf(result200);
                }));
            } else if (status !== 200 && status !== 204) {
                return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                    return throwException('An unexpected server error occurred.', status, _responseText, _headers);
                }));
            }
            return _observableOf<EmployeeUserDto>(<any>null);
        }

        /**
         * @param input (optional)
         * @return Success
         */
        // tslint:disable-next-line:member-ordering

    create(input: CreateEmployeeDto | null | undefined): Observable<EmployeeDto> {
        let url_ = this.baseUrl + '/api/services/app/Employee/Create';
        url_ = url_.replace(/[?&]$/, '');

        const content_ = JSON.stringify(input);

        const options_: any = {
            body: content_,
            observe: 'response',
            responseType: 'blob',
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };

        return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processCreate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreate(<any>response_);
                } catch (e) {
                    return <Observable<EmployeeDto>><any>_observableThrow(e);
                }
            } else {
                return <Observable<EmployeeDto>><any>_observableThrow(response_);
            }
        }));
    }

    protected processCreate(response: HttpResponseBase): Observable<EmployeeDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        // tslint:disable-next-line:max-line-length
        const _headers: any = {}; if (response.headers) { for (const key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                let result200: any = null;
                const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? EmployeeDto.fromJS(resultData200) : new EmployeeDto();
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                return throwException('An unexpected server error occurred.', status, _responseText, _headers);
            }));
        }
        return _observableOf<EmployeeDto>(<any>null);
    }

    /**
     * @param input (optional)
     * @return Success
     */

    update(input: EmployeeDto | null | undefined): Observable<EmployeeDto> {
        let url_ = this.baseUrl + '/api/services/app/Employee/Update';
        url_ = url_.replace(/[?&]$/, '');

        const content_ = JSON.stringify(input);

        const options_: any = {
            body: content_,
            observe: 'response',
            responseType: 'blob',
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };

        return this.http.request('put', url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processUpdate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdate(<any>response_);
                } catch (e) {
                    return <Observable<EmployeeDto>><any>_observableThrow(e);
                }
            } else {
                return <Observable<EmployeeDto>><any>_observableThrow(response_);
            }
        }));
    }

    protected processUpdate(response: HttpResponseBase): Observable<EmployeeDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        // tslint:disable-next-line:max-line-length
        const _headers: any = {}; if (response.headers) { for (const key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                let result200: any = null;
                const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? EmployeeDto.fromJS(resultData200) : new EmployeeDto();
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                return throwException('An unexpected server error occurred.', status, _responseText, _headers);
            }));
        }
        return _observableOf<EmployeeDto>(<any>null);
    }

    /**
     * @param id (optional)
     * @return Success
     */

    delete(id: string | null | undefined): Observable<void> {
        let url_ = this.baseUrl + '/api/services/app/Employee/Delete?';
        if (id !== undefined) {
            url_ += 'Id=' + encodeURIComponent('' + id) + '&';
        }
        url_ = url_.replace(/[?&]$/, '');

        const options_: any = {
            observe: 'response',
            responseType: 'blob',
            headers: new HttpHeaders({
            })
        };

        return this.http.request('delete', url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processDelete(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDelete(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else {
                return <Observable<void>><any>_observableThrow(response_);
            }
        }));
    }

    protected processDelete(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        // tslint:disable-next-line:max-line-length
        const _headers: any = {}; if (response.headers) { for (const key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                return throwException('An unexpected server error occurred.', status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }

    /**
     * @param id (optional)
     * @return Success
     */

    getUser(id: string | null | undefined): Observable<EmployeeUserDto> {
        let url_ = this.baseUrl + '/api/services/app/Employee/GetUser?';
        if (id !== undefined) {
            url_ += 'EmployeeId=' + encodeURIComponent('' + id) + '&';
        }
        url_ = url_.replace(/[?&]$/, '');

        const options_: any = {
            observe: 'response',
            responseType: 'blob',
            headers: new HttpHeaders({
                'Accept': 'application/json'
            })
        };

        return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processGetUser(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetUser(<any>response_);
                } catch (e) {
                    return <Observable<EmployeeUserDto>><any>_observableThrow(e);
                }
            } else {
                return <Observable<EmployeeUserDto>><any>_observableThrow(response_);
            }
        }));
    }

    protected processGetUser(response: HttpResponseBase): Observable<EmployeeUserDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        // tslint:disable-next-line:max-line-length
        const _headers: any = {}; if (response.headers) { for (const key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                let result200: any = null;
                const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? EmployeeUserDto.fromJS(resultData200) : new EmployeeUserDto();
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                return throwException('An unexpected server error occurred.', status, _responseText, _headers);
            }));
        }
        return _observableOf<EmployeeUserDto>(<any>null);
    }

    /**
     * @param id (optional)
     * @return Success
     */
    // tslint:disable-next-line:member-ordering

    get(id: string | null | undefined): Observable<EmployeeDto> {
        let url_ = this.baseUrl + '/api/services/app/Employee/Get?';
        if (id !== undefined) {
            url_ += 'Id=' + encodeURIComponent('' + id) + '&';
        }
        url_ = url_.replace(/[?&]$/, '');

        const options_: any = {
            observe: 'response',
            responseType: 'blob',
            headers: new HttpHeaders({
                'Accept': 'application/json'
            })
        };

        return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGet(<any>response_);
                } catch (e) {
                    return <Observable<EmployeeDto>><any>_observableThrow(e);
                }
            } else {
                return <Observable<EmployeeDto>><any>_observableThrow(response_);
            }
        }));
    }

    protected processGet(response: HttpResponseBase): Observable<EmployeeDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        // tslint:disable-next-line:max-line-length
        const _headers: any = {}; if (response.headers) { for (const key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                let result200: any = null;
                const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? EmployeeDto.fromJS(resultData200) : new EmployeeDto();
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
                return throwException('An unexpected server error occurred.', status, _responseText, _headers);
            }));
        }
        return _observableOf<EmployeeDto>(<any>null);
    }

    /**
     * @param keyword (optional)
     * @param skipCount (optional)
     * @param maxResultCount (optional)
     * @return Success
     */
   // tslint:disable-next-line:member-ordering
   getAll(keyword: string | null | undefined,
       skipCount: number | null | undefined,
       maxResultCount: number | null | undefined): Observable<PagedResultDtoOfEmployeeDto> {
       let url_ = this.baseUrl + '/api/services/app/Employee/GetAll?';
       if (keyword !== undefined) {
           url_ += 'Keyword=' + encodeURIComponent('' + keyword) + '&';
       }
       if (skipCount !== undefined) {
           url_ += 'SkipCount=' + encodeURIComponent('' + skipCount) + '&';
       }
       if (maxResultCount !== undefined) {
           url_ += 'MaxResultCount=' + encodeURIComponent('' + maxResultCount) + '&';
       }
       url_ = url_.replace(/[?&]$/, '');

       const options_: any = {
           observe: 'response',
           responseType: 'blob',
           headers: new HttpHeaders({
               'Accept': 'application/json'
           })
       };

       return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
           return this.processGetAll(response_);
       })).pipe(_observableCatch((response_: any) => {
           if (response_ instanceof HttpResponseBase) {
               try {
                   return this.processGetAll(<any>response_);
               } catch (e) {
                   return <Observable<PagedResultDtoOfEmployeeDto>><any>_observableThrow(e);
               }
           } else {
               return <Observable<PagedResultDtoOfEmployeeDto>><any>_observableThrow(response_);
           }
       }));
   }

   protected processGetAll(response: HttpResponseBase): Observable<PagedResultDtoOfEmployeeDto> {
       const status = response.status;
       const responseBlob =
           response instanceof HttpResponse ? response.body :
               (<any>response).error instanceof Blob ? (<any>response).error : undefined;

       // tslint:disable-next-line:max-line-length
       const _headers: any = {}; if (response.headers) { for (const key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
       if (status === 200) {
           return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
               let result200: any = null;
               const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
               result200 = resultData200 ? PagedResultDtoOfEmployeeDto.fromJS(resultData200) : new PagedResultDtoOfEmployeeDto();
               return _observableOf(result200);
           }));
       } else if (status !== 200 && status !== 204) {
           return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
               return throwException('An unexpected server error occurred.', status, _responseText, _headers);
           }));
       }
       return _observableOf<PagedResultDtoOfEmployeeDto>(<any>null);
   }

   getListByDepartamentId(departamentId: string | null | undefined): Observable<PagedResultDtoOfEmployeeDto> {
    let url_ = this.baseUrl + '/api/services/app/Employee/GetListByDepartamentId?';
    if (departamentId !== undefined) {
        url_ += 'departamentId=' + encodeURIComponent('' + departamentId) + '&';
    }
    url_ = url_.replace(/[?&]$/, '');

    const options_: any = {
        observe: 'response',
        responseType: 'blob',
        headers: new HttpHeaders({
            'Accept': 'application/json'
        })
    };

    return this.http.request('get', url_, options_).pipe(_observableMergeMap((response_: any) => {
        return this.processGetAllEmployee(response_);
    })).pipe(_observableCatch((response_: any) => {
        if (response_ instanceof HttpResponseBase) {
            try {
                return this.processGetAll(<any>response_);
            } catch (e) {
                return <Observable<PagedResultDtoOfEmployeeDto>><any>_observableThrow(e);
            }
        } else {
            return <Observable<PagedResultDtoOfEmployeeDto>><any>_observableThrow(response_);
        }
    }));
}

protected processGetAllEmployee(response: HttpResponseBase): Observable<PagedResultDtoOfEmployeeDto> {
    const status = response.status;
    const responseBlob =
        response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    // tslint:disable-next-line:max-line-length
    const _headers: any = {}; if (response.headers) { for (const key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
    if (status === 200) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            const resultData200 = _responseText === '' ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfEmployeeDto.fromJS(resultData200) : new PagedResultDtoOfEmployeeDto();
            return _observableOf(result200);
        }));
    } else if (status !== 200 && status !== 204) {
        return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException('An unexpected server error occurred.', status, _responseText, _headers);
        }));
    }
    return _observableOf<PagedResultDtoOfEmployeeDto>(<any>null);
}

}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined) {
        return _observableThrow(result);
    } else {
        return _observableThrow(console.log('SwaggerException'));
    }
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next('');
            observer.complete();
        } else {
            const reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}
