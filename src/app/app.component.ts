import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { Subject, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  url = `https://api.thecatapi.com/v1/breeds`;
  api_key = "live_ccoozsev8nF86SL1kr8lU7nO7CJ6Whb2otwi0qmMwpAm3HRAHUYqAT1pxAUPtilM"
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  sub = new Subject();
  subscribeable: Subscription;
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.fetchPosts();
  }
  onCreatePost(postData?:Post){
    this.http.post('url',{
      headers: {
      'x-api-key': this.api_key
     }
  }).subscribe(data=>{
      console.log('data was posted')
    },
    error=>{
      this.error = error.message
      this.sub.next(error)
      console.log('subs--',this.sub)
    })
  }
  onFetchPosts(){
    this.fetchPosts();
  }
  onClearPosts(){

  }

  private fetchPosts(){
    this.isFetching = true;
    this.http.get('url').pipe( map(toPipe=>{
      return toPipe
    })).subscribe( pipedData=>{
      this.isFetching = false;
      // this.loadedPosts = (pipedData) as Post
    })
  }

}
