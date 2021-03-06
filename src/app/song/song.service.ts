import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Song } from "./song.model";
import { Program } from "../program/program.model";
import { SongListFilter } from "../songlist/songlistfilter.model";

@Injectable()
export class SongService {

  constructor(private http:HttpClient){}

  //baseUrl: string = "http://coro.stevisco.info:8080";
  baseUrl: string = "http://localhost:8080";

  getBaseUrl():string {
    return this.baseUrl;
  }

  

  save(song:Song){
        return this.http.post(this.baseUrl+"/songs",song);
  }
 
  getSongListFilter(){
    return this.http.get<SongListFilter>(this.baseUrl+"/songsfilter");
  }

  getAllSearch(sexpr:String){
    return this.http.get<Song[]>(this.baseUrl+"/songssearch/"+sexpr);
  }

  getAllByTag(tag:String){
    return this.http.get<Song[]>(this.baseUrl+"/songsbytag/"+tag);
  }

  getAll(alphasel:String){
    var suffix: String = "";
    if (alphasel) suffix="/"+alphasel;
    return this.http.get<Song[]>(this.baseUrl+"/songs"+suffix);
  }

  get(id:String){
   return this.http.get<Song>(this.baseUrl+"/song/"+id);
  }


  getProgram(id:String){
    return this.http.get<Program>(this.baseUrl+"/program/"+id);
  }

  getAllPrograms(){
    return this.http.get<Program[]>(this.baseUrl+"/programs");
  }
}