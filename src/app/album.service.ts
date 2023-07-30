import { Injectable } from '@angular/core';
import { Album, List } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';


@Injectable({
  providedIn: 'root'
})

export class AlbumService {
  private _albums: Album[] = ALBUMS;
  private _albumList: List[] = ALBUM_LISTS;

  constructor() { }
/**
 * @returns la liste complète des albums
 */
  getAlbums():Album[]{
    return this._albums;
  };

  /**
   * Cette fonction permet de savoir l'id précis d'un album
   * @param id  identifiant de l'album à rechercher
   * @returns 
   */
  getAlbum(id:string):Album | undefined {
    return this._albums.find(album => album.id === id);
  };

  /**
   * Cette fonction permet de comparer les id pour pouvoir retourner la liste des chansons d'un 
   * album
   * @param id identifiqnt de l'album à rechercher
   * @returns 
   */
  getAlbumList(id:string): List | undefined{
    return this._albumList.find(list => list.id === id);
  }
}
