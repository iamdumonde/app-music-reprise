import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  //Classe Input permet de récupérer les data de l'enfant
  // album est liée à une entrée [album] du parent dans le sélecteur
  @Input() album!: Album;

  //variable permettant de stocker la liste des chansons dun album
  songs: string[] | undefined = [];

  constructor(
    private albumService: AlbumService
  ) { }

  /**
   * récupère la liste des chansons
   */
  ngOnChanges():void {
    if(this.album){
      this.songs = this.albumService.getAlbumList(this.album.id)?.list;
    }
   }
   
  ngOnInit() {
    console.log(this.album); //pour l'instant c'est undefined
  };
}
