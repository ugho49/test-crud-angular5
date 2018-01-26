import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '../classes/album';
import {Photo} from '../classes/photo';

@Injectable()
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get<Album[]>(' /api/albums/');
  }

  getPhotos(albumId: number) {
    return this.http.get<Photo[]>('/api/albums/' + albumId + '/photos');
  }
}
