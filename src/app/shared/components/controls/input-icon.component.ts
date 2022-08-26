import {Component, EventEmitter, Input, OnDestroy, Output} from "@angular/core";

@Component({
  selector: 'input-icon',
  template: `
    <div style="width: 300px">
      <div class="icon-input-container">
        <label>
          <i [class]='icon'></i>
          <input
            class="icon-input"
            [type]='type'
            (change)="onChange($event)"/>
        </label>
      </div>
    </div>
  `
})
export class InputIconComponent implements OnDestroy {
  @Input() icon: string = '';
  @Input() type: string = '';

  @Output() changeValue: EventEmitter<any>;

  constructor() {
    this.changeValue = new EventEmitter<any>();
  }

  onChange(event: any) {
    this.changeValue.emit(event);
  }

  ngOnDestroy() {
    this.changeValue.complete();
  }

}
