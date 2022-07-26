import { HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map, Subject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
    error = new Subject<string>();

    constructor(private http: HttpClient) { }
    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        this.http
            .post<{ name: string }>(
                'https://ng-complete-guide-27f76-default-rtdb.firebaseio.com/posts.json',
                postData,
                {
                    observe: 'response',
                }
            )
            .subscribe(
                (responseData) => {
                    console.log(responseData);
                },
                (error) => {
                    this.error.next(error.message);
                }
            );
    }

    fetchPosts() {

        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'key');
        return this.http
            .get<{ [key: string]: Post }>(
                'https://ng-complete-guide-27f76-default-rtdb.firebaseio.com/posts.json',
                {
                    headers: new HttpHeaders({
                        'customHeader': 'hello'
                        ,
                    }
                    ),


                    // params: new HttpParams().set('print','pretty')
                    params: searchParams,
                }
            )
            .pipe(
                map((responseData) => {
                    const postArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return postArray;
                })
            );
    }

    deletePosts() {
        return this.http.delete(
            'https://ng-complete-guide-27f76-default-rtdb.firebaseio.com/posts.json',
            {
                observe: 'events'
            }
        ).pipe(tap(event => {
            console.log(event);
            if (event.type === HttpEventType.Sent) {
                // console.log(event.body)
            }
            if (event.type === HttpEventType.Response) {
                console.log(event.body)
            }
        }))
    }
}
