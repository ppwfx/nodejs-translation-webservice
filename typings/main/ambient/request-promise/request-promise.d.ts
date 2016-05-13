// Compiled using typings@0.6.9
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/request-promise/request-promise.d.ts
// Type definitions for request-promise v0.4.2
// Project: https://www.npmjs.com/package/request-promise
// Definitions by: Christopher Glantschnig <https://github.com/cglantschnig/>, Joe Skeen <http://github.com/joeskeen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Change [0]: 2015/08/20 - Aya Morisawa <https://github.com/AyaMorisawa>


declare module 'request-promise' {
    import request = require('request');
    import http = require('http');
        
    interface RequestPromise extends request.Request {
        then<TResult>(onfulfilled?: (value: any) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<TResult>;
        then<TResult>(onfulfilled?: (value: any) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): Promise<TResult>;
        catch(onrejected?: (reason: any) => any | PromiseLike<any>): Promise<any>;
        catch(onrejected?: (reason: any) => void): Promise<any>;
        finally<TResult>(handler: () => PromiseLike<TResult>): Promise<any>;
        finally<TResult>(handler: () => TResult): Promise<any>;
        promise(): Promise<any>;
    }
    
    interface RequestPromiseOptions extends request.CoreOptions {
        simple?: boolean;
        transform?: (body: any, response: http.IncomingMessage) => any;
        resolveWithFullResponse?: boolean;
    }
    
    var requestPromise: request.RequestAPI<RequestPromise, RequestPromiseOptions, request.RequiredUriUrl>;
	export = requestPromise;
}