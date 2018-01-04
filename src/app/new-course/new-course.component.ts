import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {

  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  remove(topic: FormControl) {
    const topicToRemove = this.topics.controls.indexOf(topic);
    this.topics.removeAt(topicToRemove);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

}
