import { Injectable } from '@angular/core';
import { Article } from 'src/app/shared/interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor() {}

  public getBookmarks(): Article[] | null {
    let bookmarks;
    try {
      const localData = localStorage.getItem('bookmarks');

      if (localData) {
        bookmarks = JSON.parse(localData) as Article[];
      } else {
        bookmarks = null;
      }
    } catch {
      console.log('Local storage parsing error');
      bookmarks = null;
    }

    return bookmarks;
  }

  public setBookmark(article: Article) {
    let bookmarks = this.getBookmarks();

    if (bookmarks?.length) {
      bookmarks.push(article);
    } else {
      bookmarks = [];
    }

    return localStorage.setItem('bookmarks', bookmarks.toString());
  }
}
