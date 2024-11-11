import { DecimalPipe } from '@angular/common';
import { Component , ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { ActualiteService } from 'src/app/core/services/actualite.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
declare const bootstrap: any;

@Component({
  selector: 'app-affichage',
  providers: [DecimalPipe],
  templateUrl: './affichage.component.html',
  styleUrl: './affichage.component.scss'
})
export class AffichageComponent {
  posts: any;
  postForm!: FormGroup;
  postStatusForms: { [key: string]: FormGroup } = {};
  message!:string;
  createCommentForm!: FormGroup;
  postId!:number;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;

  constructor(private fb: FormBuilder, private actualiteService: ActualiteService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadPosts();
    console.log("test");
   
  }
  initForm(): void {
    this.postForm = this.fb.group({
      content: ['', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(255) 
      ]]
    });
    this.createCommentForm= this.fb.group({
      comment: ['', Validators.required]
    })
  }
 

  loadPosts(): void {
    this.actualiteService.getAllPost().subscribe(posts => {
      this.posts = posts;
      this.posts.forEach((post:any) => {
        this.postStatusForms[ post.id] = this.fb.group({
          postStatus: [post.postStatus, Validators.required]
        });
      });
      console.log(this.posts);
    });
  }
  updatePostStatus(post : any)  {
    debugger;
    if (this.postStatusForms[post.id].valid) {

      post.postStatus = this.postStatusForms[post.id].value.postStatus

      this.actualiteService.updatePost(post.id).subscribe(
          (response: any) => {
            alert('Post modified successfully');
          },
          (error: any) => {
            console.log('Error modifying Post:', error);

          }
      );
    }
  }
  
  openAddPostModal(): void {
    if (this.showModal) {
      const modal = new bootstrap.Modal(this.showModal);
      modal.show();
    }
  }
  addPost(): void {
    console.log("method add post")
    if (this.postForm.valid) {
    
      this.actualiteService.addPost(this.postForm.value).subscribe((res) => {
        console.log('Nouveau post ajouté:', res);
       
        this.postForm.reset();
        this.closeModal();

      },error => { console.log('in error');console.log(error)});
      console.log('out');
    }
  }
  closeModal(): void {
    if (this.showModal) {
      const modal = new bootstrap.Modal(this.showModal);
      modal.hide();
    }
  }
  get content() {
    return this.postForm.get('description');
  }
  deletePost(id: any): void {
    this.actualiteService.deletePost(id).subscribe(() => {
      this.loadPosts();
    });
  }
 


  dropdownOpenIndex: number | null = null;

  toggleDropdown(index: number): void {
    this.dropdownOpenIndex = this.dropdownOpenIndex === index ? null : index;
  }


  changeStatus(post:any, newStatus:any): void {
    post.postStatus = newStatus;
    this.dropdownOpenIndex = null; 
  }
}
