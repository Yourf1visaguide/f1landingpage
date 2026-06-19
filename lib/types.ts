
export type Testimonial = {
  id:number;
  tag?:string;
  tagColor?:string;
  description:string;
  name:string;
  visa:string;
  location:string;
  initials:string;
  priority:boolean;
  videoUrl:string;
  type: "image" | "video"
}
