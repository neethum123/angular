import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
constructor(private api:ApiService){}
todos:any;
inputAdd!:string;
title:string='';
ngOnInit(){
  this.api.getTodo().subscribe((data:any)=>{
    this.todos=data
  })

}

del(data:any)
{
this.todos=this.todos.filter((item:{id:any;})=>item.id!==data.id);
}
add(){
  if(this,this.title.trim()!==''){
    const news={title:this.title,finished:false};
    this.todos.push(news);
    this.title='';
  }
}

}


